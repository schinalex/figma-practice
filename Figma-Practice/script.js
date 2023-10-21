function showMenu(){
     var navigation = document.querySelector(".header-nav");
     if (navigation.className === "header-nav") {
        navigation.className += " visible";
      } else {
        navigation.className = "header-nav";
      }
}