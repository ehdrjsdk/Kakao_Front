import axios_Facade from '../axios/axios_Facade';
import React from 'react';
/*
export function getTitle(id) {
    return axios.get('http://192.168.0.38:5000/api/users/'+ id); 
}
*/
let axios_open = new axios_Facade();

class LoginForm extends React.Component {

    state = {
        userEmail : '',
        userPassword : '',
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
        posttemp = axios_open.PostData('login',this.state.userEmail,this.state.userPassword);
        
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
                placeholder="Password"
                value={this.state.userPassword}
                onChange={this.handleChange}
                name="userPassword"
                />

                <button type="submit">로그인</button>
                <div>{this.state.userINfomation}</div>
            </form>
            
            </div>
        );
    }
}

export default LoginForm;