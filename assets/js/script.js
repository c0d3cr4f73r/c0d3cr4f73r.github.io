document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('main_content');
  var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  var navPanel = document.createElement('div');
  navPanel.id = 'nav-panel';
  document.body.appendChild(navPanel);
  var navList = document.createElement('ul');
  navPanel.appendChild(navList);

  var currentList = navList;
  var previousLevel = 1;

  headings.forEach(function(heading) {
    var level = parseInt(heading.tagName.charAt(1));

    // Exclude specific headings
    var excludeHeadings = ["c0d3cr4f73r's Blog", "Red Team Operator | Malware Analyst", "Tags :"];
    if (excludeHeadings.includes(heading.textContent.trim())) {
      return;
    }

    // Exclude headings outside of the content section
    if (!content.contains(heading)) {
      return;
    }

    // Exclude headings within the header section
    if (heading.closest('header') !== null) {
      return;
    }

    if (level > previousLevel) {
      var sublist = document.createElement('ul');
      var listItem = document.createElement('li');
      listItem.appendChild(sublist);
      currentList.lastChild.appendChild(listItem);
      currentList = sublist;
    } else if (level < previousLevel) {
      for (var i = level; i < previousLevel; i++) {
        currentList = currentList.parentNode.parentNode;
      }
    }

    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = '#' + heading.id;
    listItem.appendChild(link);
    currentList.appendChild(listItem);

    previousLevel = level;
  });
});
