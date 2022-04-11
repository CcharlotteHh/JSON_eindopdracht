var xmlhttp = new XMLHttpRequest();
var url = './data/data.json';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        var myData = JSON.parse(this.responseText);
        showData(myData)
    }
}

xmlhttp.open('GET', url, true);
xmlhttp.send();

function showData(data){
    var containerDiv = document.createElement('div');
    containerDiv.className = 'flex-container';

    var ul = document.createElement('ul');
    
    for( var i =0; i<data.length; i++){
        var li = document.createElement('li');
        var itemDiv = document.createElement('div');

        itemDiv.className = 'flex-items';

        var pos = data[i].pos; 
        var coureur = data[i].coureur;
        var team  = data[i].team;
        var tijd = data[i].tijd;
        var punten  = data[i].punten;
        

        itemDiv.innerHTML = `<div> Position: ${pos}:${coureur} </div>
        <div> team: ${team} </div>
        <div> tijd: ${tijd} </div>
        <div> Punten: ${punten} </div>`;
        li.appendChild(itemDiv);
        ul.appendChild(li);

    }

    containerDiv.appendChild(ul);
    document.body.appendChild(containerDiv);
}