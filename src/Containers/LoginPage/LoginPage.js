import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
	EMAIL_TITLE_TEXT,
	LOGIN_TITLE_TEXT,
	PASSWORD_TITLE_TEXT
} from '../../Constants/Constants';

import Header from '../../Components/Header/Header';
import PageName from '../../Components/PageName/PageName';
import Input from '../../Components/Input/Input';
import MainButton from '../../Components/MainButton/MainButton';

import styles from './LoginPage.module.scss';

/**
 *
 * @param isMobile {boolean} - проверка мобильной версии
 * @param accountsData {array} - данные авторизованных пользователей
 * @returns {JSX.Element}
 * @constructor
 */
const LoginPage = ({ isMobile, accountsData }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validate, setValidate] = useState(false);
	const [errorValidate, setErrorValidate] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);

	const navigate = useNavigate();

	const title = 'У вас нет аккаунта?';
	const textButtonHeader = 'Регистрация';
	const textSizeButtonHeader = isMobile ? '12px' : '14px';
	const lineHeightButtonHeader = isMobile ? '13px' : '14px';
	const widthButtonHeader = isMobile ? '113px' : '170px';
	const heightButtonHeader = isMobile ? '40px' : '51px';

	const pageSubTitle = 'Добро пожаловать, рады видеть вас снова 👋';

	const inputType = 'password';
	const inputWidth = isMobile ? '319px' : '472px';
	const inputHeight = '54px';

	const textButtonFooter = 'Войти в аккаунт';
	const textSizeButtonFooter = isMobile ? '14px' : '16px';
	const lineHeightButtonFooter = isMobile ? '14px' : '13px';
	const widthButtonFooter = isMobile ? '343px' : '496px';
	const heightButtonFooter = isMobile ? '56px' : '64px';

	const handleHeaderButtonClick = () => {
		navigate('/register');
	};

	const handleFooterButtonClick = () => {
		navigate('/recovery');
	};

	const handleLoginToAccount = () => {
		email === '' && setErrorEmail(true);

		password === '' && setErrorPassword(true);

		accountsData.map(acc => {
			acc.email.toLowerCase() === email.trim().toLowerCase() &&
				acc.password === password &&
				setValidate(true);
		});

		!validate && setErrorValidate(true);
	};

	const textError = () => {
		let result;
		if (errorEmail && errorPassword) {
			result = 'Введите email, Введите пароль';
		} else if (errorEmail) {
			result = 'Введите email';
		} else if (errorPassword) {
			result = 'Введите пароль';
		} else if (errorValidate) {
			result = 'Неверный еmail или пароль';
		}
		return result;
	};

	useEffect(() => {
		validate && navigate('/access');
	}, [validate]);

	return (
		<div className={styles.root}>
			<Header
				isMobile={isMobile}
				title={title}
				buttonName={textButtonHeader}
				widthButtonHeader={widthButtonHeader}
				heightButtonHeader={heightButtonHeader}
				handleHeaderButtonClick={handleHeaderButtonClick}
				textSizeButtonHeader={textSizeButtonHeader}
				lineHeightButtonHeader={lineHeightButtonHeader}
			/>

			<PageName pageName={LOGIN_TITLE_TEXT} pageSubTitle={pageSubTitle} />

			<div className={styles.body}>
				<Input
					placeholder={EMAIL_TITLE_TEXT}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					onChange={setEmail}
					errorEmail={errorEmail}
					errorPassword={errorPassword}
					setErrorEmail={setErrorEmail}
					setErrorPassword={setErrorPassword}
					errorValidate={errorValidate}
					setErrorValidate={setErrorValidate}
				/>

				<Input
					placeholder={PASSWORD_TITLE_TEXT}
					inputType={inputType}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					onChange={setPassword}
					errorEmail={errorEmail}
					errorPassword={errorPassword}
					setErrorEmail={setErrorEmail}
					setErrorPassword={setErrorPassword}
					errorValidate={errorValidate}
					setErrorValidate={setErrorValidate}
				/>

				{(errorEmail || errorPassword || errorValidate) && (
					<div className={styles.body__errorText}>{textError()}</div>
				)}

				<div className={styles.buttonFooter}>
					<MainButton
						textButton={textButtonFooter}
						width={widthButtonFooter}
						height={heightButtonFooter}
						fontSize={textSizeButtonFooter}
						lineHeight={lineHeightButtonFooter}
						handleButtonClick={handleLoginToAccount}
					/>
				</div>

				<div className={styles.footerText}>
					<p onClick={handleFooterButtonClick}>Забыли пароль?</p>
				</div>
			</div>
		</div>
	);
};

LoginPage.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	accountsData: PropTypes.array
};

export default LoginPage;
