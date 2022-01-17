import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk"
import {tableReducer} from './table-data/table-data-reducer';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    tableData: tableReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware))

// @ts-ignore
window.store = store

sagaMiddleware.run(mySaga)

export type AppStateType = ReturnType<typeof rootReducer>