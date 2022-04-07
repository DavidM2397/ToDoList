//Assign button to a constant
const btnAdd = document.querySelector('button');
const audio = new Audio("ding.mp3");

//Function for adding items to To-Do list
function addItem(){
	
	//create necessary elements whenever item is added to list
 	var inputVal = document.getElementById("itemInput").value;
	const check = document.createElement("input");
	const lbl = document.createElement("label");
    const btn2 = document.createElement("input");
    
    //button attributes
    btn2.type = "button";
    btn2.className = "btnDelete";
    btn2.value = "Delete";

	//set other element attributes
	check.type = "checkbox";
	check.id = "chkbox";
	
	//connect label to checkbox-
	lbl.setAttribute("for","chkbox");
	lbl.innerHTML = inputVal;
	//append the checkbox and button to the label

	lbl.appendChild(check);
	lbl.appendChild(btn2);
	//Add event handler for each item whenever a checkbox is clicked 
	check.addEventListener('change',function(e){
		if (check.checked){
			//If checked put a line through the text
			lbl.style.textDecoration = 'line-through';
			document.body.appendChild(lbl);
		  	audio.play();
			
		}
		else{
			//Reset style to normal if unchecked
			lbl.style.textDecoration = 'none';
		}
	});
	

	//Event handler for delete button
	btn2.addEventListener('click',() => lbl.remove())
	
	
	//append the label to the document body
	document.body.appendChild(lbl);

}


btnAdd.onclick = addItem;