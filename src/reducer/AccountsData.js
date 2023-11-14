import { ACTION_SAVE_REGISTRATION } from '../Constants/Constants';

const initialState = [
	{
		email: 'example@example.com',
		password: 'password2021',
		name: ''
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTION_SAVE_REGISTRATION:
			return [...state, action.payload];
		default:
			return state;
	}
};
