document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const completionPercentage = document.getElementById("completionPercentage");
    const rewardsDisplay = document.getElementById("rewards");
    const mindMapBtn = document.getElementById("mindMapBtn");
    const toggleAccessibility = document.getElementById("toggleAccessibility")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let points = 0;

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
            taskDiv.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
                <button onclick="removeTask(${index})">Remove</button>
                <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            `;
            taskList.appendChild(taskDiv);
        });
        updateCompletionPercentage();
    }

    function updateCompletionPercentage() {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const percentage = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
        completionPercentage.innerText = `Completion: ${percentage}%`;
        updateRewards(completedTasks);
    }

    function updateRewards(completedTasks) {
        points = completedTasks * 10; // Example: 10 points for each completed task
        rewardsDisplay.innerText = `Points: ${points}`;
    }

    window.removeTask = function(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    window.toggleTask = function(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            taskInput.value = "";
            saveTasks();
            renderTasks();
        }
    });

    // Mind Map Button Functionality
    mindMapBtn.addEventListener("click", () => {
        createMindMap();
    });

    // Accessibility Toggle
    toggleAccessibility .addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    renderTasks();
});

    function notifyUser (task) {
    if (Notification.permission === "granted") {
        new Notification("Task Reminder", {
            body: `Don't forget to complete: ${task.name}`,
        });
    }
}

    // Request permission for notifications
    Notification.requestPermission().then(permission => {
    if (permission === "granted") {
        // Set up notifications for due tasks
    }
});

    // Modify task structure to include priority
    function addTaskWithPriority(taskName, priority) {
    tasks.push({ name: taskName, completed: false, priority: priority });
    saveTasks();
    renderTasks();
}

    // Example usage
    addTaskWithPriority("Buy groceries", "high");

    function filterTasks(filter) {
        const filteredTasks = tasks.filter(task => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true; // Show all tasks
        });
        renderFilteredTasks(filteredTasks);
}

    function renderFilteredTasks(filteredTasks) {
        taskList.innerHTML = "";
        filteredTasks.forEach((task, index) => {
        // Render each task as before
    });
}
    // Modify task structure to include due date
    function addTaskWithDueDate(taskName, dueDate) {
        tasks.push({ name: taskName, completed: false, dueDate: dueDate });
        saveTasks();
        renderTasks();
}

    // Example usage
    addTaskWithDueDate("Finish project", "2023-12-01");