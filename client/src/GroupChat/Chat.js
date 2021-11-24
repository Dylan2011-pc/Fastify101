import React ,{ useState } from 'react'
import './Chat.css'


  export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  let textRef = React.createRef()
  const {messages} = props

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
  }

const handleSend = e => {
  const get = props.getMessage
  get(textRef.current.value)
}

 
  return ( 
    
  <div id='chatCon'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <div class="chat-box" style={chatopen ? show : hide}>
    <div class="header">Chat box</div>
    <div class="msg-area"></div>
      <div class="footer">
      <input type="text"  ref={textRef} />
      <label for="myfile"><i class="material-icons">attachment</i></label>
      <input type="file" id="myfile" name="myfile"/>
      <button onClick={handleSend}><i class="fa fa-paper-plane"></i></button>
      </div>
    </div>
    <div class="pop">
      <p><img onClick={toggle} src="https://www.freeiconspng.com/uploads/message-icon-png-4.png"  alt="" /></p>
    </div>
  </div>

    
    )}
     

    export default PopChat