import React from 'react';
import PropTypes from 'prop-types';

import LogoLiveDune from '../../Assets/Icons/LogoLiveDune';
import MainButton from '../MainButton/MainButton';
import LogoLiveDuneMobile from '../../Assets/Icons/LogoLiveDuneMobile';

import styles from './Header.module.scss';

/**
 *
 * @param isMobile {boolean} - проверка мобильной версии
 * @param title {string} - текст в правом углу рядом с кнопкой
 * @param titleButton {string} - текст в правом углу в режиме без кнопки
 * @param buttonName {string} - название кнопки
 * @param widthButtonHeader {string} - ширина кнопки
 * @param heightButtonHeader {string} - высота кнопки
 * @param handleHeaderButtonClick {function} - клик по кнопке
 * @param textSizeButtonHeader {string} - размер текста в кнопке
 * @param lineHeightButtonHeader {string} - ширина текстового поля в кнопке
 * @param handleHeaderTitleClick {function} - клик по тексту в правом углу в режиме без кнопки
 * @returns {JSX.Element}
 * @constructor
 */

const Header = ({
	isMobile,
	title,
	titleButton,
	buttonName,
	widthButtonHeader,
	heightButtonHeader,
	handleHeaderButtonClick,
	textSizeButtonHeader,
	lineHeightButtonHeader,
	handleHeaderTitleClick
}) => {
	return (
		<div className={styles.root}>
			{isMobile ? <LogoLiveDuneMobile /> : <LogoLiveDune />}
			<div className={styles.rightBlock}>
				{title && (
					<p
						onClick={handleHeaderTitleClick}
						className={styles.rightBlock__title}
					>
						{title}
					</p>
				)}
				{titleButton && (
					<p
						onClick={handleHeaderTitleClick}
						className={styles.rightBlock__titleButton}
					>
						{titleButton}
					</p>
				)}
				{buttonName && (
					<div className={styles.rightBlock__button}>
						<MainButton
							textButton={buttonName}
							width={widthButtonHeader}
							height={heightButtonHeader}
							fontSize={textSizeButtonHeader}
							lineHeight={lineHeightButtonHeader}
							handleButtonClick={handleHeaderButtonClick}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

Header.propTypes = {
	isMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	title: PropTypes.string,
	titleButton: PropTypes.string,
	buttonName: PropTypes.string,
	widthButtonHeader: PropTypes.string,
	heightButtonHeader: PropTypes.string,
	handleHeaderButtonClick: PropTypes.func,
	textSizeButtonHeader: PropTypes.string,
	lineHeightButtonHeader: PropTypes.string,
	handleHeaderTitleClick: PropTypes.func
};

export default Header;
