/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown__1").classList.toggle("show__1");
    document.getElementById("myDropdown__2").classList.toggle("show__2");
    document.getElementById("myDropdown__3").classList.toggle("show__3");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropbtn__1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content__1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show__1')) {
            openDropdown.classList.remove('show__1');
          }
        }
      }
      if (!event.target.matches('.dropbtn__2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content__2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show__2')) {
            openDropdown.classList.remove('show__2');
          }
        }
      }
      if (!event.target.matches('.dropbtn__3')) {
        var dropdowns = document.getElementsByClassName("dropdown-content__3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show__3')) {
            openDropdown.classList.remove('show__3');
          }
        }
      }
  }
