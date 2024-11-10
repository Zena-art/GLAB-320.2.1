function Header() {
  return  <h1>Simple React Application</h1>
}

function Content(props){
  return (
    <p style={{
      color: props.color,
      fontFamily: 'Arial, sans-serif',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10,
      margin: 20,
      backgroundColor: '#f0f0f0',
      borderRadius: 10
    }}>
      {props.text}
    </p>
  )
}
function Footer(){
  return (
    <h1>Created by Me, of course.</h1>
  )
}



function App() {
  

  return (
    <>
    <Header />
    <Content color="blue" text="This is my first React Application!" />
    <Content color="red" text="Wish me luck!" />
    <Content color="green" text="I think I've got it!" />
    <Footer /> 
    </>
  )
}

export default App
