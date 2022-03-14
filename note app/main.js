
const addNotes = document.querySelector ("#add_notes");
const cssRadio = document.querySelector("#css_radio")
const jsRadio = document.querySelector ("#js_radio");
const addBtn = document.querySelector("#add_btn");
const form = document.querySelector ("#notes_form");
const listCS = document.querySelector("#css_ul");
const listJS = document.querySelector("#js_ul");
const jsArray = JSON.parse(localStorage.getItem("JS")) || [];
const cssArray = JSON.parse(localStorage.getItem("CSS")) || [];
let cssNote = "";
let jsNote = "";


//***function to check if radio has been selected***//

addBtn.addEventListener ("click", checkInputs)
    
         //** check inputs and assign values  ***//

    function checkInputs() {
        if (cssRadio.checked==true) {
             cssNote = addNotes.value;
            }
        else if (jsRadio.checked== true) {
              jsNote = addNotes.value;
            } 
         else if (cssRadio.checked === false && jsRadio.checked === false) {
                alert("Please choose CSS or JS");
                return;
            }
        if (addNotes.value=="") {
                alert ("Please add your note.")
                form.reset();
               return;
            }
        }

             //***create the lists **//

    addBtn.addEventListener ("click", createLists)
    function createLists(e){
    e.preventDefault();
     if (cssRadio.checked==true){
        const newCssDiv = document.createElement("div")
        newCssDiv.className = "cssDiv"
        const newCssTa = document.createElement ("textArea");
        newCssTa.innerHTML = cssNote;
        newCssTa.className = "cssNote";
        newCssTa.setAttribute("readonly", "true");
        listCS.appendChild(newCssDiv);
        newCssDiv.appendChild(newCssTa)
        addBtns (newCssDiv);

        cssArray.push(cssNote);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        form.reset();
        console.log(cssArray);}
         

        else if (jsRadio.checked== true){
            const newJsDiv = document.createElement("div")
            newJsDiv.className = "jsDiv"
            const newJsTa = document.createElement ("textArea");
            newJsTa.innerHTML = jsNote;
            newJsTa.className = "jsNote";
            newJsTa.setAttribute("readonly", "true");
            listJS.appendChild(newJsDiv);
            newJsDiv.appendChild(newJsTa)
            addBtns (newJsDiv);
            jsArray.push(jsNote);
            localStorage.setItem("JS",JSON.stringify(jsArray));
            form.reset();
            console.log(jsArray);}        
     }

     function addBtns(div){
        const removeBtn= document.createElement("button");
        removeBtn.type = "submit";
        removeBtn.innerText = "X";
        removeBtn.className = "del_btn";
        div.appendChild(removeBtn);
        const editBtn = document.createElement("button")
        editBtn.type = "submit";
        editBtn.innerText = "Edit";
        editBtn.className = "edit_btn";
        div.appendChild(editBtn);
        const doneBtn = document.createElement("button")
        doneBtn.type = "submit";
        doneBtn.innerText = "Done";
        doneBtn.className = "done_btn";
        div.appendChild(doneBtn);
     }
        //*** populate CSS list on page load ***/

    function populateNoteLists() {
            for (let note of cssArray){
        newCssDiv = document.createElement("div")
        newCssDiv.className = "cssDiv"
        newCssTa = document.createElement("textArea");
        newCssTa.innerHTML = note;
        newCssTa.className= "cssNote";
        newCssTa.setAttribute("readonly", "true");
        listCS.appendChild(newCssDiv);
        newCssDiv.appendChild(newCssTa)
        addBtns(newCssDiv);
     }    
            for(let note of jsArray) {
        newJsDiv = document.createElement("div")
        newJsDiv.className = "jsDiv"
        newJsTa = document.createElement("textArea");
        newJsTa.innerHTML = note;
        newJsTa.className= "jsNote";
        newJsTa.setAttribute("readonly", "true");
        listJS.appendChild(newJsDiv);
        newJsDiv.appendChild(newJsTa)
        addBtns(newJsDiv);
        }
            
   }

         //***delete note***//

    listCS.addEventListener("click", function(e) {
        let target = e.target;
        const parentID = target.parentNode.childNodes[0].textContent
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        for (notes of cssArray){
        if (notes===parentID){
        const id = (cssArray.indexOf(notes))
        cssArray.splice(id,1);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        console.log (id)
        console.log(parentID)
     // console.log(notes);
                }
            }
        }})

    listJS.addEventListener("click", function(e) {
        let target = e.target;
        const parentID = target.parentNode.childNodes[0].textContent
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        console.log(parentID);

        for (notes of jsArray){
        if (notes===parentID){
        const id = (jsArray.indexOf(notes))
        jsArray.splice(id,1);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        console.log (id);
                    // console.log(notes);
                }
            }
        }})

     //**********EDIT AND DONE*****************//

let idEdit = ""
listCS.addEventListener("click", function(e) {
    let target = e.target;
if (target.classList.contains("edit_btn")) {
    target.parentNode.childNodes[0].removeAttribute("readonly");
    const textInTa = target.parentNode.childNodes[0].textContent;
    console.log(textInTa);
        for (notes of cssArray){
    if (notes===textInTa){
    idEdit = (cssArray.indexOf(notes))}}}})


    listCS.addEventListener("click", function(e) {
    if (e.target.classList.contains("done_btn")) {
     const newText = e.target.parentNode.childNodes[0].value;
     console.log(newText);
    cssArray.splice(idEdit,1,newText);
    localStorage.setItem("CSS",JSON.stringify(cssArray));

}})

// let idEdit = ""
listJS.addEventListener("click", function(e) {
    let target = e.target;
if (target.classList.contains("edit_btn")) {
    target.parentNode.childNodes[0].removeAttribute("readonly");
    const textInTa = target.parentNode.childNodes[0].textContent;
    console.log(textInTa);
        for (notes of jsArray){
    if (notes===textInTa){
    idEdit = (jsArray.indexOf(notes))}}}})


    listJS.addEventListener("click", function(e) {
    if (e.target.classList.contains("done_btn")) {
     const newText = e.target.parentNode.childNodes[0].value;
     console.log(newText);
    jsArray.splice(idEdit,1,newText);
    localStorage.setItem("JS",JSON.stringify(jsArray));

}})

                
    
    
    

