import React from 'react';
import classNames from 'classnames';

import styles from './Logo.css';
import headerStyles from './Header.css';

var Logo = function statelessFunctionComponentClass(props) {
	return (
		<div
			className={classNames(styles.logoHeader, headerStyles.itemHeader, headerStyles.handCursor)}
			onClick={() => {
				window.open(
					'https://github.com/benitesf',
					'_blank'
				);
			}}
		>
			<img 
				className={classNames(styles.imgHeader)} 
				src={chrome.extension.getURL('static/textflow_logo.png')} 
			/>
		</div>
	);
};

export default Logo;
