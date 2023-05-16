import { useEffect,useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register=()=>{
  let [state,setState]=useState({
    email:"",password:""
  })

  let [userdata,setuserdata]=useState([])

  const changedata=(e)=>{
     let name=e.target.name;
     let value=e.target.value;

     setState({
      ...state,[name]:value
     })
  } 
  useEffect(()=>{
    fetch(" http://localhost:3003/data",{
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

const validate=()=>{
      if(state.email == "" || state.email == null){
    toast.error("Email is required")
    return false;
   }
   else{
    return true;
}
}

  const submitdata=(e)=>{
    e.preventDefault();
    if(validate()){
    fetch("http://localhost:3003/data?email="+state.email)
    .then(async(res)=>{
      let data = await res.json();
      if(data[0].password=state.password){
        sessionStorage.setItem("username", data[0].username)
      }
      else{
        toast.error("Password not match")
      }
    })
    .catch((err)=>{
      toast.error("email not valud")
    })
  }
  else{

  }
  }

    return(
    <div>
    <div className="main-wrapper">
    {/* ============================================================== */}
    {/* Preloader - style you can find in spinners.css */}
    {/* ============================================================== */}
    <div className="preloader">
      <div className="lds-ripple">
        <div className="lds-pos" />
        <div className="lds-pos" />
      </div>
    </div>
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
      <div className="auth-box bg-dark border-top border-secondary">
        <div>
          <div className="text-center p-t-20 p-b-20">
            <span className="db"><img src="assets/images/logo.png" alt="logo" /></span>
          </div>
          {/* Form */}
          <form className="form-horizontal m-t-20" action="index.html" method="post" onSubmit={(e)=>submitdata(e)}>
            <div className="row p-b-30">
              <div className="col-12">
                {/* email */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white" id="basic-addon1"><i className="ti-email" /></span>
                  </div>
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={state.email} aria-label="email" aria-describedby="basic-addon1" required onChange={(e)=>changedata(e)}/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                  </div>
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={state.password} aria-label="Password"  aria-describedby="basic-addon1" required onChange={(e)=>changedata(e)}/>
                </div>
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group">
                  <div className="p-t-20">
                    <NavLink to="/formbasic"><button className="btn btn-block btn-lg btn-info" type="submit">Sign Up</button></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>

    )
}
export default Register;