let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let feedback = document.querySelector(".feedback");
let myinput = document.querySelector("input");

function addItem()
    {if (myinput.value)
        {let li = document.createElement("li");
        li.textContent = myinput.value;
        ul.appendChild(li);
        
        
        myinput.value = null;   
        myinput.focus();
        return feedback.textContent = "You created an item";
    }
    
    else (myinput.value === null)
        {return feedback.textContent = "Please enter an item";}
    
    }

btn.addEventListener("click", addItem);
