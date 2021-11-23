import React ,{ useState  } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import Cookies from 'js-cookie'
import './login.css'
function Login() {
    
  const [login , setlogin] = useState({
    email:'',
    password:''
}); 


const Laydata = (e) =>{
  var target = e.target;
  var name = target.name;
  var value =  target.value;
  setlogin({ ...login , [name]: value})
  
}
const  senddata =async(event)=>{
  event.preventDefault();
  const config = {
      'Content-Type': 'application/json',
    }
  
    await axios.post("http://localhost:5000/api/login" ,  login ,{config}).then((res)=>{
      const data =  JSON.parse(res.data.message)
      Cookies.set('cookielogin', data.msg)
      window.location.href  = "/listdevicemuon"
    }).catch(err=>{
      console.log(err.response.data)
       if( err.response.data.message ==="usererr"){
     return   toast.error("Tài khoản không đúng ")
       }  else{ 
         JSON.parse(err.response.data.message).map(data=>{
        toast.error(data.message)
      })
      }
    })

const switchers = [...document.querySelectorAll('.switcher')]
  switchers.forEach(item => {
  item.addEventListener('click', function() {
  switchers.forEach(item => item.parentElement.classList.remove('is-active'))
  this.parentElement.classList.add('is-active')
})
})

}

return (
<section class="forms-section">
  <h1 class="section-title">Animated Forms</h1>
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher switcher-login">
        Login
          <span class="underline"></span>
      </button>
      <form class="form form-login">
<fieldset>
      <legend>Please, enter your email and password for login.</legend>
<div class="input-block">
  <label for="login-email" >E-mail<i class='fas fa-chalkboard-teacher'></i></label>
  <put id="login-email" type="email" placeholder="name@example.com" name ="email" value={setlogin.email} onChange={Laydata} required/>
</div>
<div class="input-block">
  <label for="login-password">Password</label>
    <input id="login-password" placeholder="Password..." name="password" value={setlogin.password} onChange={Laydata} required/>
  </div>
    </fieldset>
      <button variant="primary" type="submit" class="btn-login">Login</button>
  </form>
</div>
  <div class="form-wrapper">
<button type="button" class="switcher switcher-signup">
      Sign Up
    <span class="underline"></span>
</button>
<form class="form form-signup">
    <fieldset>
      <legend>Please, enter your email, password and password confirmation for sign up.</legend>
  <div class="input-block">
      <label for="signup-email">E-mail</label>
<input id="signup-email" type="email" type="email" placeholder="name@example.com" name ="email" value={setlogin.email} required/>
</div>
<div class="input-block">
  <label for="signup-password">Password</label>
    <input id="signup-password" type="password" placeholder="Password..." name="password" value={setlogin.password} required/>
</div>
  <div class="input-block">
    <label for="signup-password-confirm">Confirm password</label>
      <input id="signup-password-confirm" type="password" required />
  </div>
      </fieldset>
      <button type="submit" class="btn-signup">Sign Up</button>
    </form>
  </div>
</div>
</section>
)}
export default Login