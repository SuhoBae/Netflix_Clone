const mainVideo = document.getElementById("vid__content"),
    playPauseBtn = document.getElementById("main__video-playPauseBtn"),
    muteBtn = document.getElementById("main__video-muteBtn"),    
    MainVideoSCROLLED_Class = "vid__content-scrolled";
    
const handlePlayPauseBtn = () => {
    if(mainVideo.paused) {
        mainVideo.play();
        playPauseBtn.innerHTML=`<i class="icon-pause"></i>`;
    } else {
        mainVideo.pause();        
        playPauseBtn.innerHTML=`<i class="icon-play"></i>`;
    }
}

const handleMuteBtn = () => {
    if(mainVideo.muted) {
        mainVideo.muted = false;
        localStorage.muted = false;
        muteBtn.innerHTML=`<i class="icon-volume-up">`;
    } else {
        mainVideo.muted = true;
        localStorage.muted = true;
        muteBtn.innerHTML=`<i class="icon-volume-off">`;
    }
}

const handleMainVideoScrolled = () => {
    const scrollY = window.scrollY 
    if(scrollY > 100 ){
        mainVideo.pause();
    } else {
        mainVideo.play();
    }
}

window.addEventListener("scroll", handleMainVideoScrolled)
playPauseBtn.addEventListener("click", handlePlayPauseBtn),
muteBtn.addEventListener("click", handleMuteBtn);

