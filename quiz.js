let count = 1;
let earned_marks = 0;
let questions = {
    1: "What is capital of India ?",
    2: "What is capital of Russia ?",
    3: "What is capital of USA ?",
    4: "What is capital of France ?",
    5: "What is full form of JS ?",
    6: "What is full form of CSS ?",
    7: "In which decade was the Internet first implemented ?",
    8: "Which of the following is a framework of Node.JS ?",
    9: "'.TXT' extension refers usually to what kind of file ?"

};
let answers = {
    1: ["Agra", "New Delhi", "Kanpur", "Indore"],
    2: ["Kostroma", "Samara", "Kazan", "Moscow"],
    3: ["Washington", "Newyork", "Chicago", "Boston"],
    4: ["Nice", "Paris", "Lyon", "Toulouse"],
    5: ["JavaScience", "JavaStyles", "JsonScript", "JavaScript"],
    6: ["ComputerScienceSheets", "ComputerStyleSheets", "CascadingStyleSheets", "CascadingSourceSheets"],
    7: ["1940s", "1950s", "1960s", "1970s"],
    8: ["Laravel", "React", "Express.JS", "Bootstrap"],
    9: ["Text File", "Image file", "Audio file", " Adobe Acrobat file"]


};

let correct = [16, "New Delhi", "Moscow", "Washington", "Paris", "JavaScript", "CascadingStyleSheets", "1960s", "Express.JS", "Text File"];

function changequestion() {
    let selectedValue;
    let sample = true;
    for (const rb of document.querySelectorAll('input[name="answers"]')) {
        if (rb.checked) {
            sample = false;
            selectedValue = rb.value;
            if (selectedValue == correct[count - 1]) {
                earned_marks += 1;
            }
            rb.checked = false;
            break;
        }
    }
    
    if (sample) {
        alert('You must select a option');
        return;
    }

    if (count <= Number(Object.keys(questions).length)) {
        document.getElementById("question-title").innerText = (count + 1) + " ) " + questions[count];
        let arr = answers[count];
        for (let index = 0; index < arr.length; index++) {
            document.querySelectorAll("label")[index].innerText = arr[index];
            document.querySelectorAll('input[name="answers"]')[index].setAttribute("value", arr[index]);
        }
        count++;
    } else {
        let result_page = "";
        let index = 1;
        correct.forEach(ans => {
            result_page += `<div id="result_option">${index}) ${ans}</div>`;
            index++;
        });
        document.body.innerHTML =
            `
        <div id="result">
            <p id="score">Score : ${earned_marks}/10 </p>
            <p id="ans">Answers</p>
            <div id="all_results">
            ${result_page}
            </div>
            <div><button id="refresh" onClick="window.location.reload();">Restart</button></div>
        </div>
        `
    }
}
document.getElementById("next").addEventListener("click", changequestion);