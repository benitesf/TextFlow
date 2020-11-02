import React from 'react';
import classNames from 'classnames';

import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import styles from './TextFlow.css';

class TextFlow extends React.Component {
	constructor(props) {
		super(props);
		this.sendButton = props.sendButton;
		this.cleanTextRoom = props.cleanTextRoom;
		this.changeLanguage = props.changeLanguage;
		this.languages = props.languages;
		this.currLang = props.currLang;
	}

	render() {
		return (
			<div>
				<Header 
					cleanTextRoom={this.cleanTextRoom}
					changeLanguage={this.changeLanguage}
					languages={this.languages}
					currLang={this.currLang}
				/>
				<Body 
				/>
				<Footer 
					sendButton={this.sendButton} 
				/>
			</div>
		);
	}
}

export default TextFlow;
