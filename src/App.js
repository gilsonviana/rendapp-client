import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Dashboard from './routes/Dashboard'
import ForgotPassword from './routes/ForgotPassword'
import CodeValidation from './routes/CodeValidation'

function App() {
	return (
		<div className="app">
			<Router>
				<div>
					<Route exact path="/" component={Login}/>
					<Route exact path="/cadastrar" component={SignUp}/>
					<Route exact path="/painel" component={Dashboard}/>	
					<Route exact path="/recuperar-senha" component={ForgotPassword}/>
					<Route exact path="/recuperar-senha/inserir-codigo" component={CodeValidation}/>
				</div>
			</Router>
		</div>
	);
}

export default App;
