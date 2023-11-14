import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { EMAIL_TITLE_TEXT } from '../../Constants/Constants';

import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import MainButton from '../../Components/MainButton/MainButton';

import styles from './ResendMessagePage.module.scss';

const ResendMessagePage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);

	const isMobile = useSelector(state => state.ui);
	const accountsData = useSelector(state => state.accountsData);

	const title = 'Выйти';

	const inputWidth = isMobile ? '319px' : '396px';
	const inputHeight = '52px';

	const resendButtonText = 'Отправить  заново';
	const resendButtonTextSize = isMobile ? '14px' : '16px';
	const resendButtonLineHeight = isMobile ? '14px' : '13px';
	const resendButtonWidth = isMobile ? '343px' : '420px';
	const resendButtonHeight = isMobile ? '56px' : '64px';

	const handleHeaderTitleClick = () => {
		navigate('/register');
	};

	const handleResendButtonClick = () => {
		accountsData.map(acc => {
			if (acc.email === email && email !== '') {
				navigate('/confirm');
			} else {
				setErrorEmail(true);
			}
		});
	};

	const handleCanselButtonClick = () => {
		navigate('/confirm');
	};

	return (
		<div className={styles.root}>
			<Header
				title={title}
				handleHeaderTitleClick={handleHeaderTitleClick}
			/>
			<div className={styles.body}>
				<div className={styles.body__title}>Мне не пришло письмо</div>
				<div className={styles.body__subTitle}>
					{
						'Письмо может прийти с задержкой в 5-10 минут.\nТакже проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам". Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку support@livedune.ru и мы активируем ваш аккаунт.'
					}
				</div>
				<Input
					placeholder={EMAIL_TITLE_TEXT}
					inputWidth={inputWidth}
					inputHeight={inputHeight}
					onChange={setEmail}
					errorEmail={errorEmail}
					setErrorEmail={setErrorEmail}
				/>
				{errorEmail && (
					<div className={styles.body__errorText}>Неверный Email</div>
				)}
				<div className={styles.body__resendButton}>
					<MainButton
						textButton={resendButtonText}
						fontSize={resendButtonTextSize}
						lineHeight={resendButtonLineHeight}
						width={resendButtonWidth}
						height={resendButtonHeight}
						handleButtonClick={handleResendButtonClick}
					/>
				</div>
				<div
					className={styles.body__canselButton}
					onClick={handleCanselButtonClick}
				>
					Отменить
				</div>
			</div>
		</div>
	);
};

ResendMessagePage.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	accountsData: PropTypes.array
};

export default ResendMessagePage;
