import styled, {css} from 'styled-components'
import {
    Add, 
    AlternateEmail, 
    AttachFile, 
    Backspace, 
    Autorenew, 
    Bedtime, 
    Ballot, 
    Biotech, 
    Bluetooth, 
    BluetoothDrive, 
    Calculate, 
    Book, 
    Brush, 
    Build, 
    Call, 
    Cancel, 
    Check, 
    Coffee, 
    ElectricCar} from "@styled-icons/material"

const Input = ({
    error = null, 
    disabled = null,
    helperText = null, 
    value = null,
    size = null, 
    fullwidth = null, 
    startIcon = null, 
    endIcon = null, 
    multiline = null 
    }) => {
    

    /* shared styles for input and text-area */

    const SharedStyles = css`
         
        /* default input and text-area styles */
        border: 1px solid #828282;
        width: 200px;
        border-radius: 8px;
        padding-left: 10px;
        outline: none;

        &:hover {
            border: 1px solid #333333;
        }

        &:focus {
            border: 1px solid #2962FF;
        }

        /* error input styles */
        ${error && 
            `
            border: 1px solid #D32F2F;

            &:hover {
                border: 1px solid #333333;
            }

            &:focus {
                border: 1px solid #D32F2F;
            }
        `}
        
        /* disabled input styles */
        ${disabled && 
            `
            border: 1px solid #E0E0E0;
            background: #F2F2F2;
            pointer-events: none;
            &:hover {
                border: 1px solid #E0E0E0;
            }

            &:focus {
                border: 1px solid #E0E0E0;
            }
        `}
    `
    
    const Input = styled.input`
        ${SharedStyles}

        /* default input styles */ 
        height: 56px;

        /* small input styles */
        ${size === "sm" && 
            `
                height: 40px;
            `
        }

        /* medium input styles */
        ${size === "md" && 
            `
                height: 56px;
            `
        }

        /* fullwidth input styles */
        ${fullwidth && 
            `
                width: 100%;
            `
        }

        /* start icon styles */
        ${startIcon && 
            `
                padding-left: 35px;
            `
        }

    `

    const TextArea = styled.textarea`
        ${SharedStyles}

        /* default textarea styles */
        height: calc(${multiline} * 56px);
        resize: none;
        padding: 10px 0px 0px 10px;
    `

    const HelperText = styled.p`
        /* default text styles */
        margin: 0;
        font-size: 15px;
        font-family: Noto Sans JP;
        color: #828282;
        font-weight: 400;

        /* error text styles */
        ${error && 
            `
            color: #D32F2F;
            `
        }
    `

    const InputDiv = styled.div`
        display: flex;
        align-items center;
    `

    const StartIcon = styled.div`
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        margin-left: 5px;
    `

     const EndIcon = styled.div`
        width: 1.5rem;
        height: 1.5rem;
        right: 2.5rem;
        position: relative;
    `

    const generateRandomIcon = () => {
        const icons = [
            Add, 
            AlternateEmail, 
            AttachFile, 
            AlternateEmail, 
            AttachFile, 
            Backspace, 
            Autorenew,
            Bedtime,
            Ballot,
            Biotech,
            Bluetooth,
            BluetoothDrive,
            Book,
            Brush,
            Build,
            Calculate,
            Call,
            Cancel,
            Check,
            Coffee,
            ElectricCar
        ]
        const genRandomIcon = icons[Math.floor(Math.random() * icons.length)]
        return styled(genRandomIcon)`
            color: gray;
            `
    }
    
   const Icon = generateRandomIcon() 

    return (
        <div>
            <InputDiv>
                <StartIcon>
                    {startIcon && <Icon />}
                </StartIcon>
                {multiline 
                    ? <TextArea placeholder="Placeholder" /> 
                    : <Input placeholder="Placeholder" defaultValue={value}/>}
                <EndIcon>
                    {endIcon && <Icon />}
                </EndIcon>
            </InputDiv>
            {helperText && <HelperText>{helperText}</HelperText>}
        </div>       
    )
}

export default Input