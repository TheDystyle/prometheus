
// Task 2
// function changecolor(){
//   var dd1 = document.getElementById("d1");
//   var dd2 = document.getElementById("d2");
//   dd1.className = "blueback";
//   dd2.className = "yellowback";
// }
// function changeText(){
//   var dd1 = document.getElementById("d1");
//   var dd2 = document.getElementById("d2");
//   dd1.innerHTML = "Bonjoure";
//   dd2.innerHTML = "Sayonara";
// }
// Task 2


// Task 3
function addTask() {
  var input = document.getElementById("input");
  // отримати поточний текст з поля введення
  var newTask = input.value;
  // додавати новий елемент до списку, тільки якщо було введено якийсь текст 
  if (newTask != "") {
    // створити новий елемент списку HTML
    var item = document.createElement("li");
    // додати HTML для кнопок і тексту нового завдання
    // Зверніть увагу, що потрібно використовувати одинарні лапки '' замість подвійних "" в HTML
item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
                 '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                 '<input type="button" class="important" onclick="important(this.parentNode)" value="&#33;" /> ' +
                 newTask;

    // додати новий елемент до наявного списку
    document.getElementById("tasks").appendChild(item);

    /* Крок 4 нижче тут */
    input.value = "";
    input.placeholder = "enter next task …";
  }
}

// змінити стиль, що використовується для цього елемента
function markDone(item) {
  item.className = 'finished';
}

/* Крок 7 нижче тут */
function remove(item) {
  // повністю видалити елемент з документа
  if(item.className == 'finished')
  {
    item.remove();
  }
  else {
    alert("The task is not done!");
  }
}

/* Крок 11 нижче тут */
function doAbout() {
  var divebout = document.getElementById("divabout");
  divebout.innerText = 'Author Zimas';
  // console.log(divebout.innerText);
}

/* Крок 14 нижче тут */
function clearAbout() {
  var divebout = document.getElementById("divabout");
  divebout.innerText = '';
  // console.log(divebout.innerText);
}

function important(item) {
  item.className = 'important';
}

// Task 3