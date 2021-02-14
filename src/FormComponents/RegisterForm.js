import React from 'react';
import axios_Facade from '../axios/axios_Facade';

let axios_open = new axios_Facade();

class RegisterForm extends React.Component 
{
    state = {
        userEmail : '',
        userPassword : '',
        userName : '',
        userINfomation : '',
    }

    handleChange = (e) =>    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var temp;
        var posttemp;
        temp = axios_open.getData('');
        posttemp = axios_open.PostData('register',this.state.userEmail,this.state.userPassword, this.state.userName);
        
        console.log(JSON.stringify(posttemp));
        
        temp.then(({data}) => {
            this.setState({
                userINfomation : data
            })
        });
    }

    render() {
        return (
            <div>
                
            <form onSubmit={this.handleSubmit}>

                <input
                placeholder="E-mail"
                value={this.state.userEmail}
                onChange={this.handleChange}
                name="userEmail"
                />

                <input
                placeholder="Name"
                value={this.state.userName}
                onChange={this.handleChange}
                name="userName"
                />

                <input
                placeholder="Password"
                value={this.state.userPassword}
                onChange={this.handleChange}
                name="userPassword"
                />
                <button type="submit" onClick={ () => {this.props.history.goBack()}} >회원가입</button>
                <div>{this.state.userINfomation}</div>
            </form>
            
            </div>
        );
    }
}

export default RegisterForm;