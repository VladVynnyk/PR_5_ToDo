let tasks = [{"task":"Dishes", "isComplete":false, "dueDate":"2021-01-01T15:45:00.000Z"},{"task":"feed baby", "isComplete":true, "dueDate":"2021-01-02T15:45:00.000Z"},{"task":"Laundry", "isComplete":true, "dueDate":"2021-01-04T15:45:00.000Z"},{"task":"Homework", "isComplete":false, "dueDate":"2021-01-03T15:45:00.000Z"}]


tasks.forEach((el)=>{
  var li = document.createElement("li");
  var inputValue = el.task;
  let date = el.dueDate.toString()
  date.slice(0, 4)
  var t = document.createTextNode(inputValue);
  var d = document.createTextNode(date)
  li.appendChild(t);
  li.appendChild(d);
    document.getElementById("container").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
})

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  let today = new Date()
  let elem = {'task': inputValue, "isComplete":false, "dueDate":today}
  tasks.push(elem)
  var t = document.createTextNode(inputValue);
  var d = document.createTextNode(today.toLocaleDateString("en-US"))
  li.appendChild(t);
  li.appendChild(d);
  console.log(tasks)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("container").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function sortElems(){
  let els = document.getElementsByClassName("elem")
  Array.from(els).forEach((el) => {

    if(el.classList.contains("checked")){
      let clonedElem=el.cloneNode(true)
      document.querySelector("container").appendChild(clonedElem)

    }
  
  })
}