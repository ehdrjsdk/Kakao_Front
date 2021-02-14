import axios_Facade from '../axios/axios_Facade';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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

    goToList = () => {
        var posttemp;

        posttemp = axios_open.PostData('login',this.state.userEmail,this.state.userPassword,null);
        console.log(JSON.stringify(posttemp));

        this.props.history.push('/Listup');
    }

    handleChange = (e) =>    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
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
                <button onClick={this.goToList}>로그인</button>
                <Link to="./Register">
                    <button>회원가입</button>
                </Link>
                <div>{this.state.userINfomation}</div>
            </form>
            
            </div>
        );
    }
}

export default withRouter(LoginForm);