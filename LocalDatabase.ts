class TodoList {
    todos: object;
    next_todo_id: number;

    constructor() {
        this.todos = {};
        this.next_todo_id = 1;
    }

    addTodo(title1:string,status1:string) {
        var obj = {
            title : title1,
            status : status1
        };
        this.todos[this.next_todo_id] = obj;
        this.next_todo_id++;
    };

    completeTodo(id:number,title1:string) {
        var obj = {
            title : title1,
            status : "COMPLETE"
        };
        this.todos[id] = obj;
    }

    activeTodo(id:number,title1:string) {
        var obj = {
            title : title1,
            status : "ACTIVE"
        };
        this.todos[id] = obj;
    }

    editTodo(id:number,title1:string) {
        var obj = {
            title : title1,
            status : "EDIT"
        };
        this.todos[id] = obj;
    }

    editSubmitTodo(id:number,title1:string) {
        var obj = {
            title : title1,
            status : "ACTIVE"
        };
        this.todos[id] = obj;
    }

    deleteTodo(id:number) {
        delete this.todos[id];
    }

    display() {
        return this.todos;
    }
}

var list = new TodoList();

function addNewTodo(title:string,status:string) {
    list.addTodo(title,status);
}

function displayAll() {
    return list.display();
}

function deleteTodoId(id:number) {
    list.deleteTodo(id);
}

function completeTodoId(id:number,title:string){
    list.completeTodo(id,title);
}

function activeTodoId(id:number,title:string){
    list.activeTodo(id,title);
}

function editTodoId(id:number,title:string){
    list.editTodo(id,title);
}

function editSubmitTodoId(id:number,title:string){
    list.editSubmitTodo(id,title);
}
