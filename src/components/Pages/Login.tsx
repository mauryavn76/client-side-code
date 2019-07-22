import * as React from 'react'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label,Input } from 'reactstrap'
class Login extends React.Component{
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
            signUpModal : ! this.state.signUpModal
        })
        console.log("Button is clicked")
    }

    toggleLogin = () =>{
        this.setState({
            loginModal : ! this.state.loginModal
        })
    }

    render(){
        return(
            <div className="container">
                <Button color="primary" onClick={this.toggleSignUp}>New Registration</Button>
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
                    <Button color="primary" >Submit</Button>{' '}
                    <Button color="secondary" onClick={this.toggleSignUp}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Login;