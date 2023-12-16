function myFunction() {
    let x = document.getElementById("miInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
