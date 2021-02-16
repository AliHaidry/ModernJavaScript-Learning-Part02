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


