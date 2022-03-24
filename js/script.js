let estEnc = false;
var lic = document.getElementById("blender");
const btnEnc = document.getElementById("blender-btn");
const btnSd = new Audio("../sound/botonLicuadora.mp3");
const sdLic = new Audio("../sound/licuadora.mp3");

const encLic = () => {
    btnSd.play();
    if (estEnc) {
        estEnc = false;
        lic.classList.remove("active");
        sdLic.pause();
    } else {
        estEnc = true;
        lic.classList.add("active");
        sdLic.play();
        sdLic.loop =true;
        sdLic.currentTime = 0;
    };
};

btnEnc.addEventListener('click', encLic);


