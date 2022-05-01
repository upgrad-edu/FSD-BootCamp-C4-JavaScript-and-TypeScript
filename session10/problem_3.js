function isValidEmail(str) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(str)) {
    console.log("Valid email address!");
  } else {
    console.log("You have entered an invalid email address!");
  }
}

isValidEmail("darsh@gmail.com");
