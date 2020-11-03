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

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		switch(request.handler) {
			case 'translate':
				translate(request.text, (response) => {
					chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
						const port = chrome.tabs.connect(tabs[0].id);
						port.postMessage({ handler: "translated", response: response })
					});
				});
				break;
			case 'setCurrLang':
				setCurrentPairLang(request.lang);
				break
			default:
				console.error('Unknown handler');
				console.log('Unknown handler');
		}

		return true;
	});

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId == "translateContextMenu") {
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				const port = chrome.tabs.connect(tabs[0].id);
				port.postMessage({ handler: "contextMenuTranslate" });
				//chrome.tabs.sendMessage(tabs[0].id, { handler: "contextMenuTranslate" }, (response) => {
				//});
			});
		}
	});
	
}
