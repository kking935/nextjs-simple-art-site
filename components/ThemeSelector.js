import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import { useThemeContext } from '../context/theme'
import Divider from '../components/Divider'

const ThemeSelector = () => {
    let {theme, toggleTheme} = useThemeContext()
    const [displaySelector, setDisplaySelector] = useState(false)

    const changeTheme = (key, color) => {
        let newTheme = theme
        newTheme[key] = color
        toggleTheme(newTheme)
    }
    
    return (
        <>
            <div className={` pointer-events-none w-full z-50 fixed flex px-10 mt-3 `}>
                <div className='flex-grow' />
                {displaySelector ? 
                    <button onClick={() => setDisplaySelector(!displaySelector)} className=' pointer-events-auto px-5 py-2 font-bold border border-current rounded-lg'>X</button>
                    : <button onClick={() => setDisplaySelector(!displaySelector)} className=' pointer-events-auto p-2 font-bold border border-current rounded-lg'>CAMBIAR COLORES</button>            
                }
            </div>
            <div className={`${displaySelector ? 'flex' : 'hidden'} opacity-95 mt-24 z-40 w-full fixed items-center justify-center`}>
                <div className='py-5 px-10 bg-black rounded-xl text-white flex flex-row max-w-7xl'>
                    <div className='border-r mb-10 flex justify-start items-center flex-wrap w-3/4'>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.pageBgColor} onChange={(color) => changeTheme('pageBgColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.pageBgColor }} />
                                <div>colorDePortada: <br />{theme.pageBgColor}</div>
                            </div>
                        </div>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.menuBgColor} onChange={(color) => changeTheme('menuBgColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.pageBgColor }} />
                                <div>colorDelMenu: <br />{theme.menuBgColor}</div>
                            </div>
                        </div>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.footerBgColor} onChange={(color) => changeTheme('footerBgColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.pageBgColor }} />
                                <div>colorDePieDePagina: <br />{theme.footerBgColor}</div>
                            </div>
                        </div>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.textColor} onChange={(color) => changeTheme('textColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.textColor }} />
                                <div>colorDeTexto: <br />{theme.textColor}</div>
                            </div>
                        </div>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.buttonBgColor} onChange={(color) => changeTheme('buttonBgColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.buttonBgColor }} />
                                <div>colorDeButon: <br />{theme.buttonBgColor}</div>
                            </div>
                        </div>
                        <div className='mt-5 mx-5'>
                            <HexColorPicker color={theme.buttonTextColor} onChange={(color) => changeTheme('buttonTextColor', color)} />
                            <div className='flex justify-start items-center mt-10'>
                                <div className="rounded border border-white p-10 w-10 h-10 mr-5" style={{ backgroundColor: theme.buttonTextColor }} />
                                <div>colorDeTextoDeButon: <br />{theme.buttonTextColor}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 ml-10 flex flex-col items-center justify-start space-y-10 w-1/4'>
                        <div>
                            <p>CSS:</p>
                            <Divider />
                            <pre className='mt-3'>{Object.keys(theme).map((key) => {
                                return <p>{key}: "{theme[key]}";</p>
                            })}</pre>
                        </div>
                        <div>
                            <p>JSON:</p>
                            <Divider />
                            <pre className='mt-3'>{Object.keys(theme).map((key) => {
                                return <p>{key}: "{theme[key]}",</p>
                            })}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThemeSelector