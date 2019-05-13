var scoreg = 0;
var scorec = 0;


function keuze1(){

    var computerskeuze = Math.floor(Math.random() * 3) + 1;

    if(computerskeuze != 1){

        if(computerskeuze == 2){
            scoreg++;
            document.getElementById("testa").innerHTML = scoreg;
            document.getElementById("uitkomst").innerHTML = "Jij wint!";
        }else{
            scorec++;
            document.getElementById("testb").innerHTML = scorec;
            document.getElementById("uitkomst").innerHTML = "Computer wint!";

        }
    }else{
        document.getElementById("uitkomst").innerHTML = "Gelijk!";
    }

    if(computerskeuze == 1){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Blad";
    }

    if(computerskeuze == 2){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Steen";
    }

    if(computerskeuze == 3){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Schaar";
    }

}

function keuze2(){

    var computerskeuze = Math.floor(Math.random() * 3) + 1;

    if(computerskeuze != 2){

        if(computerskeuze == 3){
            scoreg++;
            document.getElementById("testa").innerHTML = scoreg;
            document.getElementById("uitkomst").innerHTML = "Jij wint!";
        }else{
            scorec++;
            document.getElementById("testb").innerHTML = scorec;
            document.getElementById("uitkomst").innerHTML = "Computer wint!";

        }
    }else{
        document.getElementById("uitkomst").innerHTML = "Gelijk!";
    }

    if(computerskeuze == 1){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Blad";
    }

    if(computerskeuze == 2){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Steen";
    }

    if(computerskeuze == 3){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Schaar";
    }

}

function keuze3(){

    var computerskeuze = Math.floor(Math.random() * 3) + 1;

    if(computerskeuze != 3){

        if(computerskeuze == 1){
            scoreg++;
            document.getElementById("testa").innerHTML = scoreg;
            document.getElementById("uitkomst").innerHTML = "Jij wint!";
        }else{
            scorec++;
            document.getElementById("testb").innerHTML = scorec;
            document.getElementById("uitkomst").innerHTML = "Computer wint!";

        }
    }else{
        document.getElementById("uitkomst").innerHTML = "Gelijk!";
    }

    if(computerskeuze == 1){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Blad";
    }

    if(computerskeuze == 2){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Steen";
    }

    if(computerskeuze == 3){
        document.getElementById("computerskeuze").innerHTML = "De computer kiest voor Schaar";
    }

}