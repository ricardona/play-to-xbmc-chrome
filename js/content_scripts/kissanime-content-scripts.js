alert('chrome.extension.onMessage.addListener ENTER');

chrome.extension.onMessage.addListener(    
    function(request, sender, sendResponse) {
        alert('chrome.extension.onMessage.addListener');
        console.log("Received message: " + request.action);
        var $video = $('video');
        alert('Video ' + $video);
        console.log('Video ' + $video);
        if (request.action == "getVideoSrc") {
            var videoSrc = $video.attr('src');
            sendResponse({videoSrc: videoSrc});
        } else if (request.action == "onPlayback") {
            $video[0].pause();
        }
    }
);