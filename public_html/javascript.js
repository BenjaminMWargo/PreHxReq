/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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


