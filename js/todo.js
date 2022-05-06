const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function DeleteToDo(event){
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
// 받아오는 타입이 달라서 처음에는 작업이 안된것! 타입을 알고 싶을 때에는 typeof 를 쓸 것! 
//ParseInt 이건 문자열을 숫자로 바꿔주는 함수!
saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", DeleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);
// } 
// 하단 줄과 동일한 함수 기능 입니다. 우측이 화살표 함수입니당!! (item) => console.log("this is the turn of", item)

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
// const arr = [1, 2, 3, 4]
// const newArr = arr.filter(item => item > 2)


// #7.8 Deleting To Dos part Three (05:32)
