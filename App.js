import React from 'react';
import { Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/productsReducer';

const rootReducer = combineReducers({
    product: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Text>Open up App.js to start working on your app!</Text>
        </Provider>
    );
}
