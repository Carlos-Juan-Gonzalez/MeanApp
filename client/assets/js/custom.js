
/* Img modal */
function myTest1() {
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}
function myTest2() {
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg2");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    }
    window.onload = init;
    /* theme change > 768px screnn */
    function init(){
      const themeChange = document.getElementById('theme-change');
      const themeChangeOverlay = document.getElementById('theme-change-overlay');
      const themeSun = document.getElementById("theme-sun");
      const themeSunOverlay = document.getElementById("theme-sun-overlay");
      const themeMoon = document.getElementById("theme-moon");
      const themeMoonOverlay = document.getElementById("theme-moon-overlay");
      const Html = document.getElementById('html');

      if (Html) {
        themeChange.addEventListener('click', () =>{
        if(Html.classList.contains('theme-dark')){
          Html.classList.remove('theme-dark')
          Html.classList.toggle('theme-light')
          themeSun.classList.remove('dark')
          themeSun.classList.toggle('light')
          themeMoon.classList.remove('dark')
          themeMoon.classList.toggle('light')
        }else{
          Html.classList.remove('theme-light')
          Html.classList.toggle('theme-dark')
          themeSun.classList.remove('light')
          themeSun.classList.toggle('dark')
          themeMoon.classList.remove('light')
          themeMoon.classList.toggle('dark')
        }

        
        })
    }
    /* theme change < 768px screnn */
    if (Html) {
      themeChangeOverlay.addEventListener('click', () =>{
      if(Html.classList.contains('theme-dark')){
        Html.classList.remove('theme-dark')
        Html.classList.toggle('theme-light')
        themeSunOverlay.classList.remove('dark')
        themeSunOverlay.classList.toggle('light')
        themeMoonOverlay.classList.remove('dark')
        themeMoonOverlay.classList.toggle('light')
      }else{
        Html.classList.remove('theme-light')
        Html.classList.toggle('theme-dark')
        themeSunOverlay.classList.remove('light')
        themeSunOverlay.classList.toggle('dark')
        themeMoonOverlay.classList.remove('light')
        themeMoonOverlay.classList.toggle('dark')
      }

      
      })
  }
  }
/* overlay nav */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  