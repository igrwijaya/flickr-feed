import {useMemo} from 'react'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from "./reducer";
import thunk from "redux-thunk";

let store: any = null

function initStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = () => {
    let _store = store ?? initStore()

    if (store) {
        _store = initStore()
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore() {
    return useMemo(() => initializeStore(), [])
}
