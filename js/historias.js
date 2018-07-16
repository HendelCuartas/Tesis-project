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
        //console.log(videos);
    });
}

function closeWaitScreen() {
    $('.wait-screen').css('display', 'none');
}

function addVideos(videosLocal) {
    for (var a = 0; a < videos.length; a++) {
        createThumbnail(videosLocal[a]);
    }
}

function createThumbnail(video) {
    $(".video-section").append(
        `<div class="card animated pulse" >
          <img class="video-pop-up" src=${video.snippet.thumbnails.medium.url} onclick="openVideo('${video.id.videoId}')" />
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
    var maxResults = 19;
    var channelID = "UCJM35zebmBhaYJ2w5nDzJhA";
    var API_key = "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI";
    var snipp = [];

    $.get("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" +
        channelID + "&maxResults=" + maxResults + "&key=" + API_key,
        function (data) {
            var videos = data.items;
            $(".video-section").empty();
            var numeroVideos = videos.length;


            for (var i = 0; i < videos.length; i++) {

                $.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videos[i].id.videoId}&key=${API_key}`,
                    function (data) {
                        var snip = data.items;
                        snipp = snipp.concat(snip);
                        //console.log(snipp);
                        
                        var hayAlMenosUnResultado = false;
                        if (snipp.length == numeroVideos) {
                            //console.log(snipp);
                            var contador=0;
                            for (var j = 0; j < snipp.length; j++) {
                                
                                if (snipp[j].snippet.description.toLowerCase().includes($(".searchTerm").val())) {
                                    hayAlMenosUnResultado = true;
                                    console.log("found");
                                    createThumbnail(snipp[j]);
                                } else {
                                    if(j==snipp.length-1 && hayAlMenosUnResultado!=true){
                                        if($("#no-result-title").length==0){
                                            $(".video-section").append(`<h2 id="no-result-title" style="margin:auto; color:white">No se han encontrado resultados de 
                                            ${$(".searchTerm").val()}, por favor intenta con otra palabra</h2>`);
                                        }
                                        console.log("entranohayres");
                                        console.log("sirve");
                                    }

                                }

                            }
                        }
                    });
                /*if (videos[i].snippet.description.toLowerCase().includes($(".searchTerm").val())) {
                    console.log("found");
                    createThumbnail(videos[i]);
                    nohayresul = false;

                } else if (nohayresul != false) {
                    if ($("#no-result-title").length == 0) {
                        $(".video-section").append(`<h2 id="no-result-title" style="margin:auto; color:white">No se han encontrado resultados de 
                    ${$(".searchTerm").val()}, por favor intenta con otra palabra</h2>`);
                        console.log("entranohayres");
                        nohayresul = true;
                    }
                    //break;
                }*/
                //break;
            }
        });
}

function recomendation() {
    $(".video-section").empty();
    changeVideos('');
}