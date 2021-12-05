import React  from 'react'
import './Chat.css'
import Slibar from '../slibar/slibar'
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify'
import { Container } from 'react-bootstrap'
function Chat(){

 
  return (  
    
<Container>
  <Slibar/>
  <div class="container">
    <div class="row">
      <section class="discussions">
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

      </section>
      <section class="chat">
        <div class="header-chat">
          <i class="icon fa fa-user-o" aria-hidden="true"></i>
          <p class="name">Thu</p>
          <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
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
          
        </div>
        <div class="footer-chat">
          <i class="icon fa fa-smile-o clickable"  aria-hidden="true"></i>
          
          <input type="text" class="write-message" placeholder="Type your message here"></input>
          <input type="file" class="custom-file-input"></input>
          <i class="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div>
      </section>
    </div>
  </div>
</Container>

)}
  
     

export default Chat