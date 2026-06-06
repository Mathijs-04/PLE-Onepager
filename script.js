const flowMessages = [
    "Choose Age of Sigmar or Warhammer 40,000.",
    "Ask in natural language—from core rules to faction interactions.",
    "Read the short answer, then open the detailed explanation if needed.",
    "Check the official source and reliability score before you play on.",
];

const flowButtons = document.querySelectorAll("[data-step]");
const flowLabel = document.querySelector("#flow-label");

flowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const step = Number(button.dataset.step);

        flowButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        if (flowLabel && flowMessages[step]) {
            flowLabel.textContent = flowMessages[step];
        }
    });
});
