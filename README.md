chatbubbles
===========

jQuery plugin for creating automatic-scrolling, timestamped, labeled chat message bubbles

<h2><b>Usage:</b></h2>

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

<h4><b>bubbleContainer Options</b></h4>

<b>moveUp</b>
<p><i>(string) 'deleteOldest'</i></p>
<p>Deletes oldest message after moving all messages upwards</p>
<p><i>(string) 'keepOldest'</i></p>
<p>Does not delete oldest message after moving all messages upwards</p>

<b>moveUpOnNew</b>
<p><i>(boolean) true</i> or <i>false</i></p>
<p>If true, move all messages upwards when a new bubble is created</p>

<b>deleteOldestOnNew</b>
<p><i>(boolean) true</i> or <i>false</i></p>
<p>If true, delete oldest message when a new bubble is created</p>

<b>startDeletingAfter</b>
<p><i>(number)</i></p>
<p>(optional if moveUp is not used) If this is defined along with moveUp: 'deleteOldest', only messages after the first X number of messages will be deleted.</p>

<b>interval</b>
<p><i>(number)</i></p>
<p>(optional if moveUp is not used) Amount of time (in milliseconds) between upwards animation of bubbles</p>

<h4><b>chatBubble Options</b></h4>

<b>userName</b>
<p><i>(string)</i></p>
<p>(optional) String to use as the 'username' or message label</p>

<b>chatText</b>
<p><i>(string)</i></p>
<p>(optional) String to use as message text</p>

<b>timestamp</b>
<p><i>(string from timestamp)</i></p>
<p>Timestamp string.  For example, could be the hour and minute when the message is submitted, or you could have it display the full date.</p>
