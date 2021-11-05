includeHTML();

function includeHTML() {
  const divs = document.querySelectorAll("div[class='include-html']");

  divs.forEach((div) => {
    const path = div.getAttribute("include-html");

    fetch(path)
      .then((data) => data.text())
      .then((content) => (div.innerHTML = content));
  });
}
