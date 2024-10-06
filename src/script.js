const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
let val = false;

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");
  if (val == false) {
    const parentlogo = document.getElementById("parentlogo");
    parentlogo.remove();
    val = true;
  } else {
    const sidebarlogo = document.getElementById("sidebarlogo");

    const parentlogo = document.createElement("div");
    parentlogo.setAttribute("id", "parentlogo");
    parentlogo.innerHTML = '<img src="./logo.png" alt="" id="logo">';
    sidebarlogo.appendChild(parentlogo);
    val = false;
  }
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (input) {
    const results = data.filter((item) => item.toLowerCase().includes(input));

    if (results.length) {
      results.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item;
        resultsDiv.appendChild(div);
      });
    } else {
      resultsDiv.innerHTML = "<div>No results found</div>";
    }
  }
}

document
  .getElementById("searchInput")
  .addEventListener("input", searchFunction);
