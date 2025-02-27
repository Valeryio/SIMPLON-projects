
// Data transfert 

let dragContent = document.querySelectorAll(".drag-content");

dragContent.forEach(element => {
    element.addEventListener("dragstart", (event) => {
        console.log("Here :", event.target); 
        event.dataTransfer.setData('text/plain', event.target.id);
        console.log("Here :", event.target.id);

        event.target.style.background= "blue";
    });
    
});

let dropZone = document.querySelectorAll(".drop-zone");
console.log(dropZone);

dropZone.forEach(element => {
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
      })
      
      element.addEventListener("drop", (event) => {
        const id = event.dataTransfer.getData('text/plain');
        console.log(`The id : ${id}`);
        
          
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
        
        // Empty the data of the current dragged element
        event.dataTransfer.clearData();
      });
});
