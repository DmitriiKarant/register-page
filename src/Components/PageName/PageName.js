import React from 'react';
import PropTypes from 'prop-types';

import FaceBook from '../../Assets/Icons/FaceBook';
import Google from '../../Assets/Icons/Google';

import styles from './PageName.module.scss';

/**
 *
 * @param pageName {string} - текст заголовка
 * @param pageSubTitle {string} - текст подзаголовка
 * @param width {string} - текст заголовка
 * @returns {JSX.Element} - ширина блока подзаголовка
 * @constructor
 */

const PageName = ({ pageName, pageSubTitle, width }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>{pageName}</div>
			<div className={styles.subTitle} style={{ width }}>
				{pageSubTitle}
			</div>
			<div className={styles.socials}>
				<a
					className={styles.socialLink}
					href={'https://ru-ru.facebook.com/'}
				>
					<FaceBook />
					<p>Войти через Facebook</p>
				</a>
				<a
					className={styles.socialLink}
					href={'https://www.google.com/'}
				>
					<Google />
					<p>Войти через Google</p>
				</a>
			</div>
			<div className={styles.or}>или</div>
		</div>
	);
};

PageName.propTypes = {
	pageName: PropTypes.string,
	pageSubTitle: PropTypes.string,
	width: PropTypes.string
};

export default PageName;
