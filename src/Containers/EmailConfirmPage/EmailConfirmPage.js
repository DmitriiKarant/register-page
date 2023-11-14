import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../Components/Header/Header';

import MainButton from '../../Components/MainButton/MainButton';
import styles from './EmailConfirmPage.module.scss';

const EmailConfirmPage = () => {
	const navigate = useNavigate();

	const params = useParams();

	const { name } = params;

	const isMobile = useSelector(state => state.ui);

	const title = 'Выйти';

	const goToMailButtonText = 'Перейти к почте';
	const goToMailButtonTextSize = isMobile ? '14px' : '16px';
	const goToMailButtonLineHeight = isMobile ? '14px' : '13px';
	const goToMailButtonWidth = isMobile ? '343px' : '354px';
	const goToMailButtonHeight = isMobile ? '56px' : '64px';

	const userName = name ? name : 'Уважаемый пользователь';

	const subTitleText = `${userName}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.`;

	const handleHeaderTitleClick = () => {
		navigate('/register');
	};

	const handleGoToMailButtonClick = () => {};

	const handleFooterButtonClick = () => {
		navigate('/resend');
	};

	return (
		<div className={styles.root}>
			<Header
				handleHeaderTitleClick={handleHeaderTitleClick}
				titleButton={title}
				isMobile={isMobile}
			/>
			<div className={styles.body}>
				<div className={styles.body__title}>Подтвердите ваш e-mail</div>
				<div className={styles.body__subTitle}>{subTitleText}</div>
				<form action='https://mail.ru/' target='_blank'>
					<MainButton
						textButton={goToMailButtonText}
						width={goToMailButtonWidth}
						height={goToMailButtonHeight}
						fontSize={goToMailButtonTextSize}
						lineHeight={goToMailButtonLineHeight}
						handleButtonClick={handleGoToMailButtonClick}
					/>
				</form>
				<div
					className={styles.body__footerButton}
					onClick={handleFooterButtonClick}
				>
					Мне не пришло письмо
				</div>
			</div>
		</div>
	);
};

EmailConfirmPage.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default EmailConfirmPage;
