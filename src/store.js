import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

// Config para guardar en local.
const persistConfig = {
    key: 'bp-covidgro',
    storage: AsyncStorage,
    blacklist: [
        'profile_update_password',
    ],
    stateReconciler: autoMergeLevel2,
};

// Pasamos config y reducers.
const persistedReducers = persistReducer(
    persistConfig,
    reducers
);

const logger = createLogger();

// List of middlewares.
const middleware = [
    thunk,
];

if ( 'development' === process.env.NODE_ENV ) {
    middleware.push(logger);
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

// Create the store with persisted feature of async storage.
const store = createStore(
    persistedReducers,
    composeEnhancers(
        applyMiddleware(...middleware),
    )
);

let persistor = persistStore( store );

export {
    store,
    persistor
};