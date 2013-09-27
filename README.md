chatbubbles
===========

jQuery plugin for creating automatic-scrolling, timestamped, labeled chat message bubbles

Usage:

    $('.chatBubbleContainer').bubbleContainer({
                moveUp: 'deleteOldest', 
                moveUpOnNew: true, 
                deleteOldestOnNew: false, 
                startDeletingAfter: 5,
                interval: 900 
    });
    
    $('input').keydown( function(evt) {
                var dateNow = new Date(),
                timestampStr = dateNow.getHours() + ':' + dateNow.getMinutes();
                
                if (evt.which === 13) {
                        var textVal = $(this).val(),
                        chatBubbleHtml = new chatBubble({
                                'userName': 'Username Here:',
                                'chatText': textVal,
                                'timestamp': timestampStr
                        });

                        $('.chatBubbleContainer').append(chatBubbleHtml).trigger('newBubble');
                        
                        $(this).val('');
                }
    });
    
    <div class="chatBubbleContainer"></div>
    <input placeholder="Type something here"></input>
