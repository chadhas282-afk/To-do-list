document.getElementById("addTaskButton").addEventListener("click", function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = taskInput.value;
        li.appendChild(span);
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.onclick = function () {
            taskInput.value = span.textContent;
            li.remove();
        };
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function () {
            li.style.opacity = "0";
            setTimeout(function () {
                li.remove();
            }, 200);
        };
        var buttonGroup = document.createElement("div");
        buttonGroup.className = "button-group";

        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(removeBtn);
        li.appendChild(buttonGroup);
        taskList.appendChild(li);

        taskInput.value = "";
    }
});