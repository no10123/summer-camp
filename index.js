const c = document.getElementById("counter")
const copy = document.getElementById("copy")

C = 0
function counter() {
    C ++
    c.innerHTML = `counter: ${C}`
}

async function copyColor() {
    await navigator.clipboard.writeText("#a6e3a1")
    copy.innerText = "copied!"
}

let Angle = 0;
function spin() {
    Angle += 360;
            
    document.getElementById('Img').style.transform = `rotate(${Angle}deg)`;
}