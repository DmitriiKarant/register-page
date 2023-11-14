import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useResize } from './Utils/UseResize';

import LoginPage from './Containers/LoginPage/LoginPageContainer';
import RegistrationPage from './Containers/RegistrationPage/RegistrationPageContainer';
import PasswordRecoveryPage from './Containers/PasswordRecoveryPage/PasswordRecoveryPage';
import EmailConfirmPage from './Containers/EmailConfirmPage/EmailConfirmPage';
import ResendMessagePage from './Containers/ResendMessagePage/ResendMessagePage';
import LoginAccess from './Components/LoginAccess/LoginAccess';

import './App.css';

/**
 *
 * @param actionUiWidthSet {function} - функция для определения мобильной версии
 * @returns {JSX.Element}
 * @constructor
 */
function App({ actionUiWidthSet }) {
	const windowWidth = window.innerWidth;

	const componentRef = useRef();
	const { width } = useResize(componentRef, windowWidth);

	useEffect(() => {
		actionUiWidthSet(width);
	}, [width]);

	return (
		<div className='App' ref={componentRef}>
			<Routes>
				<Route path={'/'} element={<LoginPage />} />
				<Route path={'/register'} element={<RegistrationPage />} />
				<Route path={'/recovery'} element={<PasswordRecoveryPage />} />
				<Route
					path={'/confirm/:name?'}
					element={<EmailConfirmPage />}
				/>
				<Route path={'/resend'} element={<ResendMessagePage />} />
				<Route path={'/access'} element={<LoginAccess />} />
			</Routes>
		</div>
	);
}

App.propTypes = {
	actionUiWidthSet: PropTypes.func
};

export default App;
