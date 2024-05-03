
//Definition des images
let bg=new Image();
bg.src = "/pdp_generator/fond/fond_default.png";

//Definition des varibales par défaut
let initial = "";
let dataURL = "#";
let name = "😎";
let color = "white"
let txt_style = "source-over"
let txt_style_active = false


//Recuperation des element dans le DOM

const alert_initial = document.createElement("p").textContent = "Le text ne doit pas être supérieure à 3 lettre";
alert_initial.className = "alert_initial";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const download = document.querySelector("#c_download");

const b_color_def = document.querySelector("#color_def");
const b_color_red = document.querySelector("#color_red");
const b_color_blue = document.querySelector("#color_blue");
const b_color_yellow = document.querySelector("#color_yellow");
const b_color_green = document.querySelector("#color_green");
const b_color_purple = document.querySelector("#color_purple");
const c_cloud = document.querySelector("#cloud");
const c_txt_style = document.querySelector("#text-style");
const b_color = document.querySelector(".button_color")
const twitter_result = document.querySelector("#twitter_result_img");

function getValue() {
    initial = document.querySelector("#initial").value;

//verifie que le text ne fait pas plus de 3 lettres

    if (initial.length > 3){
        console.log("Le text ne doit pas être supérieure à 3 lettre")
        name = "";
        drawn();
    } else {
        name = initial
        console.log(initial.length);
    }

//Modifi la taille de la police par rapport aux nombres de lettres

    if (name.length === 1) {
        ctx.font = "800px 'Burbank Big Condensed Black'";
        drawn()
    }
    if (name.length === 2) {
        ctx.font = "600px 'Burbank Big Condensed Black'";
        drawn()
    }
    if (name.length === 3) {
        ctx.font = "400px 'Burbank Big Condensed Black'";
        drawn();
    }
}

c_txt_style.onclick = function (){
    if (c_txt_style.checked === true){
        txt_style_active = true;
        drawn()
    }else {
        txt_style_active = false;
        drawn();
    }
}

b_color_def.onclick = function (){
    color = "#ffff"
    if (txt_style_active === true){
        txt_style = "overlay"
    } else {
        txt_style = "source-over"
    }
    drawn()
}
b_color_red.onclick = function (){
    color = "red"
    if (txt_style_active === true){
        txt_style = "color"
    } else {
        txt_style = "source-over"
    }
    drawn()
}
b_color_blue.onclick = function (){
    color = "#3ba4ff";
    if (txt_style_active === true){
        txt_style = "color"
    } else {
        txt_style = "source-over"
    }
    drawn()
}
b_color_yellow.onclick = function (){
    color = "#ffe000";
    if (txt_style_active === true){
        txt_style = "color"
    } else {
        txt_style = "source-over"
    }
    drawn()
}
b_color_green.onclick = function (){
    color = "#226b11";
    if (txt_style_active === true){
        txt_style = "color"
    } else {
        txt_style = "source-over"
    }
    drawn();
}
b_color_purple.onclick = function (){
    color = "#b426e1";
    if (txt_style_active === true){
        txt_style = "color"
    } else {
        txt_style = "source-over"
    }
    drawn();
}

function color_verif(){
    if (txt_style_active === true){
        if (color === "#ffff"){ //Nuage Blanc
            txt_style = "overlay";
        }
        if (color === "red"){ //Nuage Rouge
            txt_style = "color";
        }
        if (color === "#32ded8"){ //Nuage Bleu
            txt_style = "color";
        }
        if (color === "#ffe000"){
            txt_style = "color";
        }
        if (color === "#226b11"){
            txt_style = "color";
        }
        if (color === "#b426e1"){
            txt_style = "color";
        }else {
            if (txt_style_active === false){
                txt_style = "source-over";
            }
        }
    }
}

// window.onload = function (){
//     ctx.globalCompositeOperation = "source-over";
//     ctx.drawImage(bg,0,0, canvas.width, canvas.height);
//     ctx.filter = "none";
//     ctx.fillStyle = color;
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.font = "600px 'Burbank Big Condensed Black'";
//     ctx.shadowBlur = 30;
//     ctx.shadowColor = "rgba(0,0,0,0.4)";
//     ctx.fillText(name,canvas.width/2, canvas.height/1.8)
//     ctx.globalCompositeOperation = "source-over";
//     dataURL = canvas.toDataURL("image/png")
//     twitter_result.src = dataURL
// }

bg.onload = drawn();

function drawn(){

    color_verif()
    ctx.globalCompositeOperation = "source-over";
    // ctx.filter = "blur(10px)";
    bg.onload = function (){
        console.log(bg.src)
        ctx.drawImage(bg,0,0, canvas.width, canvas.height);
    }
    ctx.filter = "none";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600px 'Burbank Big Condensed Black'";
    ctx.strokeStyle = "rgba(0,0,0,0.4)";
    ctx.lineWidth = 15;
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeText(name.toLocaleUpperCase(),canvas.width/2, canvas.height/1.8);
    ctx.filter = "none";
    ctx.globalCompositeOperation = txt_style;
    ctx.fillText(name.toLocaleUpperCase(),canvas.width/2, canvas.height/1.8);

    ctx.globalCompositeOperation = "source-over";

    dataURL = canvas.toDataURL("image/png")
    download.download = "PDP_" + initial + ".jpeg";
    twitter_result.src = dataURL
    // <a download="test.jpeg" href="#" id="c_download">Download</a>
}

download.onclick=function(){
    if (download.href === "#") {
    } else {
        download.href = dataURL;
    }
}