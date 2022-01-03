//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    const qWrapper = question.querySelector(".question-text-wrap");
    const qText = question.querySelector(".question-text");

    btn.addEventListener("click", (e) => {
        // let rect = qText.getBoundingClientRect().height; // - более точное значение высоты
        let size = (qText.clientHeight / 16) + "rem";
        qWrapper.style.setProperty("--question-height", size);

        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
})