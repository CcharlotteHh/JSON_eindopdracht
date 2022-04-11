var xmlhttp = new XMLHttpRequest();
var url = "./data/data.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    showData();
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

var current = 0;
var data = null;

function showData() {
  var containerDiv = document.createElement("div");
  containerDiv.className = "flex-container";

  var previous = document.createElement("button");
  previous.innerHTML = "previous";
  previous.addEventListener("click", previousButton);
  var next = document.createElement("button");
  next.innerHTML = "next";
  next.addEventListener("click", nextButton);

  var ul = document.createElement("ul");

  var li = document.createElement("li");
  var itemDiv = document.createElement("div");


  itemDiv.className = "flex-items";
  itemDiv.id = 'currentItem';

  var pos = data[0].pos;
  var coureur = data[0].coureur;
  var team = data[0].team;
  var tijd = data[0].tijd;
  var punten = data[0].punten;
    var img = document.createElement("img");
  img.className = "image_container";
  img.src = data[0].afbeelding;

  itemDiv.innerHTML = `<div> Position: ${pos}:${coureur} </div>
        <div> team: ${team} </div>
        <div> tijd: ${tijd} </div>
        <div> Punten: ${punten} </div>`;
  li.appendChild(itemDiv);
  li.appendChild(img);
  ul.appendChild(previous);
  ul.appendChild(next);
  ul.appendChild(li);

  containerDiv.appendChild(ul);
  document.body.appendChild(containerDiv);
}

function nextButton() {
  current++;
  if(current > data.length-1){
      current = 0;
  }

  
  update(current);
  console.log(current);
}

function previousButton() {
  current--;
  if( current <0){
      current = data.length-1;
  }
  
  update(current);
  console.log(current);
}

function update(currentId) {
  var pos = data[currentId].pos;
  var coureur = data[currentId].coureur;
  var team = data[currentId].team;
  var tijd = data[currentId].tijd;
  var punten = data[currentId].punten;

  var div = document.getElementById("currentItem");

  
  div.innerHTML = `<div> Position: ${pos}:${coureur} </div>
        <div> team: ${team} </div>
        <div> tijd: ${tijd} </div>
        <div> Punten: ${punten} </div>`;
}
