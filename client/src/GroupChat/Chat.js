import React ,{} from 'react'
import './Chat.css'
import { EmojiButton } from '@joeattardi/emoji-button';

function Chat() {
 
  return ( 
<div>
  <button class="nut-mo-chatbox" onclick="moForm()">Chat</button>
  <div class="Chatbox" id="myForm">
    <form action="" class="form-container">
     <h1>Chatbox</h1>
    <label for="msg"><b>Lời Nhắn</b></label>
     <textarea placeholder="Bạn hãy nhập lời nhắn.." name="msg" required></textarea>
    <button type="submit" class="btn">Gửi</button>
     <button type="button" class="btn nut-dong-chatbox" onclick="dongForm()">Đóng</button>
   </form>
  </div>
</div>
 
  
    )}
     

    export default Chat