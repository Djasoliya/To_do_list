var inbox = document.getElementById('input-box');
var listContainer = document.getElementById('list-container');
function addtask(){
    if(inbox.value === ''){
        alert("Enter input text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inbox.value = '';
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();





// let addBtn = document.getElementsById('addbtn');
// addBtn.addEventListener("click", ()=>{
//     let todoText = document.getElementById('todoText').value;
//     alert(todoText);        
//     document.getElementById('todos').innerHTML=todoText;
// });

// function addtodo(e){
//     // e.preventDefault(); 
//     let todoText = document.getElementById('todoText').value;
//     alert(todoText);
//     document.getElementById('todos').innerHTML= todoText;
// }

// document.querySelector('#addbtn').onclick = function(){
//     if(document.querySelector('#todoText').value.lenght == 0){
//         alert("Kindly enter a task...");
//     }
//     else{
//         document.querySelector('#todos').innerHTML += ` <div class="task">
//                                                             <span>
//                                                                 ${document.querySelector('#todoText').value}
//                                                             </span>
//                                                             <button class="delete">
//                                                                 <i class="far fa-trash-alt"></i>
//                                                             </button>
//                                                         </div>`;
//         var currenr_task = document.querySelectorAll(".delete");
//         for (let i = 0; i < currenr_task.length; i++) {
//             currenr_task[i].onclick = function(){
//                 this.parentNode.remove();
//             };
            
//         }
//     }
// }