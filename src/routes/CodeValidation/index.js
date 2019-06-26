import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import './style.css'

class CodeValidation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            codigo: '',
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
            <div className="code-validation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4">
                            <div className="code-validation__container">
                                <header className="code-validation__header text-center">
                                    <img src={require('../../assets/images/code-validation.png')} className="img-responsive"/>
                                    <p className="code-validation__header__text">
                                        Verifique em seu e-mail o código
                                        que lhe enviamos, caso não tenha
                                        recebido, solicite um novo código.
                                    </p>
                                </header>
                                <form className="code-validation__form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">                            
                                        <input 
                                            type="text" 
                                            placeholder="Código"      
                                            name="codigo"                                      
                                            onChange={(e) => this.handleChange(e)}/> <FontAwesomeIcon icon={faShieldAlt}/>
                                    </div>                                    
                                    <Link to="/" className="form-button" type="submit">Enviar</Link>
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

export default connect()(CodeValidation)