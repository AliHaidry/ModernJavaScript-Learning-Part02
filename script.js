/*************************
/*What is the DOM*/
/*************************/

// Document Object Model.
// Tree of nodes / elements created by browser.
// Javascript can be used to read / write / manipulate to the DOM.
// Object Oriented Representation.

/** These are the building blocks of the language and they are critical but now we're going to get to actually use this stuff in 
 * combination with the browser with with the DOM. All right. So what is the DOM? It stands for the document object model 
 * and it's basically a structured representation of an HTML document. It can be thought of kind of as a tree of nodes or elements 
 * created by the browser. Okay, and when I say node or element, I mean in any of the HTML tags the HTML tag, the body tag, 
 * each one's pretty much anything that is in the document and we can use JavaScript to manipulate these DOM elements or nodes. 
 * The DOM is object oriented, meaning that each node has its own set of properties and methods that we can change, we can add, 
 * we can remove. Now the browser gives us a window object and inside that we have a document object.*/

/*************************
/*What is the DOM END*/
/*************************/


/*************************
/*Examining the Document Object*/
/*************************/

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

/*************************
/*Examining the Document Object END*/
/*************************/


/*************************
/*DOM Selectors for Single Elements*/
/*************************/

/** so basically in vanilla JavaScript, we have a couple different selectors that can be categorized into two different types single element and multiple element 
 * selectors. So single element selectors will allow you to grab one element by its id or its class or whatever it 
 * may be and it only stores one thing */

 // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


/*************************
/*DOM Selectors for Single Elements END*/
/*************************/



/*************************
/*DOM Selectors for Multiple Elements*/
/*************************/

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'blue';
// items[3].textContent ='Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML collection into array.

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index){
//     console.log(li.className)
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');


// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = "#ccc";
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

/*************************
/*DOM Selectors for Multiple Elements END*/
/*************************/


/*************************
/* Traversing the DOM */
/*************************/

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;



// // Get child nodes

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype 


// // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello Kitty!';

// // Children of Children


// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];


// // First child
// val = list.firstChild;
// val = list.firstElementChild;


// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count Child Elements
// val = list.childElementCount;

// // Get Parent node

// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling

// val = listItem.nextSibling;
// va = listItem.nextElementSibling.nextElementSibling;


// // Get Previous sibling

// val = listItem.previousSibling;
// va = listItem.previousElementSibling;


// console.log(val);

/*************************
/* Traversing the DOM END*/
/*************************/


/*************************
/* Creating the elements */
/*************************/

// we can construct dom elements by using the vanilla JavaScript.
// create element
// const li = document.createElement('li');
// // add class
// li.className = 'collection-item';
// // add id
// li.id = 'new-item';

// // add attribute
// li.setAttribute('title', 'New Item');
// // create text node and append it
// li.appendChild(document.createTextNode('Hello World'));
// // create new link element
// const link = document.createElement('a');
// // add classes
// link.className = 'delete-item secondary-content';
// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // append link into li
// li.appendChild(link);

// // append li as child to ul
// document.querySelector('ul').appendChild(li);

// console.log(li);

/*************************
/* Creating the elements END*/
/*************************/


/*************************
/* Removing and replacing elements*/
/*************************/

// // Replace element

// // create element
// const newHeading = document.createElement('h2');
// // add id 
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // get the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');
// // replace
// cardAction.replaceChild(newHeading, oldHeading);
// // remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();
// // remove child element
// list.removeChild(lis[3]);

// // Classes and attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;


// // classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);


/*************************
/* Removing and replacing elements END*/
/*************************/


/*************************
/* Event listeners and the event object*/
/*************************/
// document.querySelector('.clear-tasks').addEventListener('click', 
//     function(e){                                 // this is called as a callback function.
//         console.log('Hello World');

//    //     e.preventDefault();
// });


// document.querySelector('.clear-tasks').addEventListener('click',
// onClick);

// function onClick(e){
//    // console.log('Clicked');

//    let val;

//    val = e;

//    // Event target element
//    val = e.target;
//    val = e.target.id;
//    val = e.target.className;
//    val = e.target.classList;

//    // Event type
//    val = e.type;
   
//    // timestamp
//    val = e.timestamp;

//    // coordinates event relative to the window
//    val = e.clientY;
//    val = e.clientX;

//    // coordinates event relative to the element
//    val = e.offsetY;
//    val = e.offsetX



//    console.log(val);

//}

/*************************
/* Event listeners and the event object END*/
/*************************/


/*************************
/* Mouse Events */
/*************************/

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// //clearBtn.addEventListener('dbclick', runEvent);

// // Mousedown
// //clearBtn.addEventListener('mousedown', runEvent);
// // MouseUp
// //card.addEventListener('mouseup', runEvent);
// // Mouseenter
// //card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// // // Mouseover
// // card.addEventListener('mouseover', runEvent);
// // // Mouseout
// // card.addEventListener('mouseout', runEvent);

// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event handlers
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);


//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

/*************************
/* Mouse Events END*/
/*************************/

/*************************
/* Keyboard & Input Events*/
/*************************/

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// // clear input
// taskInput.value = "";

// //form.addEventListener('submit', runEvent);

// //Keydown
// //taskInput.addEventListener('keydown',runEvent);

// //Keydown
// //taskInput.addEventListener('keyup',runEvent);

// // Keypress
// //taskInput.addEventListener('keypress', runEvent);

// // Focus
// //taskInput.addEventListener('focus', runEvent);

// // Blur
// //taskInput.addEventListener('blur',runEvent);

// // Cut
// //taskInput.addEventListener('cut',runEvent);

// // Paste
// //taskInput.addEventListener('paste', runEvent);

// // Input 
// taskInput.addEventListener('input',runEvent);



// function runEvent(e)
// {
//     console.log(`EVENT TYPE: ${e.type}`);

    //console.log(e.target.value);

//  heading.innerHTML = e.target.value;
//     // Get input value.
//     console.log(taskInput.value);

//     e.preventDefault(); // use it when working with forms.
//}

/*************************
/* Keyboard & Input Events END*/
/*************************/



/*************************
/* Event Bubbling & Delegation*/
/*************************/

// What is event bubbling?
/** Event bubbling is a type of event propagation where the event first triggers on the innermost target of the element and then
 * successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost
 * DOM element or document object (Provided the handler is initialized).
 * 
*/

// Event bubbling

// document.querySelector('.card-title').addEventListener('click', 
// function() {
//     console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', 
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//     console.log('col');
// }); 

// What is event delegation ?
/** DOM event delegation is a mechanism  of responding to ui-events via a single common parent rather
 * than each child, through the magic of event "bubbling" (aka - also known as : event propagation)
 * 
 * The whole idea behind event delegation is that instead of listening for a change on the inputs directly,
 * we should look for an HTML element that is going to be on the page when the page initially loads. 
*/

// Event Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

//document.body.addEventListener('click',deleteItem);


// function deleteItem(e){
// //     if(e.target.parentElement.className === 'delete-item secondary-content')
// //     {
// //         console.log('delete item');
// //     }
// // }


// if(e.target.parentElement.classList.contains('delete-item'))
// {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove(); // removes the list of tasks.
// }

// }


/*************************
/* Event Bubbling & Delegation END*/
/*************************/



/*************************
/* Local and Session Storage*/
/*************************/


/*************************
/* Local and Session Storage END*/
/*************************/

