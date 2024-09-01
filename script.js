// Function to add a new Work Experience item
function addNewWEField() {
    // Get the value entered in the Work Experience textarea
    const weTextArea = document.querySelector(".weField");
    const weValue = weTextArea.value.trim(); // Trim to remove leading/trailing whitespace
    // Check if there is a valid input
    if (weValue) {
        // Create a new list item to display the Work Experience
        const weList = document.getElementById("weList");
        const newItem = document.createElement("li");
        newItem.textContent = weValue;
        // Append the new item to the Work Experience List
        weList.appendChild(newItem);

        // Clear the textarea after adding the item
        weTextArea.value = "";

        // Show the Work Experience List after adding the first item
        if (weList.children.length === 1) {
            weList.parentElement.style.display = "block"; // Show the parent container of the list
        }
    } else {
        alert("Please enter a valid Work Experience before adding.");
    }
}


/// Function to add a new Academic Qualification item
function addNewAQField() {
    // Get the value entered in the Academic Qualification textarea
    const aqTextArea = document.querySelector(".aqField");
    const aqValue = aqTextArea.value.trim(); // Trim to remove leading/trailing whitespace

    // Check if there is a valid input
    if (aqValue) {
        // Create a new list item to display the Academic Qualification
        const aqList = document.getElementById("aqList");
        const newItem = document.createElement("li");
        newItem.textContent = aqValue;

        // Append the new item to the Academic Qualification List
        aqList.appendChild(newItem);

        // Clear the textarea after adding the item
        aqTextArea.value = "";

        // Show the Academic Qualification List after adding the first item
        if (aqList.children.length === 1) {
            aqList.parentElement.style.display = "block"; // Show the parent container of the list
        }
    } else {
        alert("Please enter a valid Academic Qualification before adding.");
    }
}


function generateResume() {
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("phoneField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("skillT").innerHTML = document.getElementById("skillField").value;

    let wes = document.getElementsByClassName("weField");
    let str = '';
    for (let e of wes) {
        str += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("Resume-form").style.display = "none";
    document.getElementById("Resume-template").style.display = "block";
}

function printResume() {
    window.print();
}
