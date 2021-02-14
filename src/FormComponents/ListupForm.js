import axios_Facade from '../axios/axios_Facade';
import React from 'react';
import { withRouter } from 'react-router-dom';
/*
export function getTitle(id) {
    return axios.get('http://192.168.0.38:5000/api/users/'+ id); 
}
*/
let axios_open = new axios_Facade();

class ListupForm extends React.Component {

    state = {
        userEmail : '',
        userPassword : '',
        userINfomation : '',
    }

    componentDidMount() {
        var Listdata;

        Listdata = axios_open.PostData('FriendshipView');
        console.log(JSON.stringify(Listdata));
    }

    handleChange = (e) =>    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    gotoLogout = () => {
        this.props.history.push('/');
    }

    render() {
   return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <button onClick={this.gotoLogout}>로그아웃</button>
            <div>{this.state.userINfomation}</div>
            </form>
            </div>
        );
    }
}

export default withRouter(ListupForm);