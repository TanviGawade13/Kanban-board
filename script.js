const board = {
    'title': 'Kanban Board',
    'board_lists': [
        {
            'id': 156,
            'title': 'To do List',
            'cards':[
                {
                    'id':123,
                    'title': 'Do something',
                    'descp': 'do something there'
                }
            ]
        },
        
        {
            'id': 157,
            'title': 'In Progress',
            'cards':[]
        },
        
        {
            'id': 158,
            'title': 'Done',
            'cards':[]
        }
    ]
};
const list_container = document.querySelector('#lists-container');
console.log(list_container)
