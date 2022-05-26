function signCheck(x,y,z){
	 if (x + y + z >= 0) {
    alert("The sign is +");
  } else if (x < 0 && y < 0 && z < 0) {
    alert("The sign is +");
  } else if (x > 0 && y < 0 && z < 0) {
    alert("The sign is +");
  } else if (x < 0 && y > 0 && z < 0) {
    alert("The sign is +");
  } else {
    alert("The sign is -");
  }
 }