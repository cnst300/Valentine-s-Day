const customCursor = document.querySelector('.custom-cursor');
const colorButtonYes = document.querySelector('#yesBT');
const colorButtonNo = document.querySelector('#noBT');
const body = document.querySelector('body');

let clickNo= 0;

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX - 10}px`; 
    customCursor.style.top = `${e.pageY - 10}px`;  
});

colorButtonYes.addEventListener('mouseenter', () => {
    customCursor.classList.add('color-changedRed');  
});

colorButtonYes.addEventListener('mouseleave', () => {
    customCursor.classList.remove('color-changedRed');  
});

colorButtonNo.addEventListener('mouseenter', () => {
    customCursor.classList.add('color-changedBlack');  
});

colorButtonNo.addEventListener('mouseleave', () => {
    customCursor.classList.remove('color-changedBlack');
});





document.getElementById("yesBT").addEventListener("click", function() {
    if(clickNo != 0){
        alert("Asa vtm, vezi ca se poate?");
    }
    window.location.href = "yes.html"; // Navighează la pagina1.html
});

document.getElementById("noBT").addEventListener("click", () => {
    clickNo++;
    console.log("clickNo: ", clickNo);

    document.body.classList.add("blackOUT");

    if(clickNo == 1){
        setTimeout(() => {
            alert("Vrei sa ti rup picioarele? \n Eu zic sa mai incerci odata!");

            document.body.classList.remove("blackOUT");
        }, 2500); 
    }

    if(clickNo == 2){
        setTimeout(() => {
            alert("Acum chiar cred ca vrei sa ti rup picioarele!!!");

            document.body.classList.remove("blackOUT");
        }, 2500); 
    }

    if(clickNo == 3){
        setTimeout(() => {
            alert("Ai belit pla! \n Ne despartim!");

            document.querySelector("h1").style.display = "none";

            document.querySelectorAll("button").forEach(button => {
                button.style.display = "none";
            });
        }, 2500); 
    }
});