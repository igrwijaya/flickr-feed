import {useMemo} from 'react'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from "./reducer";

let store: any = null

function initStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware())
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
