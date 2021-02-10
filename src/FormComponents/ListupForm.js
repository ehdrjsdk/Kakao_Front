import axios_Facade from '../axios/axios_Facade';
import React from 'react';
import { Link } from 'react-router-dom';

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

    render() {
   return (
            <div>
                
            <form onSubmit={this.handleSubmit}>
            <button type="submit">로그아웃</button>
            <div>{this.state.userINfomation}</div>
            </form>
            </div>
        );
    }
}

export default ListupForm;