import '../App.css'

const Button = props => {
    const {text, variant, disableShadow, disabled} = props
    return (
        <button className=
            {`default ${variant} 
            ${disableShadow && "disableShadow"} 
            ${disabled && 'disabled'}`}>
            {text}
        </button>
    )
}

export default Button