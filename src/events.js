import { getLanguages, setCurrentPairLang } from './storage';
import { translate } from './translator';

export function sendButton(e) {
	var text = inputText.value;
	inputText.value = '';

	return new Promise((resolve, reject) => {

		chrome.runtime.sendMessage({handler: 'translate', text: text}, response => {
		
			/*if (response.complete) {
				console.log('Complete')
				resolve();
			}	else {
				console.log('something wrong');
				reject('something wrong');
			}*/

			try {
					const parsed = JSON.parse(response);
				
					if (!parsed.translated) {
						return
					}

					if (parsed.translated.length == 0) {
						return
					}

					var event = new CustomEvent('addMessage', {
						detail: {
							message: parsed.translated
						}
					});

					window.dispatchEvent(event);
				}
				catch(error) {
					console.log('Ocurred an error while parsing JSON');
				}
		});
	});
}

export function sendToTranslateFromSelection(text) {
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage({handler: 'translate', text: text}, response => {
			try {
					const parsed = JSON.parse(response);
				
					if (!parsed.translated) {
						return
					}

					if (parsed.translated.length == 0) {
						return
					}

					var event = new CustomEvent('addMessage', {
						detail: {
							message: parsed.translated
						}
					});

					window.dispatchEvent(event);
				}
				catch(error) {
					console.log('Ocurred an error while parsing JSON');
				}
		});
	});
}

export function cleanTextRoom(e) {
	var event = new CustomEvent('cleanTextRoom');
	window.dispatchEvent(event);
}

export function changeLanguage(lang) {
	setCurrentPairLang(lang);
	
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage({handler: 'setCurrLang', lang: lang}, response => {
		});
	});
}

export function focusInput() {
	document.getElementById("inputText").focus();
}
