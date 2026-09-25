// ============================
// MCBurmalda Launcher Website
// ============================


// Ссылка на скачивание лаунчера
const launcherDownload =
"https://github.com/MCBurmaldaLauncher/MCBurmaldaLauncher/releases/latest";




// Кнопка скачивания

function downloadLauncher() {

    window.open(
        launcherDownload,
        "_blank"
    );

}





// Плавное появление элементов

const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
            "translateY(0)";


    }


});


},

{
    threshold:0.15
}

);





document
.querySelectorAll(
".card, .screens img, .download"
)

.forEach(element=>{


    element.style.opacity="0";


    element.style.transform=
        "translateY(40px)";


    element.style.transition=
        "0.7s ease";


    observer.observe(element);


});







// Эффект частиц на фоне

function createParticle(){


    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.style.left =
        Math.random()*100+"%";


    particle.style.animationDuration =
        (5+Math.random()*8)+"s";


    document.body.appendChild(
        particle
    );



    setTimeout(()=>{

        particle.remove();

    },13000);


}




setInterval(
    createParticle,
    800
);
