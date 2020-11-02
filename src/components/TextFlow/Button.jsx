import React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

var Button = function statelessFunctionComponentClass(props) {
	return (
		<button 
			className={classNames(styles.buttonSend)} 
			onClick={props.onClick} 
			ref={props.clickButton} 
		>
			Send
		</button>
	);
};

export default Button;
