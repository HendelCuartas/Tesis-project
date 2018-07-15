function openVideo(videoID) {
    var videoEmbedLink = "https://www.youtube.com/embed/" + videoID + "?autoplay=1";
    $("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe onload="loadIframe()" src="' + videoEmbedLink + '" allowfullscreen></iframe></div></div>');
    if ($('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation')) {
        setTimeout(function () {
            $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
        }, 600);
    }
    $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function () {
        $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function () {
            $(this).remove();
        });
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click();
        }
    });
};

function loadIframe() {


}