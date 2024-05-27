document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            pendingTasks.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const actions = document.createElement('div');
        actions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => completeTask(li));
        actions.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(li));
        actions.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(li));
        actions.appendChild(deleteBtn);

        li.appendChild(actions);

        return li;
    }

    function completeTask(taskItem) {
        taskItem.querySelector('.complete-btn').remove();
        completedTasks.appendChild(taskItem);
    }

    function editTask(taskItem) {
        const taskText = taskItem.querySelector('span').textContent;
        taskInput.value = taskText;
        taskItem.remove();
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
