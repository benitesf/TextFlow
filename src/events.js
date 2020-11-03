import { getLanguages, setCurrentPairLang } from './storage';
import { translate } from './translator';

export function sendButton(e) {
	var text = inputText.value;
	inputText.value = '';

	chrome.runtime.sendMessage({handler: 'translate', text: text}, () => {});
	return true
}

export function sendToTranslateFromSelection(text) {
	chrome.runtime.sendMessage({handler: 'translate', text: text}, () => {});
	return true
}

export function cleanTextRoom(e) {
	var event = new CustomEvent('cleanTextRoom');
	window.dispatchEvent(event);
}

export function changeLanguage(lang) {
	setCurrentPairLang(lang);
	chrome.runtime.sendMessage({handler: 'setCurrLang', lang: lang}, () => {});
}

export function focusInput() {
	document.getElementById("inputText").focus();
}
