const glow = document.querySelector(".cursor-glow");

if (glow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener(
        "mousemove",
        (event) => {
            glow.style.left = `${event.clientX}px`;
            glow.style.top = `${event.clientY}px`;
            glow.style.opacity = "1";
        },
        { passive: true },
    );

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });
}
