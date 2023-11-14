import { connect } from 'react-redux';
import RegistrationPage from './RegistrationPage';
import { actionSaveRegistration } from '../../Actions/AccountData';

function mapStateToProps(state) {
	return {
		isMobile: state.ui
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actionSaveRegistrationData: data =>
			dispatch(actionSaveRegistration(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
