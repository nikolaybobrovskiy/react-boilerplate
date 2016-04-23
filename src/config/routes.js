import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import {App} from '../components';

export default function routes(store, history) {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={App}>
				</Route>
			</Router>
		</Provider>
	);
}