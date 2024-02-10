document.addEventListener('DOMContentLoaded', function () {
  const contentElement = document.getElementById('content');
  const navElement = document.getElementById('auto-nav');

  const headings = contentElement.querySelectorAll('h2, h3, h4'); // Add more heading levels if needed

  headings.forEach(function (heading) {
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = '#' + heading.id;
    link.classList.add('nav-link');

    const listItem = document.createElement('li');
    listItem.appendChild(link);

    navElement.appendChild(listItem);
  });
});
