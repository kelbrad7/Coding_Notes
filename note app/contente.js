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
        const newCssDiv = document.createElement ("div");
        newCssDiv.className = "cssDiv";
        const newCssPar = document.createElement('p')
        newCssPar.innerHTML = cssNote;
        newCssPar.className = "cssNote";
        newCssPar.setAttribute("contentEditable", "false");
        listCS.appendChild(newCssDiv);
        newCssDiv.appendChild(newCssPar);
        addBtns (newCssDiv);
        cssArray.push(cssNote);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        form.reset();
        console.log(cssArray);}
         

        else if (jsRadio.checked== true){
        const newJsDiv = document.createElement ("div");
        newJsDiv.className = "jsDiv";
        const newJsPar = document.createElement('p')
        newJsPar.innerHTML = jsNote;
        newJsPar.className = "jsNote";
        newJsPar.setAttribute("contentEditable", "false");
        listJS.appendChild(newJsDiv);
        newJsDiv.appendChild(newJsPar);
        addBtns (newJsDiv);
        jsArray.push(jsNote);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        form.reset();
        console.log(jsArray);}        
     }

     function addBtns(div){
        const deleteBtn= document.createElement("button");
        deleteBtn.type = "submit";
        deleteBtn.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>'
        deleteBtn.className = "del_btn"
        deleteBtn.setAttribute("contentEditable", "false");
        div.appendChild(deleteBtn);
        deleteBtn.appendChild.trash
        const editBtn = document.createElement("button")
        editBtn.type = "submit";
        editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="m4.22 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="m33.82 8.32l-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83l3.28-3.28a2.07 2.07 0 0 0-.01-2.93Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>';
        editBtn.className = "edit_btn";
        editBtn.setAttribute("contentEditable","false");
        div.appendChild(editBtn);
        const doneBtn = document.createElement("button")
        doneBtn.type = "submit";
        doneBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m8.818 19.779l-6.364-6.364l2.83-2.83l3.534 3.544l9.898-9.908l2.83 2.83L8.818 19.779Z"/></svg>';
        doneBtn.className = "done_btn";
        doneBtn.setAttribute("contentEditable","false")
        div.appendChild(doneBtn);
     }
        //*** populate CSS list on page load ***/

    function populateNoteLists() {
            for (let note of cssArray){
            newCssDiv = document.createElement ("div");
            newCssDiv.className = "cssDiv";
            newCssPar = document.createElement('p');
            newCssPar.innerHTML = note;
            newCssPar.className = "cssNote";
            newCssPar.setAttribute("contentEditable", "false");
            listCS.appendChild(newCssDiv);
            newCssDiv.appendChild(newCssPar);
            addBtns (newCssDiv);
     }    
    
            for(let note of jsArray) {
        newJsDiv = document.createElement("div");
        newJsDiv.className = "jsDiv";
        newJsPar = document.createElement ('p');
        newJsPar.innerHTML = note;
        newJsPar.className= "jsNote";
        newJsPar.setAttribute("contentEditable", "false");
        listJS.appendChild(newJsDiv);
        newJsDiv.appendChild(newJsPar);
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
                    
                }
            }
        }})

     //**********EDIT AND DONE************//

let idEdit = ""
listCS.addEventListener("click", function(e) {
    let target = e.target;
if (target.classList.contains("edit_btn")) {
    target.parentNode.childNodes[0].setAttribute ("contentEditable","true");
    const textInTa = target.parentNode.childNodes[0].textContent;
    console.log(textInTa);
        for (notes of cssArray){
    if (notes===textInTa){
    idEdit = (cssArray.indexOf(notes))}}}})


    listCS.addEventListener("click", function(e) {
    if (e.target.classList.contains("done_btn")) {
    e.target.parentNode.setAttribute("contentEditable", "false")
     const newText = e.target.parentNode.childNodes[0].textContent;
     console.log (newText);
    cssArray.splice(idEdit,1,newText);
    localStorage.setItem("CSS",JSON.stringify(cssArray));

}})

// let idEdit = ""
listJS.addEventListener("click", function(e) {
    let target = e.target;
if (target.classList.contains("edit_btn")) {
    target.parentNode.setAttribute ("contentEditable","true");
    const textInTa = target.parentNode.childNodes[0].textContent;
    console.log(textInTa);
        for (notes of jsArray){
    if (notes===textInTa){
    idEdit = (jsArray.indexOf(notes))}}}})


    listJS.addEventListener("click", function(e) {
    if (e.target.classList.contains("done_btn")) {
    e.target.parentNode.setAttribute("contentEditable", "false")
    const newText = e.target.parentNode.childNodes[0].textContent;
    console.log(newText);
    jsArray.splice(idEdit,1,newText);
    localStorage.setItem("JS",JSON.stringify(jsArray));
        
        }})

                
    
    
    

