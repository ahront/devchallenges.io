import '../Button.css'

const Button = props => {
    const {
        text="Default", 
        variant=null, 
        disableShadow=null, 
        disabled=null, 
        size=null, 
        color=null,
        startIcon=null,
        endIcon=null,} = props
    
        return (
        <button className=
            {`default 
            ${variant && variant} 
            ${disableShadow && "disableShadow"} 
            ${disabled && 'disabled'}
            ${size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === "lg" ? 'lg' : ""}
            ${color && `${color}-color`}`
            } >
            <div className='button-text'>
                {startIcon && <p className='material-icons'>{startIcon}</p>}
                <p>{text}</p>
                {endIcon && <p className='material-icons'>{endIcon}</p>}
            </div>
        </button>
    )
}

export default Button