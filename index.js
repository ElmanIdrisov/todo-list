const inputElement = document.querySelector('#input');
const addButtonComponent = document.querySelector('#addButton');
const todoListElement = document.querySelector('.todo-list');

addButtonComponent.addEventListener('click' ,() => {
    addTodoElement();
})

inputElement.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') addTodoElement()
})

function addTodoElement(){
    const randomId = Math.round(Math.random() * 1_000_000);
   
    const Element = document.createElement('div');
    Element.classList.add('todo-list-element');
    Element.setAttribute('id' , randomId )

    Element.innerHTML = `
    <input type="text" class="input-todo">
    <span>${inputElement.value}</span> 
    <button class="edit-todo">edit</button>
    <button class="remove-todo">remove</button>
    `;

    todoListElement.appendChild(Element);
    inputElement.value = '';
    addRemoveEvent();
    addEditEvent();
}

function addEditEvent(){
    const editTodoButtons = todoListElement.querySelectorAll('.edit-todo');
    editTodoButtons.forEach((element) => {
        element.addEventListener('click', () =>{
            const parntOfEditButton = element.parentElement;
            const inputEditTodoElement = parntOfEditButton.querySelector('input');
            const contentElement = parntOfEditButton.querySelector('span')
            
            if(parntOfEditButton.classList.contains('active')) {
            inputEditTodoElement.style.display = 'none';
            contentElement.style.display = 'inline-block';
            contentElement.innerText = inputEditTodoElement.value; 
            parntOfEditButton.classList.remove('active');
            return;
            }

            inputEditTodoElement.style.display = 'inline block';
            contentElement.style.display = 'none';
            inputEditTodoElement.value = contentElement.innerText;
            parntOfEditButton.classList.add('active');

        })
    })
}

function addRemoveEvent () {
    const removeTodoButtons = todoListElement.querySelectorAll('.remove-todo');

    removeTodoButtons.forEach((element) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        } );
    })
}
