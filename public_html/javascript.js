
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

function UserOrAdmin()
{
    console.log(document.getElementById('username').value);
    
    if(document.getElementById('username').value === "admin")
    {
        document.getElementById("loginForm").action = "admindash.html";
    }
    else
    {
        document.getElementById("loginForm").action = "patienthub.html";
    }
    
    return true;
}
