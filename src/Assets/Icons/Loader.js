// import React from 'react';
// import styles from '../../Components/Loader/Loader.module.scss'
//
// const Loader = () => (
//     <div className={styles.body}>
//         <div className={styles.body__loader}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M20.9919 6.38122C21.6462 5.97239 22.5162 6.1687 22.8463 6.86602C23.7782 8.83464 24.1605 11.0286 23.9385 13.213C23.6693 15.8625 22.5264 18.3473 20.6897 20.2758C18.853 22.2044 16.4269 23.4671 13.7936 23.8652C11.1603 24.2633 8.46937 23.774 6.1447 22.4745C3.82003 21.175 1.99371 19.1391 0.953391 16.6875C-0.0869268 14.2358 -0.282121 11.5078 0.398552 8.93301C1.07923 6.35824 2.59709 4.08306 4.71306 2.46583C6.45746 1.13259 8.52663 0.308968 10.6917 0.0715176C11.4586 -0.0125911 12.0815 0.625709 12.076 1.39718C12.0705 2.16865 11.4371 2.77869 10.6737 2.88984C9.13018 3.11456 7.66096 3.72913 6.40959 4.68555C4.78625 5.92626 3.62178 7.67174 3.09958 9.64706C2.57738 11.6224 2.72712 13.7153 3.52524 15.5961C4.32335 17.477 5.72447 19.0389 7.50792 20.0359C9.29136 21.0328 11.3558 21.4082 13.376 21.1028C15.3962 20.7974 17.2575 19.8286 18.6666 18.3491C20.0756 16.8695 20.9525 14.9633 21.159 12.9306C21.3182 11.3636 21.0721 9.79016 20.455 8.35765C20.1498 7.64911 20.3377 6.79004 20.9919 6.38122Z" fill="url(#paint0_linear_1474_60)"/>
//                 <defs>
//                     <linearGradient id="paint0_linear_1474_60" x1="6.48" y1="3.43045e-08" x2="37.1667" y2="1.96757e-07" gradientUnits="userSpaceOnUse">
//                         <stop stopColor="#E8E8E8"/>
//                         <stop offset="1" stopColor="white" stopOpacity="0"/>
//                     </linearGradient>
//                 </defs>
//             </svg>
//         </div>
//         <div className={styles.body__text}>Отправка</div>
//     </div>
//
//
//
// );
//
//
// export default Loader;

import React from 'react';

const Loader = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M20.9919 6.38122C21.6462 5.97239 22.5162 6.1687 22.8463 6.86602C23.7782 8.83464 24.1605 11.0286 23.9385 13.213C23.6693 15.8625 22.5264 18.3473 20.6897 20.2758C18.853 22.2044 16.4269 23.4671 13.7936 23.8652C11.1603 24.2633 8.46937 23.774 6.1447 22.4745C3.82003 21.175 1.99371 19.1391 0.953391 16.6875C-0.0869268 14.2358 -0.282121 11.5078 0.398552 8.93301C1.07923 6.35824 2.59709 4.08306 4.71306 2.46583C6.45746 1.13259 8.52663 0.308968 10.6917 0.0715176C11.4586 -0.0125911 12.0815 0.625709 12.076 1.39718C12.0705 2.16865 11.4371 2.77869 10.6737 2.88984C9.13018 3.11456 7.66096 3.72913 6.40959 4.68555C4.78625 5.92626 3.62178 7.67174 3.09958 9.64706C2.57738 11.6224 2.72712 13.7153 3.52524 15.5961C4.32335 17.477 5.72447 19.0389 7.50792 20.0359C9.29136 21.0328 11.3558 21.4082 13.376 21.1028C15.3962 20.7974 17.2575 19.8286 18.6666 18.3491C20.0756 16.8695 20.9525 14.9633 21.159 12.9306C21.3182 11.3636 21.0721 9.79016 20.455 8.35765C20.1498 7.64911 20.3377 6.79004 20.9919 6.38122Z'
			fill='url(#paint0_linear_1474_60)'
		/>
		<defs>
			<linearGradient
				id='paint0_linear_1474_60'
				x1='6.48'
				y1='3.43045e-08'
				x2='37.1667'
				y2='1.96757e-07'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#E8E8E8' />
				<stop offset='1' stopColor='white' stopOpacity='0' />
			</linearGradient>
		</defs>
	</svg>
);

export default Loader;