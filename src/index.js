import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import setupStore from "./redux/store/store";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = setupStore();

const innerApp = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

ReactDOM.render(
	innerApp,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
