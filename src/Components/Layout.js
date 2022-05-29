import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
class Layout extends React.Component {
  render(){
    return (
      <>
        <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header/>
              {/* Dynamic Page Content Load */}
              <main>{this.props.children}</main>
              <Footer/>
              {/* Scroll to Top */}
              <a class="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
              </a>  
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Layout;