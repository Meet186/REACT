import { createStore} from 'redux'
import { ROOTREDUCER } from './reducer';

const store = createStore(
    ROOTREDUCER,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;