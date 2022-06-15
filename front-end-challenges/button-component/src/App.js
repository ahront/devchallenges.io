
import './App.css'
import Button from './Components/Button'

const App = () => {

  const disableShadow = true
  const disabled = true
  return (
    <div>
      <h1>Buttons</h1>
      <div className='container'>
       
        <h2>Button variants:</h2>
          <div className='button-type'>
            <div>
              <p>{"<Button />"}</p>
              <Button />
            </div>
            <div>
              <p>{"<Button variant='outline' />"}</p>
              <Button variant="outline" />
            </div>
            <div>
              <p>{"<Button variant='text' />"}</p>
              <Button variant="text" />
            </div>
          </div>
          
          <h2>Disable button shadow:</h2>
          <div className='button-type'>
            <div>
              <p>{"<Button disableShadow />"}</p>
              <Button disableShadow />
            </div>
          </div>

          <h2>Disable button:</h2>
          <div className="button-type">
            <div>
                <p>{"<Button disabled />"}</p>
                <Button disabled />
            </div>
            <div>
                <p>{"<Button variant='text' disabled />"}</p>
                <Button variant="text" disabled />
            </div>
           </div>

          <h2>Buttons with icons:</h2>
          <div className='button-type'>
            
          </div>
          
          <h2>Button sizes:</h2>
          <div className='button-type'>
            <div>
              <p>{"<Button size='sm' />"}</p>
              <Button size="sm" />
            </div>
            <div>
              <p>{"<Button size='md' />"}</p>
              <Button size="md" />
            </div>
            <div>
              <p>{"<Button size='lg' />"}</p>
              <Button size="lg" />
            </div>
          </div>
        
        <h2>Button colors:</h2>
        <div className='button-type'>
          <div>
            <p>{"<Button color='default' />"}</p>
            <Button color="default" />
          </div>
          <div>
            <p>{"<Button color='primary' />"}</p>
            <Button color="primary" />
          </div>
          <div>
            <p>{"<Button color='secondary' />"}</p>
            <Button color="secondary" />
          </div>
          <div>
            <p>{"<Button color='danger' />"}</p>
            <Button color="danger" />
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App;
