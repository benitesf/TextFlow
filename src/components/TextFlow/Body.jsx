import React from 'react';
import classNames from 'classnames';

import styles from './Body.css';

import TextBox from './TextBox.jsx';

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.divRef = React.createRef();
		this.state = {
			children: []
		}
	}

	componentDidMount() {
		window.addEventListener('addMessage', this.handleAddMessageEvent);
		window.addEventListener('cleanTextRoom', this.handleCleanMessagesEvent);
		this.scrollToBottom();
	}

	componentWillUnmount() {
		window.removeEventListener('addMessage', this.handleAddMessageEvent);
		window.removeEventListener('cleanTextRoom', this.handleCleanMessagesEvent);
	}

	scrollToBottom = () => {
		this.divRef.current.scrollTop = this.divRef.current.scrollHeight;
	}

	handleAddMessageEvent = (e) => {
		if (e.detail.message.length > 0) {
			let newChildren = this.state.children;
			newChildren.push(e.detail.message)

			this.setState({
				children: newChildren
			}, 
			() => {
				this.scrollToBottom();
			})
		}
	}

	handleCleanMessagesEvent = (e) => {
		this.setState({
			children: []
		})
	}

	render() {
		return (
			<div
				className={classNames(styles.bodyContainer)}
			>
				{this._getTextRoom()}
			</div>
		);
	}

	_getTextRoom = () => {
		return (
			<div
				className={classNames(styles.textRoom)}
				ref={this.divRef}
			>
				{
					this.state.children.map((value, index) => (
						<TextBox key={index} id={index} message={value} />
					))
				}
			</div>
		);
	};
}

export default Body;
