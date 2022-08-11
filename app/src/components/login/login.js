import React, {Component} from "react";
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            pass: ""
        }
    }

    onPasswordChange(e) {
        this.setState({
            pass: e.target.value
        })
    }
    render() {
        const {pass} = this.state;

        return (
            <div className="login-container">
                <div className="login">
                    <h2 className="uk-modal-title uk-text-center">Авторизация</h2>
                    <div className="uk-margin-top uk-text-lead">Пароль:</div>
                    <input 
                        type="password" 
                        name="" 
                        id="" 
                        className="uk-input uk-margin-top"
                        placeholder="Пароль"
                        value={pass}
                        onChange={(e) => this.onPasswordChange()}></input>
                    <button className="uk-button uk-button-primary uk-margin-top"
                    ty></button>
                </div>
            </div>
        )
    }
}