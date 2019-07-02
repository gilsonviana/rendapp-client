import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEnvelope, faIdBadge } from '@fortawesome/free-solid-svg-icons'

import './style.css'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            cpf_cnpj: '',
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
            <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4">
                            <div className="signup__container">
                                <header className="signup__header text-center">
                                    <img src={require('../../assets/images/signup.png')} className="img-responsive" />
                                </header>
                                <form className="signup__form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Nome"
                                            name="name"
                                            onChange={(e) => this.handleChange(e)} /> <FontAwesomeIcon icon={faIdCard} />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="E-mail"
                                            name="email"
                                            onChange={(e) => this.handleChange(e)} /> <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="CPF/CNPJ"
                                            name="cpf_cnpj"
                                            onChange={(e) => this.handleChange(e)} /> <FontAwesomeIcon icon={faIdBadge} />
                                    </div>                                    
                                    <Link to="/" className="form-button" type="submit">Cadastrar</Link>
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

export default connect()(SignUp)