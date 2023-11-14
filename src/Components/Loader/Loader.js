import React from 'react';

import LoaderIcon from '../../Assets/Icons/Loader';

import styles from './Loader.module.scss';

const Loader = () => (
	<div className={styles.body}>
		<div className={styles.body__loader}>
			<LoaderIcon />
		</div>
		<div className={styles.body__text}>Отправка</div>
	</div>
);

export default Loader;
