import Input from './InputComponents/Input'
import "../InputComponenetStyles.css"
const InputComponent = () => {
    const error = true
    const disabled = true
    const fullwidth = true
    const startIcon = true
    const endIcon = true
    return (
        <div>
            <content>
                <header>
                    <h1>Inputs</h1>
                </header>
                <div class="flex-container">
                    <article>
                        <p>{"<Input />"}</p>
                        <label>Label</label>
                        <Input />
                    </article>
                    <article>
                        <p>{"<Input error />"}</p>
                        <label>Label</label>
                        <Input error/>
                    </article>
                    <article>
                        <p>{"<Input disabled />"}</p>
                        <label>Label</label>
                        <Input disabled />
                    </article>
                </div>
                <div class="flex-container">
                    <article>
                        <p>{"<Input helperText='Some interesting text' />"}</p>
                        <label>Label</label>
                        <Input helperText="Some interesting text" />
                    </article>
                    <article>
                        <p>{"<Input helperText='Some interesting text' error/>"}</p>
                        <label>Label</label>
                        <Input helperText="Some interesting text" error />
                    </article>

                </div>
                <div class="flex-container">
                    <article>
                        <p>{"<Input startIcon />"}</p>
                        <label>Label</label>
                        <Input startIcon />
                    </article>
                    <article>
                        <p>{"<Input startIcon />"}</p>
                        <label>Label</label>
                        <Input startIcon />
                    </article>
                    <article>
                        <p>{"<Input startIcon />"}</p>
                        <label>Label</label>
                        <Input startIcon />
                    </article>
                </div>
                <div class="flex-container">
                    <article>
                        <p>{"<Input endIcon />"}</p>
                        <label>Label</label>
                        <Input endIcon />
                    </article>
                    <article>
                        <p>{"<Input endIcon />"}</p>
                        <label>Label</label>
                        <Input endIcon />
                    </article>
                    <article>
                        <p>{"<Input endIcon />"}</p>
                        <label>Label</label>
                        <Input endIcon />
                    </article>
                </div>
                <div>
                    <article>
                        <p>{"<Input value='Text' />"}</p>
                        <label>Label</label>
                        <Input value="Text" />
                    </article>
                </div>
                <div class="flex-container">
                    <article>
                        <p>{"<Input size='sm' />"}</p>
                        <label>Label</label>
                        <Input size="sm" />
                    </article>
                    <article>
                        <p>{"<Input size='md' />"}</p>
                        <label>Label</label>
                        <Input size="md" />
                    </article>
                </div>
                <div>
                    <article>
                        <p>{"<Input fullwidth />"}</p>
                        <label>Label</label>
                        <Input fullwidth />
                    </article>
                </div>
                <div>
                    <article>
                        <p>{"<Input multiline='4' />"}</p>
                        <label>Label</label>
                        <Input multiline="4" />
                    </article>
                </div>
            </content>
        </div>
    )
}

export default InputComponent