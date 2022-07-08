const message = document.querySelector('#message');

function addWorry (event) {
    event.preventDefault();
    let inputField = document.querySelector('#worryInput');
    let worry = document.createElement('li');
    let worryTitle = document.createElement('span');
    worryTitle.textContent = inputField.value;
    worryTitle.addEventListener('click', crossOffWorry);
    worry.appendChild(worryTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteWorry);
    worry.appendChild(deleteBtn);
    document.querySelector('#worryUl').appendChild(worry);
    inputField.value = "";
}
document.querySelector('form').addEventListener('submit', addWorry);

function deleteWorry(event) {
    event.target.parentNode.remove();
    message.textContent = event.target.previousSibling.textContent + " hath been deleted!";
    revealMessage();
}

function crossOffWorry(event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + ` hath been taken care of!`;
    } else message.textContent = event.target.textContent + ` hath been added back!`;
    revealMessage();
} 

function addHide(){
    message.classList.add('hide');
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(addHide, 1000);

}