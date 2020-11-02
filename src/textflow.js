import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App/App.jsx';
import { sendButton, cleanTextRoom, changeLanguage, focusInput, sendToTranslateFromSelection } from './events.js';
import { getLanguages, getCurrentPairLang, setCurrentPairLang } from './storage.js';

const floatingContentDivId = 'textFlow';
const floatingButtonParent = document.createElement('div');

setCurrentPairLang("es2eu");

floatingButtonParent.setAttribute('id', floatingContentDivId);
document.body.appendChild(floatingButtonParent);

function registerListeners() {
	_attachFloatingButton();
}

registerListeners();

function _attachFloatingButton() {
	ReactDOM.render(
		<App 
			sendButton={sendButton}
			cleanTextRoom={cleanTextRoom}
			changeLanguage={changeLanguage}
			languages={getLanguages()}
			currLang={getCurrentPairLang()}
			focusInput={focusInput}
		/>, floatingButtonParent);
}

function _removeFloatingButton() {
	ReactDOM.unmountComponentAtNode(floatingButtonParent);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	switch (request.handler) {
		case 'contextMenuTranslate':
			var text = window.getSelection().toString();
			
			if (text != '') {
				sendToTranslateFromSelection(text);
			}
			sendResponse({})
			break
		default:
			console.error('Unknown handler');
			sendResponse('unknown handler');
	}
});
