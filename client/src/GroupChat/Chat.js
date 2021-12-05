import React  from 'react'
import './Chat.css'
import Slibar from '../slibar/slibar'
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify'
import { Container } from 'react-bootstrap'
function Chat(){

 
  return (  
    
<Container>
  <ToastContainer
position="top-right"
autoClose={1000}
closeOnClick/>
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
            <p class="message">chat with me</p>
          </div>
          <div class="timer"></div>
        </div>

        <div class="discussion">
          <div class="photo" >
            <div class="online"></div>
          </div>
          <div class="desc-contact">
            <p class="name">Cuong</p>
            <p class="message">Chat with me</p>
          </div>
          <div class="timer"></div>
        </div>

        <div class="footer-chat">
          <i class="icon fa fa-smile-o clickable" aria-hidden="true"></i>
          <input type="text" class="write-message" placeholder="Type your message here"></input>
          <i class="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div>
      </section>
    </div>
  </div>
</Container>

)}
  
     

export default Chat