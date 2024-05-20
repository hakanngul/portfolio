// Popup Modal Script
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("projectPopup");
    var span = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll('.work').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();  // Varsayılan bağlantı davranışını önler
  
        var title = event.currentTarget.getAttribute('data-title');
        var description = event.currentTarget.getAttribute('data-description');
        
        document.getElementById('projectTitle').innerText = title;
        document.getElementById('projectDescription').innerText = description;
  
        modal.style.display = "block";
      });
    });
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
  // Popup Modal Script
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("projectPopup");
    var span = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll('.work').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();  // Varsayılan bağlantı davranışını önler
  
        var title = event.currentTarget.getAttribute('data-title');
        var descriptionId = event.currentTarget.getAttribute('data-description');
        var description = document.querySelector(descriptionId).innerHTML;
        
        document.getElementById('projectTitle').innerText = title;
        document.getElementById('projectDescription').innerHTML = description;
  
        modal.style.display = "block";
      });
    });
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  