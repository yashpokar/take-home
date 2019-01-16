import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/sass/app.sass';

import HomeScreen from './screens/Home';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/' component={ HomeScreen } />
		</Switch>
	</Router>,
	document.getElementById('root')
)
