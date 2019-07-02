import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

import './style.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
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
        // call redux action creator        
    }

    render() {        
        return (
            <div className="forgot-password">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4">
                            <div className="forgot-password__container">
                                <header className="forgot-password__header text-center">
                                    <img src={require('../../assets/images/forgot-password.png')} className="img-responsive"/>
                                    <p className="forgot-password__header__text">
                                        Por favor, informe seu e-mail ou
                                        CPF associado a sua conta que lhe
                                        enviaremos um link com instruções
                                        para reperar sua senha.
                                    </p>
                                </header>
                                <form className="forgot-password__form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">                            
                                        <input 
                                            type="text" 
                                            placeholder="Usuário"      
                                            name="user"                                      
                                            onChange={(e) => this.handleChange(e)}/> <FontAwesomeIcon icon={faIdCard}/>
                                    </div>                                    
                                    <Link to={`${this.props.location.pathname}/inserir-codigo`} className="form-button" type="submit">Enviar</Link>
                                    <Link to="/" className="form-button">Cancelar</Link>
                                </form>                                
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ForgotPassword)