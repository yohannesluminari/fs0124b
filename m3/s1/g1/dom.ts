let elementoDiv = document.getElementById('test');

if(elementoDiv){
    elementoDiv.innerHTML = '';
}

let elementoInput = <HTMLInputElement|null> document.getElementById('nome');
let elementoInput2 = document.getElementById('nome') as HTMLInputElement|null;

if(elementoInput)
elementoInput.value = ''


let div = document.createElement('input')