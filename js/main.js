
// Home 텍스트 타이핑 효과
const content = "Hello, I'm JeongBin";
const text = document.querySelector(".title h1");
let textIdx = 0;


function typing(){
    let txt = content[textIdx++];
    
    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)
