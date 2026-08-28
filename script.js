/* =========================
   OPEN OUR STORY
========================= */

const startButton = document.getElementById("startButton");
const mainWebsite = document.getElementById("mainWebsite");

startButton.addEventListener("click", function () {

    mainWebsite.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   MUSIC PLAYER
========================= */

const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const backgroundMusic = document.getElementById("backgroundMusic");


musicButton.addEventListener("click", function () {

    if (backgroundMusic.paused) {

      backgroundMusic.play();

      musicIcon.textContent = "❚❚";
      musicText.textContent = "Pause Our Song";

      document.body.classList.add("music-playing");

    } else {

       backgroundMusic.pause();

       musicIcon.textContent = "♪";
       musicText.textContent = "Play Our Song";

         document.body.classList.remove("music-playing");

    }

});

/* =========================
   MEMORY JOURNEY NAVIGATION
========================= */

const journeyButtons =
    document.querySelectorAll(".memory-journey button");


journeyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId =
            button.getAttribute("data-target");

        const target =
            document.getElementById(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   ACTIVE MEMORY
========================= */

const journeySections = document.querySelectorAll(
    "#memory1, #memory2, #memory3, #memory4, #memory5, #letter"
);


const journeyObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                journeyButtons.forEach(function (button) {

                    button.classList.remove("active");

                    if (
                        button.getAttribute("data-target")
                        === currentId
                    ) {
                        button.classList.add("active");
                    }

                });

            }

        });

    },
    {
        threshold: 0.5
    }
);


journeySections.forEach(function (section) {

    journeyObserver.observe(section);

});

/* =========================
   CINEMATIC SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".memory-content, .letter-content, .final-reveal"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});

/* =========================
   PRIVATE ENTRY
========================= */

const privateEntry =
    document.getElementById("privateEntry");

const secretPassword =
    document.getElementById("secretPassword");

const unlockButton =
    document.getElementById("unlockButton");

const passwordError =
    document.getElementById("passwordError");


const SECRET = "nicky";


function unlockWebsite() {

    if (
        secretPassword.value.trim().toLowerCase()
        === SECRET
    ) {

        privateEntry.classList.add("hidden");

        secretPassword.value = "";

    } else {

        passwordError.classList.add("show");

        secretPassword.value = "";

        secretPassword.focus();

        setTimeout(function () {

            passwordError.classList.remove("show");

        }, 2500);

    }

}


unlockButton.addEventListener(
    "click",
    unlockWebsite
);


secretPassword.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockWebsite();

        }

    }
);

/* =========================
   HIDDEN ALWAYS MESSAGE
========================= */

const alwaysTrigger =
    document.getElementById("alwaysTrigger");

const hiddenMessage =
    document.getElementById("hiddenMessage");


alwaysTrigger.addEventListener("click", function () {

    hiddenMessage.classList.toggle("show");

});