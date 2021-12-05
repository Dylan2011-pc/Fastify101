import React, {useState}  from 'react'
import './Chat.css'
import Slibar from '../slibar/slibar'
import InputEmoji from 'react-input-emoji'
function Chat(){
      


      const [ text, setText ] = useState('')

      function handleOnEnter (text) {
        console.log('enter', text)
      }


 
  return (  
    
<div>
  <Slibar/>
  <div class="container">
    <div class="row">
      <section class="discussions">
        <scrollbars>
        <div class="discussion search">
          <div class="searchbar">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
        <div class="discussion message-active">
          <div class="photo" >
            <div class="online"></div>
          </div>
          <div class="desc-contact">
            <p class="name">Thu</p>
            <p class="message">Chat with me!!</p>
          </div>
          <div class="timer">12 sec</div>
        </div>
        <div class="discussion">
          <div class="photo" >
            <div class="online"></div>
          </div>
          <div class="desc-contact">
            <p class="name">Cuong</p>
            <p class="message">Chat with me!!!</p>
          </div>
          <div class="timer">3 min</div>
        </div>
        </scrollbars>
      </section>
      <section class="chat">
        <scrollbars>
        <div class="header-chat">
          <i class="icon fa fa-user-o" aria-hidden="true"></i>
          <p class="name">Thu</p>
        </div>
        <div class="messages-chat">
          <div class="message">
            <div class="photo" >
              <div class="online"></div>
            </div>
            <p class="text"> Hi, how are you ? </p>
          </div>
          <div class="message text-only">
            <p class="text"> Chat with me!!</p>
          </div>
          <p class="time"> 14h58</p>
           <div class="response">
              <p class="text"> chat with me!!</p>
            </div>
        </div>
        <div class="footer-chat">
          <InputEmoji
          type = "text"
          class="write-message"
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
          
          <i class="icon fa fa-picture-o clickable"><input type="file"></input></i>
          <button class="btn btn-lg btn-block">gửi<i class="fa fa-paper-plane clickable" aria-hidden="true"></i></button>
        </div>
        </scrollbars>
      </section>
    </div>
  </div>
</div>

)}
  
     

export default Chat