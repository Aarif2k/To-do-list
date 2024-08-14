document.addEventListener("DOMContentLoaded", () => {
    const createNoteBtn = document.getElementById('createNoteBtn');
    const noteModal = document.getElementById('noteModal');
    const closeBtn = document.querySelector('.closeBtn');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    const noteText = document.getElementById('noteText');
    const notesContainer = document.getElementById('notesContainer');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let isEditing = false;
    let currentNoteIndex = null;

    function displayNotes() {
        notesContainer.innerHTML = '';
        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <p>${note}</p>
                <div class="note-buttons">
                    <button onclick="editNote(${index})">Edit</button>
                    <button onclick="deleteNote(${index})">Delete</button>
                </div>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    createNoteBtn.addEventListener('click', () => {
        noteModal.style.display = 'block';
        noteText.value = '';
        isEditing = false;
        currentNoteIndex = null;
        document.getElementById('modalTitle').textContent = 'Create Note';
    });

    closeBtn.addEventListener('click', () => {
        noteModal.style.display = 'none';
    });

    saveNoteBtn.addEventListener('click', () => {
        const noteValue = noteText.value.trim();
        if (noteValue) {
            if (isEditing) {
                notes[currentNoteIndex] = noteValue;
            } else {
                notes.push(noteValue);
            }
            localStorage.setItem('notes', JSON.stringify(notes));
            displayNotes();
            noteModal.style.display = 'none';
        }
    });

    window.editNote = function (index) {
        noteModal.style.display = 'block';
        noteText.value = notes[index];
        isEditing = true;
        currentNoteIndex = index;
        document.getElementById('modalTitle').textContent = 'Edit Note';
    }

    window.deleteNote = function (index) {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }

    displayNotes();
});
