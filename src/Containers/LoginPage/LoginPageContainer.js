import { connect } from 'react-redux';
import LoginPage from './LoginPage';

function mapStateToProps(state) {
	return {
		isMobile: state.ui,
		accountsData: state.accountsData
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);