import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import store, { persistor } from './store';

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <StylesProvider injectFirst>
                <App />
            </StylesProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
