import {v4 as uuidV4} from "uuid";

type Task = {
  id: string, 
  title: string, 
  completed: boolean, 
  createdAt: Date
}

// generics : <>
// || as
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

// create task array
const tasks: Task[] = [];

form?.addEventListener('submit', e => {
  e.preventDefault();

  //input?.value => ? : null 일 수도 있기 때문에 null 이 아닐때만
  if(input?.value == "" || input?.value == null) return
  const newTask: Task = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask);
  saveTasks();
  addListItem(newTask);
  input.value = "";
})

function addListItem(task: Task){
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  })
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

// saving at the local storage
function saveTasks(){
  localStorage.saveItem('TASKS', JSON.stringify(tasks));
}