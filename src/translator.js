import { getApiConfig } from './storage';
import $ from 'jquery';

export function translate(text, sendResponse) {
	const cfg = getApiConfig();
	let ukey = '';
	const mkey = cfg.mkey;
	const model = cfg.model;
	const url = cfg.url;

	var response = {
		"translated": ''
	};

	if (text.length > 0) {
		$.ajax({
			url: url + '/key/get',
			type: 'POST',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType: 'json',
			data: JSON.stringify({'mkey': mkey})
		}).then((data) => {
			ukey = data['ukey'];
			return $.ajax({
				url: url + '/job/add',
				type: 'POST',
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType: 'json',
				data: JSON.stringify({
					'mkey': mkey,
					'ukey': ukey,
					'text': text,
					'model': model
				})
			});
		}).then((data) => {
			const getStatus = function() {
				$.ajax({
					url: url + '/job/' + ukey + '/status',
					async: false,
					type: 'GET',
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					dataType: 'json'
				}).done(function(data) {
					if (data['message'] == 'processing') {
						setTimeout(getStatus(), 800)
					}
				});
			};

			getStatus();
	
			$.ajax({
				url: url + '/job/' + ukey + '/get',
				type: 'POST',
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType: 'json',
				data: JSON.stringify({'mkey': mkey})
			}).then((data) => {
				if (data['message']) {
					response.translated = data['message'];
					response.complete = true;
				}
				sendResponse(JSON.stringify(response));
			});
		});
	} else {
		response.complete = false;
		sendResponse(JSON.stringify(response));
	}
}
