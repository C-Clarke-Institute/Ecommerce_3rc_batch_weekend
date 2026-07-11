

document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

        });

    }

    // Countdown

    const target = new Date();
    target.setHours(target.getHours()+12);

    function countdown(){

        const now=new Date();

        const diff=target-now;

        if(diff<0) return;

        document.getElementById("hours").textContent=
            String(Math.floor(diff/3600000)).padStart(2,"0");

        document.getElementById("minutes").textContent=
            String(Math.floor(diff/60000)%60).padStart(2,"0");

        document.getElementById("seconds").textContent=
            String(Math.floor(diff/1000)%60).padStart(2,"0");

    }

    countdown();
    setInterval(countdown, 1000);

});