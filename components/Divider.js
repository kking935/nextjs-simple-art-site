const Divider = ({ black }) => {
    return (
        <div className={`${black ? 'border-black' : 'border-gray-800' } border-b w-full`} />
    )
}

export default Divider