import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './Trash.css';
import headerStyles from './Header.css';

var Trash = function statelessFunctionComponentClass(props) {
	return (
		<div
			className={classNames(styles.trashHeader, headerStyles.itemHeader, headerStyles.handCursor)}
			onClick={props.onClick}
		>
			<FontAwesomeIcon icon={faTrash} className={classNames(styles.trashImg)} />
		</div>
	);
};

export default Trash;
