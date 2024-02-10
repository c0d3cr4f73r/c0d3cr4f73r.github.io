document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section[id^='section-']");
  var navList = document.getElementById("nav-panel").querySelector("ul");

  sections.forEach(function (section) {
    var sectionTitle = section.querySelector("h2").textContent;
    var navItem = document.createElement("li");
    navItem.innerHTML = '<a href="#' + section.id + '">' + sectionTitle + '</a>';
    navList.appendChild(navItem);
  });
});
