import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { EMAIL_TITLE_TEXT } from '../../Constants/Constants';

import Header from '../../Components/Header/Header';
import Lock from '../../Assets/Icons/Lock';
import Input from '../../Components/Input/Input';
import MainButton from '../../Components/MainButton/MainButton';
import Loader from '../../Components/Loader/Loader';
import Letter from '../../Assets/Icons/Letter';

import styles from './PasswordRecoveryPage.module.scss';

const PasswordRecoveryPage = () => {
	const navigate = useNavigate();

	const isMobile = useSelector(state => state.ui);
	const accountsData = useSelector(state => state.accountsData);

	const [email, setEmail] = useState('');
	const [sending, setSending] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);

	const inputWidth = isMobile ? '319px' : '396px';
	const inputHeight = '52px';

	const sendButtonText = sending ? <Loader /> : 'Отправить';
	const sendButtonTextSize = isMobile ? '14px' : '16px';
	const sendButtonLineHeight = isMobile ? '14px' : '13px';
	const sendButtonWidth = isMobile ? '343px' : '420px';
	const sendButtonHeight = isMobile ? '56px' : '64px';

	const backButtonText = 'Вернуться на главную';
	const backButtonTextSize = isMobile ? '14px' : '16px';
	const backButtonLineHeight = isMobile ? '14px' : '13px';
	const backButtonWidth = isMobile ? '343px' : '354px';
	const backButtonHeight = isMobile ? '56px' : '64px';

	const handleSendingButtonClick = () => {
		accountsData.map(acc => {
			if (acc.email === email && email !== '') {
				setSending(true);
				setTimeout(() => {
					setMessageSent(true);
					setSending(false);
				}, 2000);
			} else {
				setErrorEmail(true);
			}
		});
	};

	const handleCancelButtonClick = () => {
		navigate('/');
	};

	const handleBackButtonClick = () => {
		navigate('/');
	};

	return (
		<div className={styles.root}>
			<Header isMobile={isMobile} />
			<div className={styles.body}>
				{messageSent ? <Letter /> : <Lock />}
				<div className={styles.body__title}>
					{messageSent ? 'Письмо отправлено' : 'Восстановить пароль'}
				</div>
				<div className={styles.body__subTitle}>
					{messageSent
						? 'На указанный вами e-mail было отправлено письмо для смены пароля'
						: 'Введите e-mail, на который регистрировались ранее'}
				</div>
				{!messageSent && (
					<div className={styles.body__input}>
						<Input
							placeholder={EMAIL_TITLE_TEXT}
							inputWidth={inputWidth}
							inputHeight={inputHeight}
							disabledInput={sending && 'disabled'}
							onChange={setEmail}
							errorEmail={errorEmail}
							setErrorEmail={setErrorEmail}
						/>
					</div>
				)}
				{errorEmail && (
					<div className={styles.body__errorText}>Неверный Email</div>
				)}
				<div className={styles.body__button}>
					{!messageSent ? (
						<MainButton
							textButton={sendButtonText}
							fontSize={sendButtonTextSize}
							lineHeight={sendButtonLineHeight}
							width={sendButtonWidth}
							height={sendButtonHeight}
							handleButtonClick={handleSendingButtonClick}
						/>
					) : (
						<MainButton
							textButton={backButtonText}
							fontSize={backButtonTextSize}
							lineHeight={backButtonLineHeight}
							width={backButtonWidth}
							height={backButtonHeight}
							handleButtonClick={handleBackButtonClick}
						/>
					)}
				</div>
				{!messageSent && (
					<button
						className={styles.body__cancelButton}
						onClick={handleCancelButtonClick}
					>
						Отменить
					</button>
				)}
			</div>
		</div>
	);
};

PasswordRecoveryPage.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	accountsData: PropTypes.array
};

export default PasswordRecoveryPage;
