const form = document.querySelector(".quiz form");
const correctAnswers = ["B", "A", "A", "B", "A"];

form.addEventListener("submit", e => {
    e.preventDefault();

    let usersAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    score = 0;
    usersAnswers.forEach((userAnswer, index) => { 
        if(userAnswer === correctAnswers[index]){
            score += 20;
        }
    });

    scrollTo(0,0);

    const resultBar = document.querySelector(".result");
    resultBar.querySelector("span").textContent = `${score}%`;
    resultBar.style.display = "inline";
});

