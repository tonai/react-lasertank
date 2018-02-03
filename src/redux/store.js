import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import reducer from './reducer';

export default createStore(enableBatching(reducer));
