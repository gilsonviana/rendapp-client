import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Dashboard from './routes/Dashboard'

function App() {
	return (
		<div className="app">
			<Router>
				<div>
					<Route exact path="/" component={Login}/>
					<Route exact path="/cadastrar" component={SignUp}/>
					<Route exact path="/painel" component={Dashboard}/>					
				</div>
			</Router>
		</div>
	);
}

export default App;
