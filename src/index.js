import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { history } from './routers/AppRouter';
import { login, logout, startSetAdmin } from './actions/auth';
import { startSetUserInfo } from './actions/userInfo';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<div>
			<App />
		</div>
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('root'));
		hasRendered = true;
	}
};

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(startSetAdmin(user));
		store.dispatch(login(user.uid, user.displayName));
		store.dispatch(startSetUserInfo(user.email))
		renderApp();
		if (history.location.pathname === '/') {
			history.push('/loading');
		}
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
