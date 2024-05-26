window.onload = function(){
    
  document.body.addEventListener("keydown", keyDownListener);
  let print = document.createElement('div');
  print.setAttribute("id","print");
  document.body.appendChild(print);
  let range = document.createElement('input');
  range.setAttribute("type","range");
  range.setAttribute("id","range");
  range.setAttribute("min","20");
  range.setAttribute("max","150");
  range.setAttribute("value","20");
  document.body.appendChild(range);
   
  function keyDownListener(event) {

    let thedot = document.createElement('div');
    // make it a circle
    thedot.style.borderRadius = "50%";
    
    //position
    thedot.style.display= "inline-block";
    thedot.style.position = "absolute";
    let w = window.innerWidth;
    let h = window.innerHeight;
    let posx = Math.floor(Math.random() * w);
    let posy = Math.floor(Math.random() * h);
    thedot.style.left = posx+"px";
    thedot.style.top = posy+"px";
    
    // size
    //let size = Math.floor(Math.random() * 130 + 20);
    size = document.getElementById("range").value;
    thedot.style.height = size+"px";
    thedot.style.width = size+"px";
    
    // color
    switch (event.key) {
      case "r":  
        thedot.style.backgroundColor = "red";
      break;
      case "g":
       	 thedot.style.backgroundColor = "green";
      break;
      case "b":
       	 thedot.style.backgroundColor = "#6495ED";
      break;
      case "y":
       	 thedot.style.backgroundColor = "yellow";
      break;
      default:
        return;
    }
    document.body.appendChild(thedot);
    let x = Number(localStorage.getItem("nodots"));
    if (x) {
      localStorage.setItem("nodots", x + 1); 
    }
    else {
      localStorage.setItem("nodots", "1"); 
    }
    document.getElementById("print").innerHTML = localStorage.getItem("nodots");
  }   
}

