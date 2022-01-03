const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    addNewNote();
});
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}
function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
            <div class="main hidden">
               
            </div>
            <textarea></textarea>
        </div>
    `;
   
//const notesEl = note.querySelector('.notes');
const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');
const main = note.querySelector('.main');
const textArea = note.querySelector("textArea");
textArea.value = text;
main.innerHTML = marked.parse(text);
editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})
deleteBtn.addEventListener('click', () => {
    note.remove();

})
textArea.addEventListener("input",  (e) => {
    const {value} = e.target;
    main.innerHTML = marked.parse(value);//to convert the string to <p> element with the string
    updateLS();

});
document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textArea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem('my notes', JSON.stringify(notes));
}
