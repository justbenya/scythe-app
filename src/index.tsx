import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/App';
import store, { persistor } from './app/store';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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

serviceWorkerRegistration.register();
