
//Definition des images
let fond1=new Image();
let fond2=new Image();
let brume=new Image();
fond2.src = "fond/The Big Bang Background.JPG"
fond1.src = "fond/style1.png";
brume.src = "nuage/nuage_defaut.png";

//Definition des varibales par défaut
let initial = "";
let dataURL = "#";
let bg_style = fond1;
let name = "";
let color = "white"
let txt_style = "source-over"

//Recuperation des element dans le DOM

const alert_initial = document.createElement("p").textContent = "Le text ne doit pas être supérieure à 3 lettre";
alert_initial.className = "alert_initial";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const result = document.querySelector("#result");
const download = document.querySelector("#c_download");

const b_color_red = document.querySelector("#color_red");
const b_color_blue = document.querySelector("#color_blue");
const twitter_result = document.querySelector("#twitter_result_img");

function getValue() {
    initial = document.querySelector("#initial").value;

//verifie que le text ne fait pas plus de 3 lettres

    if (initial.length > 3){
        console.log("Le text ne doit pas être supérieure à 3 lettre")
        name = "";
        drawn()
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
        drawn()
    }
}
b_color_red.onclick = function (){
    brume.src = "nuage/nuage_red.png";
    color = "red"
    txt_style = "source-over"
    drawn()
}
b_color_blue.onclick = function (){
    brume.src = "nuage/nuage_blue.png";
    color = "#1288ed";
    txt_style = "color";
    drawn();
}

fond1.onload = function (){
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bg_style,0,0,);
    ctx.filter = "none";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600px 'Burbank Big Condensed Black'";
    ctx.shadowBlur = 30;
    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.fillText("YO",canvas.width/2, canvas.height/1.8)
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(brume,0,0,800,800);
}

function drawn(){
    ctx.globalCompositeOperation = "source-over";
    //ctx.filter = "blur(10px)";
    ctx.drawImage(bg_style,0,0,);
    ctx.filter = "none";
    ctx.globalCompositeOperation = txt_style;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 30;
    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.fillText(name.toLocaleUpperCase(),canvas.width/2, canvas.height/1.8)
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(brume,0,0,800,800);

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
