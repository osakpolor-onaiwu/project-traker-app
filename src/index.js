import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import firebaseConfig from './firebaseconfig'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import rootReducer from './reducers/rootReducer.jsx'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
    )
);

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById("root")
);
})
