/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var selectors = {
		showFormButton: '.js-request-form',
		fade: '.js-fade-for-form',
		formSource: '.js-form-container'
	};

	$(selectors.showFormButton).on('click', showForm);

	function showForm(e) {

		var $button = $(e.currentTarget),
			paramList = [
				'data-form-header', // set header text - text
				'data-hide-close', // set to hide close button - 1
				'data-button-text', // set text on submit button - text
				'data-hide-header', // set to hide header - 1
				'data-hide-works-type', // set to hide select with works type - 1
				'data-hide-name', // set to hide name - 1
				'data-hide-email', // set to hide email - 1
				'data-hide-files', // set to hide files - 1
				'data-hide-tel', // set to hide tel-phone - 1
				'data-hide-content', // set to hide textarea with comments - 1
				'data-css-class', // set to add css classes - text

				'data-works-type', // set selected works type
				'data-works-type-text', // set to select default option
				'data-name-text', // set to change label with name
				'data-email-text', // set to change label with email
				'data-files-text', // set to change label with files
				'data-tel-text', // set to change label with tel
				'data-content-text' // set to hide textarea change label with content
			],
			$form = $($(selectors.formSource).html()),
			$fade = $('<div class="' + selectors.fade.substr(1) + ' fade-for-form"></div>'),
			formParams = {},
			i, len, value, param;

		for (i = 0, len = paramList.length; i < len; i += 1) {
			param = paramList[i];
			value = $button.attr(param);
			if (value) {
				formParams[param] = value;
			}
		}

		setFormByParams($form, formParams);

		findEventListeners($form, formParams);

		$fade.append($form);
		$('body').append($fade);

		$fade.on('click', hideForm);

	}

	function setFormByParams($form, params) {

		var key, value;

		for (key in params) {
			
			if (params.hasOwnProperty(key)) {

				value = params[key];

				switch (key) {

					case 'data-form-header': // set header text - text
						$form.find('.js-request-form-header').html(value);
						break;

					case 'data-hide-close': // set to hide close button - 1
						$form.find('.js-request-form-wrapper-close').hide();
						break;

					case 'data-button-text': // set text on submit button - text
						$form.find('[type="submit"]').val(value).css('width', '310px');
						break;

					case 'data-hide-header': // set to hide header - 1
						$form.find('.js-request-form-header').hide();
						break;

					case 'data-hide-works-type': // set to hide select with works type - 1
						$form.find('[name="works-type"]').parent().hide();
						break;

					case 'data-hide-name': // set to hide name - 1
						$form.find('[name="name"]').parent().hide();
						break;

					case 'data-hide-email': // set to hide email - 1
						$form.find('[name="email"]').parent().hide();
						break;

					case 'data-hide-files': // set to hide files - 1
						$form.find('[name="files"]').parent().hide();
						$form.find('.js-request-form-progress-wrapper').hide();
						break;

					case 'data-hide-tel': // set to hide tel-phone - 1
						$form.find('[name="tel"]').parent().hide();
						break;

					case 'data-hide-content': // set to hide textarea with comments - 1
						$form.find('[name="content"]').parent().hide();
						break;

					case 'data-css-class': // set to add css classes - text
						$form.addClass(value);
						break;

					case 'data-works-type':
						$form.find('[name="works-type"]').val(value);
						break;

					case 'data-works-type-text': // set to select default option
						$form.find('[name="works-type"]').parent().find('span').html(value);
						break;

					case 'data-name-text': // set to change label with name
						$form.find('[name="name"]').attr('placeholder', value).parent().find('span').html(value);
						break;

					case 'data-email-text': // set to change label with email
						$form.find('[name="email"]').attr('placeholder', value).parent().find('span').html(value);
						break;

					case 'data-files-text': // set to change label with files
						$form.find('[name="files"]').parent().find('span').html(value);
						break;

					case 'data-tel-text': // set to change label with tel
						$form.find('[name="tel"]').parent().find('span').html(value);
						break;

					case 'data-content-text': // set to hide textarea change label with content
						$form.find('[name="content"]').attr('placeholder', value).parent().find('span').html(value);
						break;

				}

			}

		}

	}

	function findEventListeners($form, params) {


















	}

	function hideForm() {
		$(selectors.fade).remove();
	}


}(window));