import React from 'react';
import classNames from 'classnames';

import styles from './Footer.css';

import Button from './Button.jsx';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.sendButton = props.sendButton;
		this.clickButton = React.createRef();
	}

	render() {
		return (
			<div
				className={classNames(styles.footerContainer)}
			>
				{this._getInput()}
				{this._getSendButton()}
			</div>
		);
	}

	_getInput = () => {
		return (
			<div
				className={classNames(styles.inputWrapper)}
			>
				<input 
					type="text" 
					id="inputText"
					placeholder="Ingresar Texto" 
					onKeyPress={this._keyPressed}
					className={classNames(styles.inputText)}
				/>
			</div>
		);
	};

	_getSendButton = () => {
		return (
			<Button onClick={this.sendButton} clickButton={this.clickButton} />
		);
	};

	_keyPressed = (e) => {
		if (e.key === "Enter") {
			this.clickButton.current.click();
		}
	}
}

export default Footer;
