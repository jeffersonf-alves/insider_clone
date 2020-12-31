
function mudaTshitMan() {
    let manIMG = document.getElementById('tshirtM');

    manIMG.src = "img/products/man-2.png";
}
function backTshirtMan() {
    let manIMG = document.getElementById('tshirtM');

    manIMG.src = "img/products/man-1.png";
}
function changeMascara() {
    let mascIMG = document.getElementById('masc');
    mascIMG.src = "img/products/mascara-2-2.png"
}
function backMascara() {
    let mascIMG = document.getElementById('masc');
    mascIMG.src = "img/products/mascara-1-1.png"
}

function mudaTshirWoman() {
    let womanIMG = document.getElementById('tshirtW');

    womanIMG.src = "img/products/woman-2.png";
}
function backTshirtWoman() {
    let womanIMG = document.getElementById('tshirtW');

    womanIMG.src = "img/products/woman-1.png";
}

function changeTshirtPerson() {
    let personIMG = document.getElementById('person');
    personIMG.src = "img/products/personalize-2.png";
}

function backTshirtPerson() {
    let personIMG = document.getElementById('person');
    personIMG.src = "img/products/personalize-1.png";
}

function btnMenu() {
    let menuMobile = document.getElementById('menuMobile');

    if(menuMobile.style.display == "none") {
        menuMobile.style.display = "block";  
    } else {
        menuMobile.style.display = "none";
    }

}
    

