import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer.jsx'

const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument()));


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById("root")
)
