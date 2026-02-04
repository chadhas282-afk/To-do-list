document.getElementById("addTaskButton").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = taskInput.value;
        li.appendChild(span);
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        
        removeBtn.onclick = function() {
            li.style.opacity = "0";
            setTimeout(function() {
                li.remove();
            }, 200);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
});