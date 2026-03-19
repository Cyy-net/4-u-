document.addEventListener("DOMContentLoaded", () => {

    // NAVIGATION
    window.showSection = function(id) {
        document.querySelectorAll(".section").forEach(sec => {
            sec.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
    };

    // YES BUTTON
    window.yesAnswer = function() {
        document.getElementById("response").innerHTML =
            "yayyyyy i love you so much, wifey.";
        createFlowers(50);
    };

    // NO BUTTON
    const noBtn = document.getElementById("noBtn");
    if (noBtn) {
        noBtn.addEventListener("mouseenter", () => {
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        });

        noBtn.addEventListener("click", () => {
            document.getElementById("response").innerHTML =
                "That’s okay 😊 I respect your answer.";
        });
    }

    // FLOWER EXPLOSION
    function createFlowers(count) {
        const flowersContainer = document.getElementById("flowers");
        const flowers = ["🌸", "🌺", "💐", "🌷", "🌻"];

        for (let i = 0; i < count; i++) {
            const flower = document.createElement("div");
            flower.className = "flower";
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

            flower.style.left = Math.random() * window.innerWidth + "px";
            flower.style.fontSize = (12 + Math.random() * 24) + "px";
            flower.style.animationDuration = (2 + Math.random() * 2) + "s";

            flowersContainer.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 3000);
        }
    }

});