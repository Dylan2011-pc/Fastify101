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

}

return (
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="search"  name ="email" value={setlogin.email} onChange={Laydata} required />
      <label >Email</label>
    </div>
    <div class="user-box">
      <input type="password"  name="password" value={setlogin.password} onChange={Laydata} required/>
      <label>Password</label>
    </div>
    
    <a href="#" type="submit" variant="primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>

  </form>
</div>
)}
export default Login