window.onload = displayTodos();

function submitForm() {
    var title = document.getElementById('title').value;
    addNewTodo(title,"ACTIVE");
    displayTodos();
};

function displayTodos() {
    var items = document.getElementById('items');
    items.innerText = '';
    var todos = displayAll();
    for(var todo in todos) {
        items.appendChild(createTodoElement(todo, todos[todo]));
        if (todos[todo].status == "EDIT") {
            editTodoInput(todo, todos[todo]);
        }
    }
}

function createTodoElement(id,todo_object) {                // create a new todo here
    var todo_element = document.createElement("div");
    todo_element.setAttribute("id",id);
    todo_element.setAttribute("class","list-group-item");

    var input_box = document.createElement("input");
    input_box.type = "text";
    input_box.defaultValue = todo_object.title;
    input_box.id = id+"_ID";
    input_box.readOnly = true;

    if (todo_object.status == "ACTIVE") {
        input_box.className = "form-control"
        todo_element.appendChild(input_box);
        var complete_button = document.createElement("button");
        complete_button.innerText = "Complete";
        complete_button.setAttribute("onclick", "completeTodoId(" + id + ',"' + todo_object.title + '");displayTodos()');
        complete_button.className = "btn btn-info";
        todo_element.appendChild(complete_button);

        var edit_button = document.createElement("button");
        edit_button.innerText = "Edit";
        edit_button.setAttribute("onclick", "editTodoId(" + id + ',"' + todo_object.title + '");displayTodos()');
        edit_button.className = "btn btn-secondary";
        todo_element.appendChild(edit_button);

        var delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.className = "btn btn-danger";
        delete_button.setAttribute("onclick", "deleteTodoId(" + id + ");displayTodos()");
        todo_element.appendChild(delete_button);
    } else
    if (todo_object.status == "COMPLETE") {
        input_box.className = "form-control COMPLETE"
        todo_element.appendChild(input_box);

        var complete_button = document.createElement("button");
        complete_button.innerText = "Active";
        complete_button.setAttribute("onclick", "activeTodoId(" + id + ',"' + todo_object.title + '");displayTodos()');
        complete_button.className = "btn btn-success";
        todo_element.appendChild(complete_button);

        var delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.className = "btn btn-danger";
        delete_button.setAttribute("onclick", "deleteTodoId(" + id + ");displayTodos()");
        todo_element.appendChild(delete_button);
    }
    else
    {
        input_box.className = "form-control"
        todo_element.appendChild(input_box);
    }
    return todo_element;
}

function editTodoInput(id,todo_object){
    var todo_element = document.getElementById(id);
    var edit_value = document.getElementById(id+"_ID");
    submit_button = document.createElement("button");
    submit_button.innerText = "Submit";
    edit_value.readOnly = false;
    submit_button.setAttribute("onclick", "editValueSubmit("+id+");displayTodos()");
    submit_button.className = "btn btn-success";
    todo_element.appendChild(submit_button);
}

function editValueSubmit(id){
    var edit_value = document.getElementById(id+"_ID");
    editSubmitTodoId(id ,edit_value.value );
}