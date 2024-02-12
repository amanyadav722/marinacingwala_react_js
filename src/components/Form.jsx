import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class Form extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email:this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3200/app/notes', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })

    }

    render() { 
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <h2>Register Here!</h2><br></br>
                       <form onSubmit={this.onSubmit}>
                          <input type = 'text'
                          placeholder = 'Full Name'
                          onChange ={this.changeFullName}
                          value={this.state.fullName}
                          className='form-control form-group'
                          /><br></br>

                          <input type='text'
                          placeholder='Username'
                          onChange={this.changeUsername}
                          value={this.state.username}
                          className='form-control form-group'
                          /><br></br>
                          
                          <input type='text'
                          placeholder='email'
                          onChange={this.changeEmail}
                          value={this.state.email}
                          className='form-control form-group'
                          /><br></br>

                          <input type='password'
                          placeholder='password'
                          onChange={this.changePassword}
                          value={this.state.password}
                          className='form-control form-group'
                          /><br></br>

                          <input type="submit" className="btn btn-success btn-block" value="submit" />

                       </form>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Form;