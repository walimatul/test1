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


button.addEventListener("click",()=>{


    music.play();


    button.style.opacity="0";


    setTimeout(()=>{

        button.style.display="none";

    },500);



    // UNLOCK SCROLL
    document.body.classList.remove("lock-scroll");
    document.documentElement.classList.remove("lock-scroll");



    setTimeout(()=>{


        const page2 =
        document.querySelector(".page-2");


        page2.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    },800);



    musicBtn.style.display="block";


    musicBtn.classList.add("musicRotate");


});



// =========================
// MUSIC BUTTON
// =========================


musicBtn.addEventListener("click",()=>{


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
// PAGE 2 TEXT FADE
// =========================


const fadeElements =
document.querySelectorAll(".fadeText");


const fadeObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.2

});



fadeElements.forEach(el=>{

    fadeObserver.observe(el);

});





// =========================
// DOA BOX TRIGGER
// =========================


const doaBox =
document.querySelector(".doa-box");


if(doaBox){


const doaBoxObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            doaBox.classList.add("show");


        }


    });


},{

    threshold:0.5

});



doaBoxObserver.observe(doaBox);


}





// =========================
// LOVE BOX TRIGGER
// =========================


const loveBox =
document.querySelector(".love-box");


if(loveBox){


const loveBoxObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            loveBox.classList.add("show");


        }


    });


},{

    threshold:0.5

});



loveBoxObserver.observe(loveBox);


}


// =========================
// DOA & LOVE TEXT REVEAL
// =========================


const textObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});



document.querySelectorAll(".doa, .love").forEach(el=>{

    textObserver.observe(el);

});


// =========================
// PAGE 3 ANIMATION
// =========================


const page3 =
document.querySelector(".page-3");


if(page3){


const page3Observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


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






// ======================
// COUNTDOWN
// ======================


const eventDate =
new Date("September 12, 2026 12:00:00").getTime();





function updateNumber(id,value){


    const el =
    document.getElementById(id);



    if(el){


        if(el.textContent != value){


            el.classList.remove("numberChange");


            void el.offsetWidth;


            el.textContent=value;


            el.classList.add("numberChange");


        }


    }


}





setInterval(()=>{


    const now =
    new Date().getTime();



    const distance =
    eventDate-now;



    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );



    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );



    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );



    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );



    updateNumber("days",days);

    updateNumber("hours",hours);

    updateNumber("minutes",minutes);

    updateNumber("seconds",seconds);



},1000);
