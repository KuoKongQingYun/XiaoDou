function requestFullScreen(element) {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        element.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
function exitFullscreen(element) {
    var de = document;
    if (de.exitFullscreen) {
        element.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        element.webkitCancelFullScreen();
    }
}
function playMovie(thisElement){
	var videoElement=thisElement.siblings("video")[0];
	videoElement.play();
	requestFullScreen(videoElement);
}