import { combineReducers } from 'redux';

import ui from './UI';
import accountsData from './AccountsData';

export default combineReducers({
	ui,
	accountsData
});
