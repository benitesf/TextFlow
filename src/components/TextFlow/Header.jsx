import React from 'react';
import classNames from 'classnames';

import styles from './Header.css';

import Trash from './Trash.jsx';
import Logo from './Logo.jsx';
import Options from './Options.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.cleanTextRoom = props.cleanTextRoom;
		this.changeLanguage= props.changeLanguage;
		this.languages = props.languages;
		this.currLang = props.currLang;
	}

	render() {
		return (
			<div
				className={classNames(styles.headerContainer)}
			>
				{this._getLogoIcon()}
				{this._getTrashIcon()}
				{this._getOptionsIcon()}
			</div>
		);
	}
	
	_getLogoIcon = () => {
		return (
			<Logo/>
		);
	};

	_getTrashIcon = () => {
		return (
			<Trash onClick={this.cleanTextRoom} />
		);
	};

	_getOptionsIcon = () => {
		return (
			<Options 
				onClick={this.changeLanguage} 
				languages={this.languages} 
				currLang={this.currLang}
			/>
		);
	};
}

export default Header;
