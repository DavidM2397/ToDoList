//Assign starting variables to a constant
const btnAdd = document.getElementById('btnAdd');
const btnNew = document.getElementById('btnNew');
const audio = new Audio("ding.mp3");
//create article element to append to
const listArticle = document.createElement("ARTICLE"); 	

//Function for adding items to To-Do list
function addItem(){
	
	//get textbox input value and save it to a variable
 	var inputVal = document.getElementById("itemInput").value;
 	
 	//If empty input is added exit out of function
 	if (inputVal==""){
		return;
	}
	
 	//create necessary elements whenever item is added to list
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
			listArticle.appendChild(lbl);
			//cloning audio to allow overlapping audio plays
			const audioClone = audio.cloneNode()
		  	audioClone.play();
		}
		else{
			//Reset style to normal if unchecked
			lbl.style.textDecoration = 'none';
		}
	});

	//Event handler for delete button
	btn2.addEventListener('click',() => lbl.remove())
	
	//append the label to the document body
	listArticle.appendChild(lbl);
	document.body.appendChild(listArticle);
}

//Function for removing all items from list
function newList(){
	//While a child exists in the article, keep removing them until it's empty.
	while(listArticle.firstChild){
		listArticle.removeChild(listArticle.firstChild)
	}
}
//button onclick functions
btnAdd.onclick = addItem;
btnNew.onclick = newList;