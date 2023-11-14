import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';

import styles from './LoginAccess.module.scss';

const LoginAccess = props => {
	const navigate = useNavigate();

	const title = 'Выйти';

	const handleHeaderTitleClick = () => {
		navigate('/');
	};

	return (
		<div>
			<Header
				titleButton={title}
				handleHeaderTitleClick={handleHeaderTitleClick}
			/>
			<div className={styles.body}>Вход выполнен</div>
		</div>
	);
};

LoginAccess.propTypes = {};

export default LoginAccess;
