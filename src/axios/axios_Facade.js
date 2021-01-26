import axios from 'axios';
import React from 'react';


class axios_Facade extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            id : ''
        }
    }

    getData(input_Url) {
        return axios.get('http://192.168.0.38:5000/api/users/'+ input_Url); 
    }

    PostData(input_Url,user_Id, user_Password) {
        return axios.post('http://192.168.0.38:5000/api/users/'+ input_Url, {email : user_Id, password : user_Password}).then(({data}) => { console.log(JSON.stringify(data));});
    }

}

export default axios_Facade;