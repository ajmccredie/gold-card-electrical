const lineContainer = document.getElementsByClassName("line-container");
const menuBox = document.getElementsByClassName("menu-box");

lineContainer.addEventListener("click", function() {
   // lineContainer.classList.toggle("active")
   // menuBox.classList.toggle("active")
    if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");
    });
})

//document.getElementById("myDiv")
//.addEventListener("click", function() {
//  if (this.classList.contains("active")) {
 //   this.classList.remove("active");
  //} else this.classList.add("active");
//});