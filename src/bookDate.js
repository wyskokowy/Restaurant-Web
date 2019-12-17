const input = document.querySelector('#input-date');

const today = new Date();

if(input) {
    input.value = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
}