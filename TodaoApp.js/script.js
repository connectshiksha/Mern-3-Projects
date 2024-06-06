
const addButton = document.getElementById("btn");

addButton.addEventListener('click', handleClick)
const tableBody = document.getElementById("t-sec")

let tasks = [];

function handleClick() {

    const inputtask = document.getElementById("inputtask").value
    if (!inputtask) {
        alert("Please fill the task field")
    } else {
        tasks.push(inputtask)
        document.getElementById("inputtask").value = ""
        contentRendor()

    }
}


function contentRendor() {
    tableBody.innerHTML = "";

    tasks.map((task, index) => {
        const tableRow = document.createElement("tr");

        const tableSno = document.createElement("td")
        const tableTask = document.createElement("td")
        let count = index + 1
        tableSno.innerHTML = count
        tableTask.innerHTML = task
        tableRow.appendChild(tableSno);
        tableRow.appendChild(tableTask);

        // delete btn
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"

        deleteButton.onclick = () => deleteFunc(index);
        tableRow.appendChild(deleteButton);
        // edit btn
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editTaskFunc(index);

        tableRow.appendChild(editBtn);

        tableBody.appendChild(tableRow);
    })
}

function deleteFunc(index) {
    console.log("delete is click");
    tasks.splice(index, 1);
    contentRendor()
}

function editTaskFunc(index) {
    const newTask = prompt("Edit Your Task", tasks[index])
    if (newTask) {
        tasks[index] = newTask;
        contentRendor();
    }
}