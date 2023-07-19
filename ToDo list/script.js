const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addButton = document.getElementById("addTodo");


addButton.addEventListener("click",()=>{

   const newToDoText = newToDoInput.value;

   if(newToDoText!== ""){
     const newToDoItem = document.createElement("li");
     newToDoItem.innerText = newToDoText;
     const deleteToDo = document.createElement("button");
     deleteToDo.innerText = "X";

     deleteToDo.classList.add("delete-todo-btn");
     deleteToDo.addEventListener("click",function(){
       newToDoItem.remove();
     });
      newToDoItem.appendChild(deleteToDo);
      todoList.append(newToDoItem);
      newToDoInput.value = "";
   }

})