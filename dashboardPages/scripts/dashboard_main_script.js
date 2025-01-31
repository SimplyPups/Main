// Simple SPA approach - dynamically load content based on the section button clicked

document.getElementById("searchbutton").addEventListener("click", function() {
    loadSection("section01.html");
  });
  document.getElementById("createbutton").addEventListener("click", function() {
    loadSection("section02.html");
  });
  document.getElementById("homebutton").addEventListener("click", function() {
    loadSection("section03.html");
  });
  document.getElementById("profilebutton").addEventListener("click", function() {
    loadSection("section04.html");
  });
  document.getElementById("settingsbutton").addEventListener("click", function() {
    loadSection("section05.html");
  });
  
  function loadSection(sectionFile) {
    fetch(sectionFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading section:", error);
      });
  }