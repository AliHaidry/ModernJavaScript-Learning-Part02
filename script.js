/** Define UI variables */
// # --> id (representation)
// . --> class (representation)
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/** Load all event listeners */
loadEventListeners();


/** creating all event listeners functions */
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit',addTask);
    // Remove task event
    taskList.addEventListener('click',removeTask);
    // Clear task event 
    clearBtn.addEventListener('click',clearTasks);
    // Filter tasks event 
    filter.addEventListener('keyup', filterTasks);
}

// Add task function
function addTask(e){
    if(taskInput.value === '')
    {
        alert('Please Add a Task');
    }

    // Create li element
    const li = document.createElement('li');
    
    // Add class
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li tu ul
    taskList.appendChild(li);

    // Clear Input
    taskInput.value='';

    e.preventDefault();
}

// Remove Task 
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are you sure you want to delete this task?'))
        {
           e.target.parentElement.parentNode.remove();
        }
    }
}

// Clear Task
function clearTasks(){
   // taskList.innerHTML = ''; // one-way to do it.
   
   // Faster way
   while(taskList.firstChild)
   {
    taskList.removeChild(taskList.firstChild);
   }

}

// Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1)
        {
            task.style.display ='block';
        }
        else
        {
            task.style.display = 'none';
        }
    });
}