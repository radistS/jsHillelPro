const listElement = document.querySelector('.list');

const secondListItem = listElement.querySelectorAll('li')[1];
if (secondListItem) {
    secondListItem.textContent = 'new text';
}

listElement.style.color = 'red';
