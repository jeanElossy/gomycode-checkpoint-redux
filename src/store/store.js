import rootReducers from "../reducers"
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import getPost from "../actions/postAction"

const store = createStore(

    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))

)
export default store;

store.dispatch(getPost());