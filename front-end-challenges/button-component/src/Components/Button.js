import '../Button.css'

const Button = props => {
    const {text="Default", variant=null, disableShadow=null, disabled=null, size=null, color=null} = props
    return (
        <button className=
            {`default 
            ${variant && variant} 
            ${disableShadow && "disableShadow"} 
            ${disabled && 'disabled'}
            ${size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === "lg" ? 'lg' : ""}
            ${color && `${color}-color`}`
            } >
            {text}
        </button>
    )
}

export default Button