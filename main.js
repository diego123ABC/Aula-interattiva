let i, j;

function generazioneAula(){
    let altezza = document.getElementById("altezza").value;
    if(altezza <= 0){
        alert("Altezza non valida");
    }else{
        let lunghezza = document.getElementById("lunghezza").value;
        if(lunghezza <= 0){
            alert("Lunghezza non valida");
        }else{
            let aula = document.getElementById("aula");
            for (i = 0; i < altezza; i++) {
                for (j = 0; j < lunghezza; j++) {
                    let img = document.createElement("img");
                    img.src = "computer-off.png";
                    img.onclick = function () {
                        if(img.src.includes("computer-off.png")) {
                            img.src="computer-on.png";
                        } else {
                            img.src="computer-off.png";
                        }
                    }
                    aula.appendChild(img);
                }
                aula.appendChild(document.createElement("br"));
            }
        }
    }
}

function resetAula(){
    document.getElementById("altezza").value = "";
    document.getElementById("lunghezza").value = "";
    document.getElementById("aula").innerHTML = "";
}