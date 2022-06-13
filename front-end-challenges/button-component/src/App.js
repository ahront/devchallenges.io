import Button from './Components/Button'

const App = () => {

  const disableShadow = true
  const disabled = true
  return (
    <div>
      <Button variant="" text="default" disableShadow/>
      <Button variant="text" text="default" disabled/>
    </div>
  )
  
}

export default App;
