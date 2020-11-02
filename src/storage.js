import { CURRENT_PAIR_LANG } from './constants';

export function getApiConfig() {
	let pair = window.localStorage.getItem(CURRENT_PAIR_LANG);
	return config[pair];
}

export function getLanguages() {
	let langs = []
	
	for (var key in config) {
		langs.push(config[key].name)
	}

	return langs
}

export function setCurrentPairLang(pair) {
	window.localStorage.setItem(CURRENT_PAIR_LANG, pair);
}

export function getCurrentPairLang() {
	return window.localStorage.getItem(CURRENT_PAIR_LANG);
}

const config = {
	'es2eu': {
		'name':  'es2eu',
		'url':   'https://backend.batua.eus/es2eu',
		'mkey':  '85b92f176fe0efac',
		'model': 'batua_es2eu'
	},
	'eu2es': {
		'name':  'eu2es',
		'url':   'https://backend.batua.eus/eu2es',
		'mkey':  '378540641195b0',
		'model': 'batua_eu2es'
	}
};

