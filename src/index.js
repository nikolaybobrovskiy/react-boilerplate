import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore, {DevTools} from './config/store';
import routes from './config/routes';

const history = hashHistory;
const store = configureStore(history, window.__INITIAL_STATE__);

render(
	routes(store, syncHistoryWithStore(history, store)),
	document.getElementById('app')
);

if (!window.devToolsExtension) {
	render(
		<Provider store={store}>
			<DevTools/>
		</Provider>,
		document.getElementById('devtools')
	);
}