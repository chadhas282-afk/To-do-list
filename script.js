document.getElementById("addTaskButton").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = taskInput.value;
        span.className = "task-text";
        var btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = function() {
            if (editBtn.textContent === "Edit") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = span.textContent;
                input.className = "edit-input";
                li.replaceChild(input, span);
                editBtn.textContent = "Save";
                editBtn.classList.add("save-mode");
            } else {
                var input = li.querySelector(".edit-input");
                if (input.value.trim() !== "") {
                    span.textContent = input.value;
                    li.replaceChild(span, input);
                    editBtn.textContent = "Edit";
                    editBtn.classList.remove("save-mode");
                }
            }
        };
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        
        removeBtn.onclick = function() {
            li.style.opacity = "0";
            li.style.transform = "translateX(80px)";
            setTimeout(function() {
                li.remove();
            }, 200);
        };
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(removeBtn);
        li.appendChild(span);
        li.appendChild(btnGroup);
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
});