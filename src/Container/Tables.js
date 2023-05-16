


const Tables = () => {
   return(
 <div>
  &lt;&gt;
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
    {/* ============================================================== */}
    {/* End Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Page wrapper  */}
    {/* ============================================================== */}
    <div className="page-wrapper">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h4 className="page-title">Tables</h4>
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
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-0">Static Table</h5>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">possword</th>
                    <th scope="col">gender</th>
                    <th scope="col">image</th>
                    <th scope="col">text</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>123</td>
                    <td>male</td>
                    <td>image</td>
                    <td>sdsfdsff</td>
                    <td>delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
   )
}

export default Tables;