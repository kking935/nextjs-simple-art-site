import { useState } from 'react';
import Link from 'next/link'
import Divider from './Divider';
import { FailuerIcon, SuccessIcon, UploadIcon } from './Icons';

const endpoint = 'https://6pt3w3cmjl.execute-api.us-east-1.amazonaws.com/default/sendContactEmail'
const inputStyles = 'mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SuccessMessage = () => (
        <div className='text-center w-full pt-3 pb-6'>
            <SuccessIcon className="text-green-500 fill-current mx-auto w-16 h-16" />
            <p className='text-lg font-bold pt-8 pb-5'>¡Mensaje enviado!</p>
            <Divider />
            <p className='text-sm font-semibold pt-5'>
                ¡Gracias por contactarme!
            </p>
            <p className='text-sm font-semibold pt-3 pb-12'>
                Responderé a su mensaje tan pronto como pueda.
            </p>
            <Link href='/'>
                <a className='text-sm shadow-md bg-blue-500 rounded-xl text-white p-3 text-left'>Regresar a la pagina principal</a>
            </Link>
        </div>
    )

const FailureMessage = () => (
        <div className='text-center w-full pt-3 pb-6'>
            <FailuerIcon className='text-red-500 fill-current mx-auto w-16 h-16' />
            <p className='text-lg font-bold pt-8 pb-5'>No se pudo enviar el mensaje</p>
            <Divider />
            <p className='text-sm font-semibold pt-5'>
                Disculpe las molestias, investigaré esto tan pronto como pueda.
            </p>
            <p className='text-sm font-semibold pt-3 pb-12'>
                Mientras tanto, puedes contactarme directamente en <a className='underline text-blue-500' href='mailto:contacto@marionino.com'>contacto@marionino.com</a>
            </p>
            <Link href='/'>
                <a className='text-sm shadow-md bg-blue-500 rounded-xl text-white p-3 text-left'>Regresar a la pagina principal</a>
            </Link>
        </div>
    )

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [formResponse, setFormResponse] = useState(undefined)
    const [ready, setReady] = useState(false)

    const handleChange = (event) => {
        const name = document.getElementById('name-input').value
        const email = document.getElementById('email-input').value
        const message = document.getElementById('message-input').value
        console.log(name, email, message)
        const errors = {}
        if (!validateName(name, errors).name && !validateEmail(email, errors).email && !validateMessage(message, errors).message) {
            setReady(true)
        }
    }

    const validateName = (name, errors) => {
        if (!name) {
            errors.name = 'Por favor proporcione su nombre completo'
        }
        return errors
    }

    const validateEmail = (email, errors) => {
        if (!email) {
            errors.email = 'Por favor proporcione un correo electrónico'
        }
        else if (!re.test(String(email).toLowerCase())) {
            errors.email = 'Proporcione un correo electrónico válido'
        }
        return errors
    }

    const validateMessage = (message, errors) => {
        if (!message) {
            errors.message = 'Proporcione un mensaje breve'
        }
        else if (message.length < 50) {
            errors.message = 'Los mensajes deben tener al menos 50 caracteres'
        }
        else if (message.length > 500) {
            errors.message = 'Los mensajes no deben tener más de 500 caracteres'
        }
        return errors
    }

    const checkInput = (input, type) => {
        const validators = {
            "name": validateName,
            "email": validateEmail,
            "message": validateMessage
        }
        let errors = {}
        const errorElem = document.getElementById(`${type}-error`)
        errors = validators[type](input, errors)
        if (errors[type]) {
            // Set error message or wipe old error message
            errorElem.innerText = errors[type]
        }
        else if (errorElem.innerText) {
            errorElem.innerText = ''
        }
        return errors[type] === undefined
    }

    const validateForm = (data) => {
        const { name, email, message } = data
        console.log("the email is ", email)
        return checkInput(name.value, 'name') && checkInput(email.value, 'email') && checkInput(message.value, 'message')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateForm(event.target)) {
            return false
        }
        setLoading(true)
        const { name, email, message } = event.target
        const body = JSON.stringify({
            senderName: name.value,
            senderEmail: email.value,
            message: message.value
        })
        const requestOptions = {
            method: "POST",
            body
        }
        fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error("Error in fetch")
                return response.json()
            })
            .then((response) => {
                console.log('Success: ', response)
                setLoading(false)
                setFormResponse(<SuccessMessage />)
            })
            .catch((error) => {
                console.log('Error: ', error)
                setLoading(false)
                setFormResponse(<FailureMessage />)
            })
    }

    const ErrorText = ({ name }) => (
            <p id={`${name}-error`} className='pl-1 pt-1 text-sm  text-red-500' />
        )

    return (
        <div className=' text-white w-full'>
            <div className={`${loading || formResponse ? '' : 'hidden'} mx-auto max-w-md my-10 rounded-2xl shadow-xl px-10 pb-5 pt-10`}>
                <div className={`${loading ? '' : 'hidden'} w-full h-auto py-10 flex flex-col items-center justify-center`}>
                    <UploadIcon className='w-16 h-16' />
                    <p className='cursor-default mt-10 text-xl font-bold'>SUMISIÓN</p>
                </div>
                {formResponse}
            </div>
            <div className={`${loading || formResponse ? 'hidden' : ''}`}>
                <div className='text-center'>
                    <p className='text-xl pt-5 italic'>
                        ¿Quieres construir algo increíble juntos? <br />
                    </p>
                    <p className=' text-2xl font-bold pt-5'>¡Mantengámonos en contacto!</p>
                </div>
                <form className='my-10 rounded-2xl shadow-xl px-10 pb-5 pt-10 max-w-3xl mx-auto bg-gray-900' onChange={handleChange} onSubmit={handleSubmit}>
                    <label className="block mb-5">
                        <span>Nombre completo</span>
                        <input onBlur={event => checkInput(event.target.value, 'name')} id='name-input' required type="text" name='name' placeholder="" className={inputStyles} />
                        <ErrorText name='name' />
                    </label>
                    <label className="block mb-5">
                        <span>Correo electrónico</span>
                        <input id='email-input' onBlur={event => checkInput(event.target.value, 'email')} required type="email" name='email' placeholder="" className={inputStyles} />
                        <ErrorText name='email' />
                    </label>
                    <label className="block mb-5">
                        <span>Mensaje</span>
                        <textarea id='message-input' onBlur={event => checkInput(event.target.value, 'message')} required placeholder="" name='message' className={inputStyles} rows="5" />
                        <ErrorText name='message' />
                    </label>
                    <div className='text-center mt-5 py-2'>
                        <button disabled={!ready} type='submit' className={`${ready ? '' : 'opacity-50 cursor-default'} bg-blue-500 p-3 rounded-xl text-white `}>Entregar</button>
                    </div>
                    <p id='result-text' />
                </form>
            </div>
        </div>
    );
}

export default Contact