var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = {};
        this.next_todo_id = 1;
    }
    TodoList.prototype.addTodo = function (title1, status1) {
        var obj = {
            title: title1,
            status: status1
        };
        this.todos[this.next_todo_id] = obj;
        this.next_todo_id++;
    };
    ;
    TodoList.prototype.completeTodo = function (id, title1) {
        var obj = {
            title: title1,
            status: "COMPLETE"
        };
        this.todos[id] = obj;
    };
    TodoList.prototype.activeTodo = function (id, title1) {
        var obj = {
            title: title1,
            status: "ACTIVE"
        };
        this.todos[id] = obj;
    };
    TodoList.prototype.editTodo = function (id, title1) {
        var obj = {
            title: title1,
            status: "EDIT"
        };
        this.todos[id] = obj;
    };
    TodoList.prototype.editSubmitTodo = function (id, title1) {
        var obj = {
            title: title1,
            status: "ACTIVE"
        };
        this.todos[id] = obj;
    };
    TodoList.prototype.deleteTodo = function (id) {
        delete this.todos[id];
    };
    TodoList.prototype.display = function () {
        return this.todos;
    };
    return TodoList;
}());
var list = new TodoList();
function addNewTodo(title, status) {
    list.addTodo(title, status);
}
function displayAll() {
    return list.display();
}
function deleteTodoId(id) {
    list.deleteTodo(id);
}
function completeTodoId(id, title) {
    list.completeTodo(id, title);
}
function activeTodoId(id, title) {
    list.activeTodo(id, title);
}
function editTodoId(id, title) {
    list.editTodo(id, title);
}
function editSubmitTodoId(id, title) {
    list.editSubmitTodo(id, title);
}
