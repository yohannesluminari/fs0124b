export default class TodoList{

    constructor(selettore){
        this.todoArea = document.querySelector(selettore)
        this.testo = null
        this.salvaBtn = null
        this.target = null

        this.initHTML();
    }

    initHTML(){

        this.testo = this.creaElementoConClasse('input','form-control');
        this.salvaBtn = this.creaElementoConClasse('button','btn','btn-success');
        this.salvaBtn.innerText = 'Salva';

        this.salvaBtn.addEventListener('click',() => {

            let todo =  this.creaElementoConClasse('div', 'alert','alert-warning');
            todo.innerText = this.testo.value

            this.target.append(todo);

            this.testo.value = '';

        })

        this.target = document.createElement('div')

        this.todoArea.append(this.testo, this.salvaBtn, this.target)
    }

    creaElementoConClasse(tagName, ...classi){
        let element = document.createElement(tagName)
        element.classList.add(...classi)
        return element;
    }
}