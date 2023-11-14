import { UI_WIDTH_SET } from '../Constants/Constants';

const initialState = {
	width: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UI_WIDTH_SET: {
			return action.payload <= 530;
		}

		default:
			return state;
	}
};