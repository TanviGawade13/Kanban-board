const board = {
    title: 'Kanban Board',
    lists: [
        {
            id: 'list-1',
            title: 'To Do',
            cards: [
                {
                    id: 'card-1',
                    title: 'Do something',
                    description: 'do something there'
                }
            ]
        },
        {
            id: 'list-2',
            title: 'In Progress',
            cards: []
        },
        {
            id: 'list-3',
            title: 'Done',
            cards: []
        }
    ]
};
function renderBoard() {
    const container = document.getElementById('lists-container');
    container.innerHTML = "";
    board.lists.forEach((list) => {
        const listColumn = document.createElement('div');
        listColumn.classList.add("list-column");
        listColumn.dataset.listId = list.id;
        const listHeader = document.createElement('div');
        listHeader.classList.add("list-header");
        const listTitle = document.createElement('span');
        listTitle.classList.add('list-title');
        listTitle.textContent = list.title;
        const cardCount = document.createElement('span');
        cardCount.classList.add("list-count");
        cardCount.textContent = list.cards.length;
        const listDelBtn = document.createElement('button');
        listDelBtn.classList.add("list-delete-btn");
        listDelBtn.textContent = "Delete";
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("cards-container")
        cardContainer.dataset.listId = list.id;
        const addCardBtn = document.createElement('button');
        addCardBtn.textContent = "+ Add a Card";
        addCardBtn.classList.add("btn-ghost");



        listColumn.appendChild(listHeader);
        listColumn.appendChild(cardContainer);
        listColumn.appendChild(addCardBtn);
        listHeader.appendChild(listTitle);
        listHeader.appendChild(cardCount);
        listHeader.appendChild(listDelBtn);
        container.appendChild(listColumn);
    });
}

renderBoard();
