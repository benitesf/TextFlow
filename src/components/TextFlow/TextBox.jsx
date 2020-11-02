import React from 'react';
import classNames from 'classnames';

import styles from './TextBox.css';

let TextBox = function statelessFunctionComponentClass(props) {
	let key = props.id;
	let message = props.message;

	return (
		<div
			className={classNames(styles.textBox)} key={key}
		>
			<div
				className={classNames(styles.bubble)}
			>
				{message}
			</div>
		</div>
	);
};

export default TextBox;
