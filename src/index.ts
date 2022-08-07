import {v4 as uuidV4} from "uuid";

// generics : <>
// || as
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('#new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#lnew-task-title');

// add click event listeners
form?.addEventListener('submit', e => {
  e.preventDefault();

  //input?.value => ? : null 일 수도 있기 때문에 null 이 아닐때만
  if(input?.value === "" || input?.value === null) return
  // add task obj
  const newTask = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask);
})

function addListItem(task: {id: string, title: string, completed: boolean, createdAt: Date}){
  
}