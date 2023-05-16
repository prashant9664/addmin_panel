import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
  const [username,usernamedata]=useState('');
  const [Password,userpassworddata]=useState('');
 let [state,setState]=useState({
      Username:"",password:""
 })

 let [userdata,setuserdata]=useState([])

useEffect(()=>{
  fetch("http://localhost:3002/data",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(async(res)=>{
    let data = await res.json();

    setuserdata(data)
  })
})

 const submitdata=(e)=>{
    e.preventDefault();
    if(validate()){
  //  console.log('proceed');
  fetch("http://localhost:3003/data/"+username)
    .then((res)=>{
      return res.json();
    }).then((resp)=>{
      console.log(resp)
    }).catch((err)=>{
      toast.error('login failed:'+err.message)
    })
    }  
 }
 const validate=()=>{
  let result=true;
    if(username ==='' || username ===null){
      result=false;
      toast.warning("plase enter username");
    }
    if(Password ==='' || Password ===null){
      result=false;
      toast.warning("plase enter password");
    }
  return result;
 }

  return(
  <div>
  <div className="main-wrapper">
    <div className="preloader">
      <div className="lds-ripple">
        <div className="lds-pos" />
        <div className="lds-pos" />
      </div>
    </div>
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
      <div className="auth-box bg-dark border-top border-secondary">
        <div id="loginform">
          <div className="text-center p-t-20 p-b-20">
            <span className="db"><img src="assets/images/logo.png" alt="logo" /></span>
          </div>
          {/* Form */}
          <form className="form-horizontal m-t-20" id="loginform" action="index.html" method="post" onSubmit={(e)=>submitdata(e)}>
            <div className="row p-b-30">
              <div className="col-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user" /></span>
                  </div>
                  <input type="text" value={username} onChange={e=>usernamedata(e.target.value)} className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                </div>
                   <div className="input-group mb-3">
                     <div className="input-group-prepend">
                    <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                  </div>
                  <input type="password" value={Password} onChange={e=>userpassworddata(e.target.value)} className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                </div>
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group">
                  <div className="p-t-20">
                    <NavLink to="/formbasic"><button className="btn btn-success float-right" type="submit">Login</button></NavLink>|
                    <NavLink className="btn btn-success" to={'/register'}>new user</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div id="recoverform">
          <div className="row m-t-20">
            {/* Form */}
            <form className="col-12" action="index.html">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
   <ToastContainer></ToastContainer>
</div>
)
}

export default Login;