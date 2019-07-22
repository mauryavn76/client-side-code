import * as React from 'react'
import { Link } from 'react-scroll'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label,Input } from 'reactstrap'

import './Navbar.css';

class NavBar extends React.Component{

  state = {
    loginModal : false,
    signUpModal : false,
    signUpData : {
        firstName : "",
        lastName : "",
        email : "",
        Password : "",
    },
    loginData : {
        email : "",
        Password : "",
    }
}

toggleSignUp = () => {
  this.setState({
      loginModal:false,
      signUpModal : ! this.state.signUpModal
  })
  console.log("Button is clicked")
}

toggleLogin = () =>{
  this.setState({
      signUpModal : false,
      loginModal : ! this.state.loginModal
  })
}

  
  render(){
    return (
      <React.Fragment>
      <div className="navbar navbar-expand-lg fixed-top navbar-light bg-dark text-white menu-bar">
        <Link className="navbar-brand text-uppercase px-5" 
        to="home"
        spy={true}
        smooth={true}
        duration={500}>
          <img src="image/Viser-logo.png" width="85" height="60" className="d-inline-block align-top img-styl" />
          Viser Technosys</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span>
        </button>
        <div className="collapse navbar-collapse mega-menu" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="navbar-item active ">
              <Link className="nav-link ml-5 text-white text-uppercase" to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ml-5 text-white text-uppercase" data-toggle="dropdown" href="#" >Tally</a>
                <div className="dropdown-menu">
                  <Link className="nav-link text-black text-uppercase" to="#">Tally Erp 9</Link>
                  <Link className="nav-link text-black text-uppercase" to="#">Instructor</Link>
                  <Link className="nav-link text-black text-uppercase" to="#">Information</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ml-5 text-white text-uppercase" data-toggle="dropdown" href="#" >Cirtification</a>
                <div className="dropdown-menu">
                  <Link className="nav-link text-black text-uppercase" to="#">Tally Erp 9</Link>
                  <Link className="nav-link text-black text-uppercase" to="#">Instructor</Link>
                  <Link className="nav-link text-black text-uppercase" to="#">Information</Link>
                </div>
              </li>
            <li className="navbar-item active">
              <Link className="nav-link ml-5 text-white text-uppercase" to="#">Gallery</Link>
            </li>
            <li className="navbar-item active">
              <Link className="nav-link ml-5 text-white text-uppercase" to="#">Blog</Link>
            </li>
            <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle ml-5  text-white text-uppercase" data-toggle="dropdown" href="#"  aria-haspopup="true" aria-expanded="false">About Us</a>
                <div className="dropdown-menu">
                  <Link className="nav-link m-auto text-black text-uppercase" to="Whyviser" spy={true} smooth={true} duration={500} offset={-200}>Why Viser ?</Link>
                  <Link className="nav-link m-auto text-black text-uppercase" to="contact" spy={true} smooth={true} duration={500} offset={-200}>Contact Us</Link>
                </div>
              </li>
              <li className="navbar-item active">
              <Link className="nav-link ml-5 text-white text-uppercase" to="#" onClick={this.toggleLogin}>login</Link>
              </li>
          </ul>
        </div>
        </div>
        
        <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin} >
          <ModalHeader toggle={this.toggleLogin} style={{backgroundColor:"0"}}>Sign Up</ModalHeader>
          <ModalBody style={{backgroundColor:"0"}}>
              <FormGroup>
              <Label for="email" >Email</Label>
              <Input id="email"
              value={this.state.loginData.email}
              onChange={(e: any) => {
                  const { loginData } = this.state;
                  loginData.email = e.target.value;
                  this.setState({ loginData })
              }} />
              </FormGroup>
              <FormGroup>
              <Label for="age">Password</Label>
              <Input id="age"
              value={this.state.loginData.Password}
              onChange={(e: any) => {
                  const { loginData } = this.state;
                  loginData.Password = e.target.value;
                  this.setState({ loginData })
              }} />
              </FormGroup>
          </ModalBody>
          <ModalFooter style={{backgroundColor:"0"}}>
              <Button color="primary" className="w-100">Submit</Button>
          </ModalFooter>
          <ModalFooter style={{backgroundColor:"0"}}>
              <a href="#" onClick={this.toggleSignUp}>Sign Up</a>
          </ModalFooter>
        </Modal>
            
        <Modal isOpen={this.state.signUpModal} toggle={this.toggleSignUp}>
                <ModalHeader toggle={this.toggleSignUp}>Sign Up</ModalHeader>
                <ModalBody>
                    <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input id="firstname"
                    value={this.state.signUpData.firstName}
                    onChange={(e: any) => {
                        const { signUpData } = this.state;

                        signUpData.firstName = e.target.value;

                        this.setState({ signUpData })
                    }} />
                    </FormGroup>

                    <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input id="lastname"
                    value={this.state.signUpData.lastName}
                    onChange={(e: any) => {
                        const { signUpData } = this.state;
                        signUpData.lastName = e.target.value;
                        this.setState({ signUpData })
                    }} />
                    </FormGroup>

                    <FormGroup>
                    <Label for="email" >Email</Label>
                    <Input id="email"
                    value={this.state.signUpData.email}
                    onChange={(e: any) => {
                        const { signUpData } = this.state;
                        signUpData.email = e.target.value;
                        this.setState({ signUpData })
                    }} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="age">Password</Label>
                    <Input id="age"
                    value={this.state.signUpData.Password}
                    onChange={(e: any) => {
                        const { signUpData } = this.state;
                        signUpData.Password = e.target.value;
                        this.setState({ signUpData })
                    }} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
              <Button color="primary" className="w-100">Submit</Button>
          </ModalFooter>
          <ModalFooter>
              <a href="#" onClick={this.toggleLogin}>Sign In</a>
          </ModalFooter>
              </Modal>

        </React.Fragment>
    );
  }
}
export default NavBar;


