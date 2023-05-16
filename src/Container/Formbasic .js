import { useEffect,useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formbasic = () => {
  let navigate=useNavigate();

  let [state,setState]=useState({
    fast:"",last:"",password:"",gender:"",action:"",image:"",text:""
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
    fetch("http://localhost:3003/data",{
      method:"GET",
      Headers:{
        "Content-Type":"application/json"
      }
    })
    .then(async(res)=>{
      let data=await res.json();

      setuserdata(data)
    })
  })

  const validate=()=>{
    
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
  <div className="preloader">
    <div className="lds-ripple">
      <div className="lds-pos" />
      <div className="lds-pos" />
    </div>
  </div>
  <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
    <aside className="left-sidebar" data-sidebarbg="skin5">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="pt-4">
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="charts.html" aria-expanded="false"><i className="mdi mdi-chart-bar" /><span className="hide-menu">Charts</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="widgets.html" aria-expanded="false"><i className="mdi mdi-chart-bubble" /><span className="hide-menu">Widgets</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="tables.html" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">Tables</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="grid.html" aria-expanded="false"><i className="mdi mdi-blur-linear" /><span className="hide-menu">Full Width</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Forms </span></a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Form Basic </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" /><span className="hide-menu"> Form Wizard </span></a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-buttons.html" aria-expanded="false"><i className="mdi mdi-relative-scale" /><span className="hide-menu">Buttons</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-face" /><span className="hide-menu">Icons </span></a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="icon-material.html" className="sidebar-link"><i className="mdi mdi-emoticon" /><span className="hide-menu"> Material Icons </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="icon-fontawesome.html" className="sidebar-link"><i className="mdi mdi-emoticon-cool" /><span className="hide-menu"> Font Awesome Icons </span></a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-elements.html" aria-expanded="false"><i className="mdi mdi-pencil" /><span className="hide-menu">Elements</span></a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-move-resize-variant" /><span className="hide-menu">Addons </span></a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="index2.html" className="sidebar-link"><i className="mdi mdi-view-dashboard" /><span className="hide-menu"> Dashboard-2 </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-gallery.html" className="sidebar-link"><i className="mdi mdi-multiplication-box" /><span className="hide-menu"> Gallery </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-calendar.html" className="sidebar-link"><i className="mdi mdi-calendar-check" /><span className="hide-menu"> Calendar </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-invoice.html" className="sidebar-link"><i className="mdi mdi-bulletin-board" /><span className="hide-menu"> Invoice </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-chat.html" className="sidebar-link"><i className="mdi mdi-message-outline" /><span className="hide-menu"> Chat Option </span></a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-account-key" /><span className="hide-menu">Authentication </span></a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="authentication-login.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" /><span className="hide-menu"> Login </span></a>
                </li>
                <li className="sidebar-item">
                  <a href="authentication-register.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" /><span className="hide-menu"> Register </span></a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    <div className="page-wrapper">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h4 className="page-title">Form Basic</h4>
            <div className="ms-auto text-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Container fluid  */}
      {/* ============================================================== */}
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="form-horizontal" method="post" onSubmit={(e)=>submitdata(e)}>
                <div className="card-body">
                  <h4 className="card-title">Personal Info</h4>
                  <div className="form-group row">
                    <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">First Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" name="fist" id="fname" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Last Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" name="last" id="lname" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Password</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control" id="lname" name="password" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">gender</label>
                    <div className="col-sm-9">
                      <input type="radio" name="gender" onChange={(e)=>changedata(e)}/>male
                      <input type="radio" name="gender" onChange={(e)=>changedata(e)}/>female
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">action</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="cono1" name="action" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">image</label>
                    <div className="col-sm-9">
                      <input type="file" className="from-control"  name="image" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">text</label>
                    <div className="col-sm-9">
                      <input type="text" className="from-control" name="text" onChange={(e)=>changedata(e)}/>
                    </div>
                  </div>
                </div>
                <div className="border-top">
                  <div className="card-body">
                    <NavLink to="/Tables">
                      <button type="submit" className="btn btn-primary"  onClick={(e)=>navigate('/register/')}>
                      Submit</button></NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* editor */}
      </div>
    
      <footer className="footer text-center">
        <a href="https://www.wrappixel.com">WrapPixel</a>.
      </footer>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    )
}

export default Formbasic ;