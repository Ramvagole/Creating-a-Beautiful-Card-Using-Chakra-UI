import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Box } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)
  let ref=useRef()
  let f=useRef()
  function change(){
    ref.current.style.backgroundColor="blue"
    ref.current.style.color="white"
  }
  function follow(){
    f.current.style.backgroundColor="blue"
    f.current.style.color="white"
  }
  return (
    <>
    
      <div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",borderRadius:"10px",width:"350px",height:"500px",textAlign:"center",marginLeft:"60px",marginTop:"50px"}}>
        <img style={{width:"150px",height:"150px",borderRadius:"50%",marginLeft:"90px"}}  src="data:image/jpeg;base64,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"/>
        <h1 style={{fontSize:"25px",fontWeight:"600"}}>Lindsey James</h1>
        <h4 style={{opacity:"0.6"}}>@lindsey_jam3s</h4>
        <h4 style={{width:"200px",fontSize:"13px",marginLeft:"70px",marginTop:"20px",fontWeight:"500",color:"#b3b3b3"}}>Actress,musician,songwriter and artist. PM for work inquires</h4>
        <h4 style={{textAlign:"center"}}>or</h4>
        <h4 style={{color:"blue"}}>#tag</h4>
        <h4>me in your posts</h4>
        <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
          <h4 style={{backgroundColor:"#b3b3b3"}}>#ART</h4>
          <h4 style={{backgroundColor:"#b3b3b3"}}>#PHOTOGRAPHY</h4>
          <h4 style={{backgroundColor:"#b3b3b3"}}>#MUSIC</h4>
        </div>
        <div style={{marginTop:"30px",display:"flex",justifyContent:"space-around"}}>
          <button onClick={change} ref={ref} style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"#b3b3b3",width:"100px",height:"50px"}}>Message</button>
          <button onClick={follow} ref={f} style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"#b3b3b3",width:"100px",height:"50px"}}>Follow</button>
        </div>
      </div>
    </>
  )
}

export default App
