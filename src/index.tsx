import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import AppProvider from './context/AppProvider';
import './index.css';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>,
    document.getElementById('root'),
);
