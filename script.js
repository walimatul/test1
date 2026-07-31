// =========================
// ELEMENT
// =========================


const button = document.getElementById("openInvitation");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const icon = musicBtn.querySelector("i");




// =========================
// OPEN INVITATION
// =========================


button.addEventListener("click", () => {


    music.play();



    button.style.opacity = "0";



    setTimeout(() => {

        button.style.display = "none";

    },500);




    document.body.style.overflowY = "auto";




    setTimeout(() => {


        const page2 = document.querySelector(".page-2");


        page2.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    },800);





    musicBtn.style.display = "block";


    musicBtn.classList.add("musicRotate");



});




// =========================
// MUSIC BUTTON
// =========================


musicBtn.addEventListener("click", () => {



    if(music.paused){



        music.play();



        icon.className =
        "fa-solid fa-music";



        musicBtn.classList.add("musicRotate");



    }

    else{



        music.pause();



        icon.className =
        "fa-solid fa-volume-xmark";



        musicBtn.classList.remove("musicRotate");



    }



});




// =========================
// PAGE 2 FADE TEXT
// =========================



const fadeElements =
document.querySelectorAll(".fadeText");



const observer =
new IntersectionObserver((entries)=>{



    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},{

    threshold:0.4

});



fadeElements.forEach((el)=>{


    observer.observe(el);


});




// =========================
// PAGE 3 ANIMATION TRIGGER
// =========================


const page3 = document.querySelector(".page-3");


console.log(document.querySelectorAll(".page"));
console.log("PAGE3:", page3);



if(page3){


    const page3Observer = new IntersectionObserver((entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                console.log("PAGE 3 MASUK");


                page3.classList.add("show");


            }


        });


    },{


        threshold:0.4


    });



    page3Observer.observe(page3);



}

else{


    console.log("PAGE 3 TAK JUMPA");


}






// ======================
// COUNTDOWN
// ======================



let eventDate =
new Date("September 12, 2026 12:00:00").getTime();





function updateNumber(id,value){



    const el =
    document.getElementById(id);



    if(el){



        if(el.textContent != value){



            el.classList.remove("numberChange");



            void el.offsetWidth;



            el.textContent = value;



            el.classList.add("numberChange");



        }


    }



}




setInterval(()=>{



    let now =
    new Date().getTime();



    let distance =
    eventDate - now;





    let days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );





    let hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );





    let minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );





    let seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );





    updateNumber("days",days);

    updateNumber("hours",hours);

    updateNumber("minutes",minutes);

    updateNumber("seconds",seconds);



},1000);
