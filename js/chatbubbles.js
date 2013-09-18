var chatBubble = function(settings) {
	"use strict";
	var bubbleHtml = $('<span>').addClass('chatBubble'),

	elements = {
		'userName': $('<a>').addClass('chatBubble_userName'),
		'timestamp': $('<a>').addClass('chatBubble_timestamp'),
		'chatText': $('<a>').addClass('chatBubble_chatText')
	},

	defaults = {
		order: ['timestamp', 'userName', 'chatText'],
		message: '',
		userName: 'Test User',
		timestamp: true
	};

	$.each(defaults, function(index, settingValue) {
		settings[index] = settings[index] || defaults[index];
	});

//	if (typeof settings.container === "object") {
		elements.chatText.html(settings.chatText);
		elements.userName.html(settings.userName);

		if (settings.timestamp === true) {
			elements.timestamp.html(new Date());
		}
		else if (settings.timestamp !== undefined) {
			elements.timestamp.html(settings.timestamp);
		}	

		$.each(settings.order, function(index, orderText) {
			bubbleHtml.append(elements[orderText]);
		});

	return bubbleHtml;
//	}
};

		
