

let body = document.querySelector('body');
let newButton = document.createElement('button');
let newButton2 = document.createElement('button');
let newHeader = document.createElement('h2');
let i = 0;

body.setAttribute('style', 'color: navy');
body.appendChild(newButton);
body.appendChild(newButton2);
newButton.innerHTML = "ADD";
newButton2.innerHTML = "REMOVE";

newButton.addEventListener('click', addButtonClicked);
newButton2.addEventListener('click', removeButtonClicked);


function addButtonClicked(){

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "Big Blue Balloon";
    body.appendChild(newHeader);
    
    i++;
}  


function removeButtonClicked(){
    let todelete = document.getElementById(i - 1);
    
    if(todelete !== null){
        //console.log(todelete);

        body.removeChild(todelete);

        i--;

    } else {
        window.alert('nothing to delete');
    }


}   






//Question 1.
// What can templates do exactly ? 
// Is the management system flexible for people who don't know how to code?
// Is the <head></head> going to become a URL?





// // create a variable and set it to the html document body.
// let body = document.querySelector('body');

// //console.log(body);
// //set the text colorof the body (and all element)
// body.setAttribute('style', 'color:navy');

// let newButton = document.createElement('button');
// body.appendChild(newButton);
// newButton.innerHTML = "ADD";

// let i = 0;

// function addButtonClicked(){
//     //alert("Try to click this button, ok!")
//     //console.log('hit');

//     let newHeader = document.createElement('h2');
//     newHeader.setAttribute('id', i);
//     newHeader.innerHTML = "Big Blue Balloon";
//     body.appendChild(newHeader);
    
//     i++;
  
//     //console.log(newHeader);

// }  

// newButton.addEventListener('click', addButtonClicked);


// let newButton2 = document.createElement('button');
// body.appendChild(newButton2);
// newButton2.innerHTML = "REMOVE";

// function removeButtonClicked(){
//     todelete = document.getElementById(i - 1);
//     console.log(todelete);
//     body.removeChild(todelete);

//     i--;


// }   

// newButton2.addEventListener('click', removeButtonClicked);

// console.log(body);


