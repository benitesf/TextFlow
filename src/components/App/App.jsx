import React from 'react';
import classNames from 'classnames';
import styles from './App.css';
import TextFlow from '../TextFlow/TextFlow.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.imageUrl = chrome.extension.getURL('static/logo_128.png');
		this.state = { visible: true, expanded: false };
		this.sendButton = props.sendButton;
		this.cleanTextRoom = props.cleanTextRoom;
		this.changeLanguage = props.changeLanguage;
		this.languages = props.languages;
		this.currLang = props.currLang;
		this.focusInput = props.focusInput;
	}

	componentDidMount() {}
	componentWillUnmount() {}

	render() {
		return (
			<div
				className={classNames(styles.container, {
					[styles.visibleFadeIn]: this.state.visible,
					[styles.hideFadeOut]: !this.state.visible,
				})}
			>
				<div
					className={classNames(styles.wrapContainer, {
						[styles.visibleWrap]: this.state.expanded,
						[styles.hideWrap]: !this.state.expanded,
					})}
				>
						{this._getIconButton()}
						{this._getContent()}
				</div>
			</div>
		);
	};

	_getIconButton = () => {
		return (
			<div
				className={classNames(styles.iconContainer, {
					[styles.visibleIcon]: !this.state.expanded,
					[styles.hideIcon]: this.state.expanded,
				})}
				onClick={() => {
					this.setState({expanded: !this.state.expanded});
					this.focusInput()
				}}
			>
				<img className={classNames(styles.iconImg)} src={this.imageUrl} />
			</div>
		);
	};

	_getContent = () => {
		return (
			<div
				className={classNames(styles.contentContainer, {
					[styles.visibleContent]: this.state.expanded,
					[styles.hideContent]: !this.state.expanded,
				})}
			>
				<div 
					className={classNames(styles.angleContainer, {
						[styles.visibleAngle]: this.state.expanded,
						[styles.hideAngle]: !this.state.expanded,
					})}
					onClick={() => {
						this.setState({expanded: !this.state.expanded});
					}}
				>
					<FontAwesomeIcon icon={faAngleRight}
						className={classNames(styles.angleRight, styles.hvrHorizontal, {
							[styles.visibleAngleRight]: this.state.expanded,
							[styles.hideAngleRight]: !this.state.expanded,
						})}
					/>
				</div>
				<div
					className={classNames(styles.textFlowContainer, {
						[styles.visibleTextFlow]: this.state.expanded,
						[styles.hideTextFlow]: !this.state.expanded,
					})}
				>
					<TextFlow 
						sendButton={this.sendButton}
						cleanTextRoom={this.cleanTextRoom}
						changeLanguage={this.changeLanguage}
						languages={this.languages}
						currLang={this.currLang}
					/>
				</div>
			</div>
		);
	};
}

export default App;
