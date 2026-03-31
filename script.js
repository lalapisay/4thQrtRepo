function plotPoint() {
    console.log(Number(x0.value), Number(y0.value), Number(x.value), Number(y.value)) // checks the arguments passed to this function
    in1.innerHTML = x0.value + " " + y0.value + " " + x.value + " " + y.value; //this is correction 2
    var point = document.createElement('div');  
    point.id = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    document.getElementById('coordinatePlane').appendChild(point);
    point.style.left = (Number(x.value) - Number(x0.value) + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (Number(y.value) - Number(y0.value) + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    
    if (Number(x.value) > Number(x0.value) && Number(y.value) > Number(y0.value)){
      out1.innerHTML = "NE"
    }
    else if (Number(x.value) < Number(x0.value) && Number(y.value) < Number(y0.value)){
      out1.innerHTML = "SO"
    }
    else if (Number(x.value) > Number(x0.value) && Number(y.value) < Number(y0.value)){
      out1.innerHTML = "SE"
    }
    else if (Number(x.value) < Number(x0.value) && Number(y.value) > Number(y0.value)){
      out1.innerHTML = "NO"
    }
    else if (Number(x.value) === Number(x0.value) || Number(y.value) === Number(y0.value)){
      out1.innerHTML = "divisa"
    }
  } //this is correction 1, missing bracket
