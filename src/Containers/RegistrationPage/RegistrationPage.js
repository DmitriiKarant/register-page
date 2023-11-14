import React, { useState } from 'react';
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

import styles from './RegistrationPage.module.scss';

/**
 *
 * @param isMobile {boolean} - проверка мобильной версии
 * @param actionSaveRegistrationData {function} - сохранение данных регистрирующихся пользователей
 * @returns {JSX.Element}
 * @constructor
 */

const RegistrationPage = ({ isMobile, actionSaveRegistrationData }) => {
	const navigate = useNavigate();

	const [showPromo, setShowPromo] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [promo, setPromo] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);

	const title = 'Уже есть аккаунт?';
	const textSizeButtonHeader = isMobile ? '12px' : '14px';
	const lineHeightButtonHeader = isMobile ? '13px' : '14px';
	const widthButtonHeader = isMobile ? '113px' : '170px';
	const heightButtonHeader = isMobile ? '40px' : '51px';

	const pageName = 'Регистрация';
	const pageSubTitle =
		'Зарегистрируйся и получи доступ к аналитике аккаунтов.';
	const pageSubTitleBlockWidth = isMobile ? '237px' : '496px';

	const placeholderName = 'Имя';
	const inputType = 'password';
	const placeholderPromo = 'Промокод';
	const inputWidth = isMobile ? '319px' : '472px';
	const inputHeight = '54px';

	const textButtonFooter = 'Создать аккаунт';
	const textSizeButtonFooter = isMobile ? '14px' : '16px';
	const lineHeightButtonFooter = isMobile ? '14px' : '13px';
	const widthButtonFooter = isMobile ? '343px' : '496px';
	const heightButtonFooter = isMobile ? '56px' : '64px';

	const emailRegExp =
		/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

	const handlePromoClick = () => {
		setShowPromo(!showPromo);
	};

	const handleHeaderButtonClick = () => {
		navigate('/');
	};

	const handleCreateAccButtonClick = () => {
		if (emailRegExp.test(email) && password !== '') {
			actionSaveRegistrationData({
				name: name,
				email: email,
				password: password
			});
			emailRegExp.test(email) && navigate(`/confirm/${name}`);
		} else {
			(!emailRegExp.test(email) || email === '') && setErrorEmail(true);
			password === '' && setErrorPassword(true);
		}
	};

	return (
		<div className={styles.root}>
			<Header
				isMobile={isMobile}
				title={title}
				buttonName={LOGIN_TITLE_TEXT}
				widthButtonHeader={widthButtonHeader}
				heightButtonHeader={heightButtonHeader}
				handleHeaderButtonClick={handleHeaderButtonClick}
				textSizeButtonHeader={textSizeButtonHeader}
				lineHeightButtonHeader={lineHeightButtonHeader}
			/>
			<PageName
				pageName={pageName}
				pageSubTitle={pageSubTitle}
				width={pageSubTitleBlockWidth}
			/>
			<div className={styles.body}>
				<Input
					placeholder={placeholderName}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					onChange={setName}
				/>
				<Input
					placeholder={EMAIL_TITLE_TEXT}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					onChange={setEmail}
					errorEmail={errorEmail}
					setErrorEmail={setErrorEmail}
				/>
				{errorEmail && (
					<div className={styles.body__errorText}>
						Возможно вы ошиблись в указании почтового сервиса
					</div>
				)}
				<Input
					placeholder={PASSWORD_TITLE_TEXT}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					inputType={inputType}
					onChange={setPassword}
					errorPassword={errorPassword}
					setErrorPassword={setErrorPassword}
				/>
				{errorPassword && (
					<div className={styles.body__errorText}>Введите пароль</div>
				)}
				{!showPromo ? (
					<div className={styles.promo} onClick={handlePromoClick}>
						У меня есть промокод
					</div>
				) : (
					<Input
						placeholder={placeholderPromo}
						inputWidth={inputWidth}
						inputHeight={inputHeight}
						onChange={setPromo}
					/>
				)}
				<div className={styles.buttonFooter}>
					<MainButton
						textButton={textButtonFooter}
						width={widthButtonFooter}
						height={heightButtonFooter}
						fontSize={textSizeButtonFooter}
						lineHeight={lineHeightButtonFooter}
						handleButtonClick={handleCreateAccButtonClick}
					/>
				</div>
				<div className={styles.footerText}>
					<div className={styles.footerText__leftText}>
						Создавая аккаунт, я согласен с&nbsp;
					</div>
					<div className={styles.footerText__rightText}>
						условиями оферты
					</div>
				</div>
			</div>
		</div>
	);
};

RegistrationPage.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	actionSaveRegistrationData: PropTypes.func
};

export default RegistrationPage;
