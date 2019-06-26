import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faLock } from '@fortawesome/free-solid-svg-icons'
import { login } from '../../redux/actions'

import './style.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    /**
     * Update state
     * 
     * @param {any} e event
     */
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault()
        
        this.setState({ submitted: true })
        const { username, password } = this.state        
        // call redux action creator
        this.props.login(username, password)
    }

    render() {
        return (
            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4">
                            <div className="login__container">
                                <header className="login__header text-center">
                                    <img src={require('../../assets/images/logo.png')} className="img-responsive"/>                                    
                                </header>
                                <form className="login__form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">                            
                                        <input 
                                            type="text" 
                                            placeholder="Usuário"      
                                            name="username"                                      
                                            onChange={(e) => this.handleChange(e)}/> <FontAwesomeIcon icon={faIdCard}/>
                                    </div>
                                    <div className="form-group">                            
                                        <input 
                                            type="password" 
                                            placeholder="Senha"  
                                            name="password"                                          
                                            onChange={(e) => this.handleChange(e)}/> <FontAwesomeIcon icon={faLock}/>
                                    </div>
                                    <div className="form-group text-right">
                                        <Link to="/recuperar-senha">Recuperar senha</Link>
                                    </div>
                                    <Link to="/painel" className="form-button" type="submit">Entrar</Link>
                                    <Link to="/cadastrar" className="form-button">Quero me cadastrar</Link>
                                </form>
                                <footer className="login__footer">
                                    <h5>Acesse com</h5>
                                    <div className="login__footer__buttons">
                                        <a>
                                            <img src={require('../../assets/images/facebook-button-logo.png')} />
                                        </a>
                                        <a>
                                            <img src={require('../../assets/images/google-button-logo.png')} />
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = dispatch => {
    return {
        login
    }
}

export default connect(null, mapStateToProps)(Login)