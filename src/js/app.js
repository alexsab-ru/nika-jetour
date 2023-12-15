import './data.alpine';
import './modules/scroll';
import './modules/modals';

import { connectForms, cookiecook } from '@alexsab-ru/scripts';
cookiecook();
connectForms('https://alexsab.ru/lead/jetour/orenburg/', function() {
});

grecaptcha.ready(function() {
	grecaptcha.execute('6Lepfy4pAAAAAAGHFP655qNe6Bb_BcskklcxajC6', {action: 'open'}).then(function(token) {
		var formData = new FormData();
		formData.append('g-recaptcha-response', token);
		const params = new URLSearchParams([...formData]);
		fetch("https://alexsab.ru/lead/re/", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: params,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('Success:', data);
				grecaptcha.res = date.response.success;
				window.re = date.response.success;
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	});
});