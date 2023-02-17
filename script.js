for (let i = 0; i < 12; i++){
  let grid = document.getElementById("button-grid");
  for (let a = 0; a < 12; a++){
    let button = document.createElement("button");

    button.style.left = a*50 +"px";
    button.style.top = i*50 + "px";
    button.id = "button"+i+"-"+a;
    
    button.addEventListener("click", function(){
      color = document.getElementById("colorpicker").value;
      this.style.backgroundColor = color;
      //this.setAttribute("data", "data-color: " + color);
    });
    //this.setAttribute("data", "data-color: #ff0000");
    grid.appendChild(button);
  }
  let breaker = document.createElement("br");
  grid.appendChild(breaker);
}

let resultsBtn = document.getElementById("get-results");

resultsBtn.addEventListener("click", function(){
  // A comment
  let paragraph = document.getElementById("code");

  let text = 'colors = []; \n colors.append([';

  for (let b = 0; b < 12; b++){
    for (let c = 0; c < 12; c++){
      buttonId = document.getElementById("button"+b+"-"+c);
      if (buttonId.style.backgroundColor){
        text = text + '"'+ buttonId.style.backgroundColor + '", ';
      } else {
        text = text + '"rgb(255, 255, 255)", ';
      }
      
    }
    if (b < 11){
      text = text + "]); colors.append([";
    }
    
  }
  text = text + "]);";
  paragraph.innerHTML = text;
  
});


/*
colors = []
colors.append(["#2E10EC", "#2E10EC", "#ffffff", "#ffffff", "#80e5ff", "#80e5ff", "#ffffcc", "#80e5ff", "#ffffcc",    "#80ff80","#ffffcc", "#ffffcc"])
This is a row, it is done by rows
*/
