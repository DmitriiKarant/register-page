import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Input.module.scss';

/**
 *
 * @param errorEmail {boolean} - состояние для проверки заполнения инпута Email
 * @param errorPassword {boolean} - состояние для проверки заполнения инпута пароль
 * @param errorValidate {boolean} - состояние для проверки совпадения Email и пароля
 * @param placeholder {string} - текст для плейсхолдера
 * @param inputWidth {string} - ширина инпута
 * @param inputHeight {string} - высота инпута
 * @param inputType {string} - тип инпута
 * @param disabledInput {string, boolean} - отключение инпута
 * @param onChange {function} - изменение заполнения инпута
 * @param setErrorEmail {function} - изменение состояния для проверки заполнения инпута Email
 * @param setErrorPassword {function} - изменение состояния для проверки заполнения инпута пароль
 * @param setErrorValidate {function} - изменение состояния проверки совпадения Email и пароля
 * @returns {JSX.Element}
 * @constructor
 */

const Input = ({
	errorEmail,
	errorPassword,
	errorValidate,
	placeholder,
	inputWidth,
	inputHeight,
	inputType,
	disabledInput,
	onChange,
	setErrorEmail,
	setErrorPassword,
	setErrorValidate
}) => {
	const onChangeInput = e => {
		onChange(e.target.value);
		errorEmail && e.target.value !== '' && setErrorEmail(false);
		errorPassword && e.target.value !== '' && setErrorPassword(false);
		errorValidate && setErrorValidate(false);
	};

	return (
		<div className={styles.root}>
			<input
				type={inputType}
				placeholder={placeholder}
				style={{ width: inputWidth, height: inputHeight }}
				className={cns(
					styles.input,
					errorEmail && inputType === 'text' && styles.input_error,
					errorPassword &&
						inputType === 'password' &&
						styles.input_error,
					!errorEmail &&
						!errorPassword &&
						errorValidate &&
						styles.input_error
				)}
				disabled={disabledInput}
				onChange={onChangeInput}
			/>
		</div>
	);
};

Input.propTypes = {
	errorEmail: PropTypes.bool,
	errorPassword: PropTypes.bool,
	errorValidate: PropTypes.bool,
	placeholder: PropTypes.string,
	inputWidth: PropTypes.string,
	inputHeight: PropTypes.string,
	inputType: PropTypes.string,
	disabledInput: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	onChange: PropTypes.func,
	setErrorEmail: PropTypes.func,
	setErrorPassword: PropTypes.func,
	setErrorValidate: PropTypes.func
};

Input.defaultProps = {
	inputWidth: '420px',
	inputHeight: '56px',
	inputType: 'text'
};

export default Input;
