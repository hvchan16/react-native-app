import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./combineReducer";
import createSagaMiddleware from 'redux-saga'
import SagaData from "./saga";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: combineReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(SagaData);
export default store