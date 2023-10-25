const container = document.querySelector('#container');
const sq = document.createElement('div');
container.appendChild(sq);
const btn = document.querySelector('#btn');

function defaultBoard() {
    for (let i = 0; i < 256; i++) {
        let clone = sq.cloneNode(true);
        container.appendChild(clone);
        clone.style.width = ((500 / 16) - 2) + "px";
        clone.style.height = ((500 / 16) - 2) + "px";
        clone.style.border = '1px solid';
    };

    const clones = container.querySelectorAll('div');
    clones.forEach(clone => {
        clone.addEventListener('mouseover', () => {
        clone.style.backgroundColor = 'black'; });
    });

}

btn.addEventListener('click', () => {  
    const removeDiv = container.querySelectorAll('div');
    removeDiv.forEach(div => div.remove());
    userInput = parseInt(prompt("Enter a number under 100: "));
    if (userInput <= 0 || userInput > 100) {
       while (userInput <= 0 || userInput > 100) {
        alert("Invalid Number");
        userInput = parseInt(prompt("Enter a number under 100: "));
       };
    };
    alert(userInput);
    for (let i = 0; i < userInput * userInput; i++) {
        let clone = sq.cloneNode(true);
        container.appendChild(clone);
    };

    const clones = container.querySelectorAll('div');
    clones.forEach(clone => {
        clone.addEventListener('mouseover', () => {
        clone.style.backgroundColor = 'black'; });
        clone.style.width = ((500 / userInput) - 2) + "px";
        clone.style.height = ((500 / userInput) - 2) + "px";
        clone.style.border = '1px solid';
        clone.style.display = 'flex';
        clone.style.flexDirection = 'row';
    });
});


defaultBoard();











