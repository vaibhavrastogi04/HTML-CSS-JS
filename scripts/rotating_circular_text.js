const str = "SAMPLE PRICEs";
const text = document.getElementById("rotate_text");
window.onload = function(){
    for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i] 
        text.appendChild(span);
        console.log(str[i])
        span.style.transform = `rotate(${11*i}deg)`;
    }
}