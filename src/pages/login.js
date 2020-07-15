import React, {Component} from 'react';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get("http://192.168.56.1/WebApplication1/Home/AuthReact")
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    render() {
        return (
            <div className="Login">
                <p>Вход</p>
                <form  className="log">
                    <div className="InputPass"><input className="Pass" type="password" placeholder="Пароль" required/></div>
                    <div><input type="submit" value="Войти" className="btnLogin btn"/></div>
                </form>
            </div>
        );
    }
}

export default Login;
