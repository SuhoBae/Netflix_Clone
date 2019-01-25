const navigation = document.querySelector("nav"),
 navSCROLLED_CLASS = "scrolled";
 
const videoButtons = document.getElementById("js-vid-Btn"),
videoBtnsSCROLLED_Class = "vidScrolled";

const mainVideoBtn = document.getElementById("js-main__video-controls");



const handleScrollY = () => {
    const scrollY = window.scrollY;
    if(scrollY > 20){
        navigation.classList.add(navSCROLLED_CLASS);
    } else {
        navigation.classList.remove(navSCROLLED_CLASS);
    };
}

 
const handleVidoBtnsScrollY = () => {
    const VideoBtnsScrollY = window.scrollY;
    if(VideoBtnsScrollY> 30) {
        videoButtons.classList.add(videoBtnsSCROLLED_Class);
        mainVideoBtn.classList.add(videoBtnsSCROLLED_Class);
    } else {
        videoButtons.classList.remove(videoBtnsSCROLLED_Class);
        mainVideoBtn.classList.remove(videoBtnsSCROLLED_Class);
    }
}

window.addEventListener("scroll", handleScrollY);
window.addEventListener("scroll", handleVidoBtnsScrollY);