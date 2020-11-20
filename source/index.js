import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './Routes/routes';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Routes />
        </Provider>
    )
}

export default App;
