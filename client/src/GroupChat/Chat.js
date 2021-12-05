import React  from 'react'
import './Chat.css'
import Slibar from '../slibar/slibar'

function Chat(){

 
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
          <input type="text" class="write-message" placeholder="Type your message here"></input>
          <i class="icon fa fa-smile-o clickable" ><input type="file"></input></i>
          <i class="icon fa fa-picture-o clickable"></i>
          <button class="btn btn-lg btn-block">gửi<i class="fa fa-paper-plane clickable" aria-hidden="true"></i></button>
        </div>
      </section>
    </div>
  </div>
</div>

)}
  
     

export default Chat