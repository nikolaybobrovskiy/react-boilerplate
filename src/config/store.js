import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import reducers from '../reducers';

export const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" preserveScrollTop={false}/>
	</DockMonitor>
);

export default function configureStore(history, initialState) {
	const reducer = combineReducers({
		...reducers,
		routing: routerReducer
	});

	let devTools = [window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()];

	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history)
			),
			...devTools
		)
	);
}