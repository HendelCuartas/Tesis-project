const maxResults = 19;
const channelID = "UCJM35zebmBhaYJ2w5nDzJhA";
const API_key = "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI";
const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelID}&maxResults=${maxResults}&key=${API_key}`;
let videos = [];
const elementsArray = document.querySelectorAll('.filter');

function getVideos() {
    $.get(url, function (data, status) {
        videos = data.items;
        addVideos(videos);
        console.log(videos);
    });
}

function closeWaitScreen() {
    $('.wait-screen').css('display', 'none');
}

function addVideos(videosLocal) {
    for (var a = 0; a < videos.length; a++) {
        createThumbnail(videosLocal[a], a);
    }
}

function createThumbnail(video, id) {
    $(".video-section").append(
        `<div class="card" >
          <img class="video-pop-up" src=${video.snippet.thumbnails.medium.url} onclick="selectVideo(${id})" />
          <h4>${video.snippet.title}</h4>
        </div>`);
}

function selectVideo(id) {
    openVideo(videos[id].id.videoId);
    console.log(videos[id].id.videoId);
}

function filterVideo(filterData) {
    return videos.filter(item => item.snippet.description.includes(filterData));
}

function changeVideos(target) {
    const videosTemp = filterVideo(target);
    addVideos(videosTemp)
}

elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function (val) {
        $(".video-section").empty();
        const filterTarget = val.target.name;
        changeVideos(filterTarget);
    });
});

function onLoadPage() {
    getVideos();
    closeWaitScreen();
}

function busqueda() {
    $('.video-section').empty();
    var maxResults = 10;
    var channelID = "UCJM35zebmBhaYJ2w5nDzJhA";
    var API_key = "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI";
    var nohayresul = null;
    $.get("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" +
        channelID + "&maxResults=" + maxResults + "&key=" + API_key,
        function (data) {
            var videos = data.items;
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].snippet.description.toLowerCase().includes($(".searchTerm").val())) {
                    console.log("found");
                    nohayresul = false;
                    createThumbnail(videos[i], i);
                } else if (nohayresul != false) {
                    nohayresul = true;
                }
            }
        });
}

function recomendation() {
    $(".video-section").empty();
    changeVideos('');
}