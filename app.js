let input =  document.getElementById("textInput");
console.log(input);


input.addEventListener("input", ()=>{
    let inputValue = input.value;
// character counter
    let characterCount = inputValue.length;
    console.log(characterCount);
    let characterCountElement = document.getElementById("charCount");
    characterCountElement.textContent = characterCount;
    // line counter
    let lineCount = document.getElementById("lineCount");
    let lines = inputValue.split("\n");
    if(inputValue.length === 0){
    lineCount.textContent = 0;
} else {
    lineCount.textContent = lines.length;
}

})


//clear text
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", ()=>{
    input.value = "";
    let characterCountElement = document.getElementById("charCount");
    characterCountElement.textContent = 0;
    let lineCount = document.getElementById("lineCount");
    lineCount.textContent = 0;
})