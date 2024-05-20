document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    
    nameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addName();
            event.preventDefault(); // Prevent form submission
        }
    });
});

function addName() {
    const nameInput = document.getElementById('name-input');
    const nameList = document.getElementById('name-list');


    if (nameList.getElementsByTagName('tr').length < 10) {
    if (nameInput.value.trim() !== '') {
        const capitalizedInput = capitalizeWords(nameInput.value.trim());
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newCell.textContent = capitalizedInput;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            nameList.removeChild(newRow);
            updateCount();
        };

        newCell.appendChild(deleteButton);
        newRow.appendChild(newCell);
        nameList.appendChild(newRow);
        nameInput.value = '';
        nameInput.focus();
        updateCount();
    }
} else {
    alert('You can only add up to 10 names.');
}
}

function submitAll() {
    alert('Submitting all entries!');
}

function updateCount() {
    const nameList = document.getElementById('name-list');
    const entryCount = document.getElementById('entry-count');
    const count = nameList.getElementsByTagName('tr').length;
    entryCount.textContent = `${count}/10`;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}