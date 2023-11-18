import Login from '@/Components/Login'
import Image from 'next/image'





export default function Home() {

  const Styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    color: 'white',
    flexDirection: 'column',
    overflow: 'hidden'
  }


  return (
    
    <div style={Styles}>


      <Login />
    </div>
    
  )
}
