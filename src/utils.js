import { setCurrentPairLang } from './storage';
import { translate } from './translator';

export function log(...messages) {
	if (process.env.NODE_ENV == 'production') {
		return;
	}

	console.log(...messages);
}

export function init() {
	chrome.runtime.onInstalled.addListener(() => {
		setCurrentPairLang("es2eu")
		chrome.contextMenus.create({
			"id": "translateContextMenu",
			"title": "Translate <3",
			"contexts": ["page", "selection", "link"]
		});
	});

	chrome.runtime.onConnect.addListener(port => {
  	port.onMessage.addListener(msg => {
    	// Handle message however you want
  	});
	});

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		switch(request.handler) {
			case 'translate':
				translate(request.text, sendResponse)
				break;
			case 'setCurrLang':
				setCurrentPairLang(request.lang);
				sendResponse('changed')
				console.log('[background] Change to: ', request.lang);
			default:
				console.error('Unknown handler');
				console.log('Unknown handler');
		}

		return true;
	});

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId == "translateContextMenu") {
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				chrome.tabs.sendMessage(tabs[0].id, { handler: "contextMenuTranslate" }, (response) => {});
			});
		}
	});
	
}
