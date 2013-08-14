var chatBubble = function(settings) {
	"use strict";
	var bubbleHtml = $('<span>').addClass('chatBubble'),
	elements = {
		'userText': $('<a>').addClass('chatBubble_from'),
		'timestamp': $('<a>').addClass('chatBubble_timestamp'),
		'chatText': $('<a>').addClass('chatBubble_chatText')
	},

	defaults = {
		order: ['timestamp', 'userText', 'chatText'],
		message: '',
		userName: 'Test User'	 
	};

	$.each(defaults, function(index, settingValue) {
		settings[index] = settings[index] || defaults[index];
	});

	if (typeof settings.container === "object") {
		elements.chatText.html(settings.message);
		elements.userText.html(settings.userName);

		if (settings.timestamp === true) {
			elements.timestamp = new Date();
		}

		$.each(settings.order, function(index, orderText) {
			bubbleHtml.append(elements[orderText]);
		});

	return bubbleHtml;
	}
};

		
