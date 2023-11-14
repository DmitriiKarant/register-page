import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainButton.module.scss';

/**
 *
 * @param textButton {string} - текст в кнопке (название кнопки)
 * @param width {string} - длина/ширина кнопки
 * @param height {string} - высота кнопки
 * @param handleButtonClick {function} - клик по кнопке
 * @param fontSize {string} - размер текста в кнопке
 * @param lineHeight {string} - ширина текстового поля в кнопке
 */

const MainButton = ({
	textButton,
	width,
	height,
	handleButtonClick,
	fontSize,
	lineHeight
}) => {
	return (
		<button
			className={styles.mainButton}
			style={{ width, height, fontSize, lineHeight }}
			onClick={handleButtonClick}
		>
			<div>{textButton}</div>
		</button>
	);
};

MainButton.propTypes = {
	textButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	width: PropTypes.string,
	height: PropTypes.string,
	handleButtonClick: PropTypes.func,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.string
};

export default MainButton;
