
// A function to accept in a select tag, a beginning integer, and an ending integer
// The function will append all integers between the beginning and ending value 
// to the select tag's options list
function buildNumberOptions(selectElement, begin, end)
{
    // Get a hook to the select element
    var select = document.getElementById(selectElement);
    
    // Makes sure that the end element passed in will be considered
    if(begin < end) end++; 
    else end--;
    
    // Build all the options and append them to the given select element
    while(begin !== end)
    {
        var element = document.createElement("option");
        element.textContent = begin;
        element.value = begin;
        select.appendChild(element);
        
        if(begin < end) begin++;
        else begin--;
    }
}

// A function to add an input to a given div
// Once the specified number of inputs have been added to a given line, 
// a line break will be added
function addTextInput(divID, maxNumOfInputsOnLine)
{
    var div = document.getElementById(divID);
    var inputs = Array.from(div.getElementsByTagName("input"));
    
    if(inputs.length % maxNumOfInputsOnLine === 0) 
    {
        // Make sure there aren't any break elements before inserting a new one
        while(div.lastChild.tagName === "BR")
        {
            div.removeChild(div.lastChild);
        }
        
        div.appendChild(document.createElement("br"));
    }
    
    var input = document.createElement("input");
    div.appendChild(input);  
}

// A function to remove inputs from a given div
function removeTextInput(divID)
{
    var div = document.getElementById(divID);
    var divInputs = Array.from(div.getElementsByTagName("input"));
    
    if(divInputs.length > 1)
    {
        // If the last element is a break line, consume that element first
        while(div.lastChild.tagName === "BR")
        {
            div.removeChild(div.lastChild);
        }
        
        div.removeChild(div.lastChild);
    }
}

function unCheckBox(checkID)
{
    var check = document.getElementById(checkID);
    
    check.checked = false;
    check.required = false;
}

function toggle(divID)
{
    var div = document.getElementById(divID);
    
    if(divID.includes("AddAndRemove"))
    {
        if(div.style.display === "inline")
        {
            div.style.display = "none";
        }
        else
        {
            div.style = "display:inline";
        }
    }
    else
    {
        div.hidden = !div.hidden;
    }
}

function checkIfOther(selectID, divID)
{
    var select = document.getElementById(selectID);
    var div = document.getElementById(divID);
    
    if(select.options[select.selectedIndex].value === "Other")
    {
        div.hidden = false;
    }
    else
    {
        div.hidden = true;
    }
}

function addDiseaseInput(divID)
{
    var div = document.getElementById(divID);
    var newDiseaseDiv = document.createElement("DIV");
    var newTextArea = document.createElement("TEXTAREA");
    
    newTextArea.rows = "10";
    newTextArea.cols = "100";
    newTextArea.placeholder = "Description of your current status"
    
    newDiseaseDiv.innerHTML = "Name of Disease: ";
    newDiseaseDiv.appendChild(document.createElement("INPUT"));
    newDiseaseDiv.innerHTML += "<br/>";
    newDiseaseDiv.appendChild(newTextArea);
    
    div.appendChild(newDiseaseDiv);
}

function removeDiseaseInput(divID)
{
    var div = document.getElementById(divID);
    
    if(div.children.length > 1)
    {
        div.removeChild(div.lastChild);
    }
}

function addMedInput(divID)
{
    var div = document.getElementById(divID);
    var newMedInput = document.createElement("DIV");
    var a = document.createElement("A");
    var directionsEntry = document.createElement("TEXTAREA");
    var randomID = Math.random();
    
    a.href = "javascript:removeMedInput('" + randomID + "');";
    a.style = "float:right;";
    a.innerHTML = "Remove";
    
    directionsEntry.placeholder = "Please enter directions as clearly as possible";
    directionsEntry.rows = "10";
    directionsEntry.cols = "100";
    
    newMedInput.id = randomID;
    newMedInput.className = "solid_border";
    newMedInput.innerHTML += "Medication";
    newMedInput.appendChild(a)
    newMedInput.innerHTML += "Name: ";
    newMedInput.appendChild(document.createElement("INPUT"));
    newMedInput.innerHTML += " Dose: ";
    newMedInput.appendChild(document.createElement("INPUT"));
    newMedInput.innerHTML += "<br/>Directions:<br/>";
    newMedInput.appendChild(directionsEntry);
    
    div.appendChild(newMedInput);
}

function removeMedInput(divIDToBeDeleted)
{
    var element = document.getElementById(divIDToBeDeleted);
    element.parentNode.removeChild(element);
}

function addSurgeryInputs(divID)
{
    var div = document.getElementById(divID);
    var newSurgeryInput = document.createElement("INPUT");
    var newMonthInput = document.createElement("SELECT");
    var newDayInput = document.createElement("SELECT");
    var newYearInput = document.createElement("SELECT");
    
    var monthOption = document.createElement("OPTION");
    monthOption.innerHTML = "--Month--";
    newMonthInput.appendChild(monthOption);
    
    var dayOption = document.createElement("OPTION");
    dayOption.innerHTML = "--Day--";
    newDayInput.appendChild(dayOption);
    
    var yearOption = document.createElement("OPTION");
    yearOption.innerHTML = "--Year--"
    newYearInput.appendChild(yearOption);
   
    div.innerHTML += "<br/>Surgery: ";
    div.appendChild(newSurgeryInput);
    div.innerHTML += "Date: ";
    div.appendChild(newMonthInput);
    div.appendChild(newDayInput);
    div.appendChild(newYearInput);
}

function removeSurgeryInputs(divID)
{
    var div = document.getElementById(divID);
    
    // Remove the last 7 elements corresponding with the last surgery entry fields
    for(var i = 0; i < 7; i++)
    {
        div.removeChild(div.lastChild);
    }
}

function UserOrAdmin()
{
    console.log(document.getElementById('username').value);
    
    if(document.getElementById('username').value === "admin")
    {
        document.getElementById("loginForm").action = "admindash.html";
    }
    else if(document.getElementById('username').value === "superadmin")
    {
        document.getElementById("loginForm").action = "superadmindash.html";
    }
    else
    {
        document.getElementById("loginForm").action = "patienthub.html";
    }
    
    return true;
}
