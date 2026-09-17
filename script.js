let currentScreen = 1;

const totalScreens = 6;

const currentPage = document.getElementById("currentPage");
const backBtn = document.getElementById("backBtn");


function showScreen(screenId) {

    const newScreen = document.getElementById(screenId);

    if (!newScreen) return;

    // Remove active from all screens
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    // Activate selected screen
    newScreen.classList.add("active");

    // Get screen number
    currentScreen = parseInt(
        screenId.replace("screen", "")
    );

    // Update counter
    currentPage.textContent =
        String(currentScreen).padStart(2, "0");

    // Show/hide back button
    if (currentScreen > 1) {
        backBtn.classList.add("visible");
    } else {
        backBtn.classList.remove("visible");
    }
}


function goBack() {

    if (currentScreen > 1) {

        showScreen(
            `screen${currentScreen - 1}`
        );

    }

}


function celebrate() {

    createConfetti();

}


function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-10px";

        piece.style.background =
            Math.random() > 0.5
                ? "#c8a866"
                : "#f5f1e8";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.style.transition =
            `top ${2 + Math.random() * 3}s linear,
             transform ${2 + Math.random() * 3}s linear`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.top = "110vh";

            piece.style.transform =
                `rotate(${Math.random() * 1000}deg)`;

        }, 50);

        setTimeout(() => {

            piece.remove();

        }, 5000);
    }

}