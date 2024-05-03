//Definition des images
let bg=new Image();
bg.src = "fond/default.png";

//Definition des varibales par défaut
let initial = "";
let dataURL = "#";
let name = "😎";
let color = "white"
let txt_style = "source-over"
let txt_style_active = false
let bg_load = null
let font = "600px 'Burbank Big Condensed Black'";
let shadow = "rgba(0,0,0,0.9)";
let shadow_active = false

//Recuperation des element dans le DOM

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const alert_initial = document.createElement("p").textContent = "Le text ne doit pas être supérieure à 3 lettre";
alert_initial.className = "alert_initial";

const alert = document.querySelector(".alert");

const download = document.querySelector("#c_download");

const c_txt_lueur = document.querySelector("#text-lueur")
const c_txt_style = document.querySelector("#text-style");
const b_color = document.querySelector(".button_color")
const twitter_result = document.querySelector("#twitter_result_img");

//Récupération du text

function getValue() {
    initial = document.querySelector("#initial").value;

//verifie que le text ne fait pas plus de 3 lettres

    if (initial.length > 3){
        console.log("Le text ne doit pas être supérieure à 3 lettre")
        name = "❌";
        font = "500px 'Burbank Big Condensed Black'"
        drawn();
        alert.style.display = "flex"
        alert.style.transform = "translatey(0px)"
    } else {
        name = initial
        alert.style.display = "none"
        alert.style.transform = "translatey(-60px)"

//Modifi la taille de la police par rapport aux nombres de lettres

        if (name.length === 1) {
            font = "800px 'Burbank Big Condensed Black'";
            drawn();
        }
        if (name.length === 2) {
            font = "600px 'Burbank Big Condensed Black'";
            drawn();
        }
        if (name.length === 3) {
            font = "400px 'Burbank Big Condensed Black'";
            drawn();
        }
    }
}

c_txt_style.onclick = function lueur_verif(){
    if (c_txt_style.checked === true){
        txt_style_active = true;
        color_style_verif();
    }else {
        txt_style_active = false;
        color_style_verif();
    }
}

c_txt_lueur.onclick = function (){
    if (c_txt_lueur.checked === true){
        shadow_active = true
        lueur_verif();
    }else {
        shadow_active = false
        lueur_verif();
    }
}

function lueur_verif(){
    if (shadow_active === true){
        shadow = color;
        drawn();
    }else {
        shadow = "rgba(0,0,0,0.9)";
        drawn();
    }
}

function color_style_verif(){
    if (txt_style_active === true){
        txt_style = "soft-light"
    } else {
        txt_style = "source-over"
    }
    drawn();
}

function bg_loading(){
    bg.onload = function (){
        bg_load = bg;
        drawn();
    }
}

function drawn(){

    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bg_load,0,0, canvas.width, canvas.height);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = font;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 30;
    ctx.shadowColor = shadow;

    ctx.fillStyle = color;
    ctx.globalCompositeOperation = txt_style;
    ctx.fillText(name.toLocaleUpperCase(),canvas.width/2, canvas.height/1.7);

    dataURL = canvas.toDataURL("image/png")
    download.download = "PDP_" + initial + ".jpeg";
    twitter_result.src = dataURL
}

download.onclick=function(){
    if (download.href === "#") {
    } else {
        download.href = dataURL;
    }
}

window.onload = bg_loading();