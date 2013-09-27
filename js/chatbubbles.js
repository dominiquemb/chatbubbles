var chatBubble = function(settings) {
	"use strict";
	var bubbleHtml = $('<span>').addClass('chatBubble_textWrapper'),
	bubbleWrapper = $('<div>').addClass('chatBubble'),

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

	bubbleWrapper.prepend( $('<span>').addClass('chatBubble_leftCorner') )
		.append( bubbleHtml )
		.append( $('<span>').addClass('chatBubble_rightCorner') );

	return bubbleWrapper;
};

$.fn.bubbleContainer = function(settings) {
	if (typeof settings === "object") {
		var chatContainer = $(this);
			if ( settings.moveUp === 'keepOldest' ) {
				if (typeof settings.interval === "number") {
					if ($(this).data('chatBubbles-animating') !== true) {
						$(this).data('chatBubbles-animating', setInterval( function() {

							$.each( chatContainer.find('.chatBubble'), function(index, bubble) {
								$(bubble).offset({
									'top': $(bubble).offset().top - 50,
									'left': $(bubble).offset().left
								}); 
							});
						}, settings.interval));
					}
				}
			}

			if (settings.moveUp === 'deleteOldest') {
				if (typeof settings.interval === "number") {
					if ($(this).data('chatBubbles-animating') !== true) {
						$(this).data('chatBubbles-animating', setInterval( function() {
							if (typeof settings.startDeletingAfter === 'number') {
								if (chatContainer.find('.chatBubble').length > settings.startDeletingAfter) {
									oldestBubble = chatContainer.find('.chatBubble').eq(0).remove();
								}
							}
							else {
								oldestBubble = chatContainer.find('.chatBubble').eq(0).remove();
							}
						}, settings.interval));
					}
				}
			}
		
			if ( settings.moveUpOnNew === true ) {
				if ($(this).data('chatBubbles-moveUpOnNew') !== true) {
					$(this).data('chatBubbles-moveUpOnNew', function() {
						$.each( chatContainer.find('.chatBubble'), function(index, bubble) {
							$(bubble).offset({
								'top': $(bubble).offset().top - 50,
								'left': $(bubble).offset().left
							});
						});
					});

					$(this).on('newBubble', function() {
						if (chatContainer.find('.chatBubble').length > 2) {
							chatContainer.data('chatBubbles-moveUpOnNew')();
						}
					});
				}
			}
			
			if ( settings.deleteOldestOnNew === true ) {
				if ($(this).data('chatBubbles-deleteOldestOnNew') !== true) {
					$(this).data('chatBubbles-deleteOldestOnNew', function() {
						chatContainer.find('.chatBubble').eq(0).remove();
					});

					$(this).on('newBubble', function() {
						if (chatContainer.find('.chatBubble').length > 2) {
							chatContainer.data('chatBubbles-deleteOldestOnNew')();
						}
					});
				}
			}

			if ( settings.moveUp === false ) {
				clearTimeout( chatContainer.data('chatBubbles-animating') );
				$(this).data('chatBubbles-animating', false);
			}

			if ( settings.moveUpOnNew === false ) {
				$(this).off('newBubble', $(this).data('chatBubbles-moveUpOnNew'));
				$(this).data('chatBubbles-moveUpOnNew', false);
			}	

			if ( settings.deleteOldestOnNew === false ) {
				$(this).off('newBubble', $(this).data('chatBubbles-deleteOldestOnNew'));
				$(this).data('chatBubbles-deleteOldestOnNew', false);
			}
	}
};		
