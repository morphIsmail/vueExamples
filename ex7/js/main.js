Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

let app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: "Овощи" },
            { id: 1, text: "Сыр" },
            { id: 2, text: "Что там еще люди едят?" }
        ]
    }
})