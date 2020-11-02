import React from 'react';
import classNames from 'classnames';

import styles from './Options.css';
import headerStyles from './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = props.onClick;
		this.state = {
			currLang: props.currLang,
			children: props.languages
		};
	}
	
	componentDidMount() {}
	componentWillUnmount() {}

	render() {
		return (
			<div 
				className={classNames(styles.radioContainer, headerStyles.itemHeader)}
			>
					{this._getLanguages()}
			</div>
		);
	};

	_handleEvent = (e) => {
		this.setState({
			currLang: e.target.value
		})
		this.onClick(e.target.value);
	}

	_getLanguages = () => {
		return (
			<form>
				<div className={styles.radioItem}>
					<label className={styles.customRadio}>
						{<input type="radio" value={this.state.children[0]} 
							checked={this.state.currLang === this.state.children[0]}
							onChange={this._handleEvent}
						/>}
						{<span className={styles.checkmark}></span>}
						{this.state.children[0]}
					</label>
				</div>
				<div className={styles.radioItem}>
					<label className={styles.customRadio}>
						{<input type="radio" value={this.state.children[1]}
							checked={this.state.currLang === this.state.children[1]}
							onChange={this._handleEvent}
						/>}
						{<span className={styles.checkmark}></span>}
						{this.state.children[1]}
					</label>
				</div>
			</form>
		);
	}
};

export default Options;
