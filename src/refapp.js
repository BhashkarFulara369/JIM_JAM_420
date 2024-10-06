const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
let val=false;
function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
  if(val == false)
  {
    document.getElementById("parentlogo").remove();
    val=true;
  }
  else{
    const parentlogo = document.createElement("div");
    parentlogo.innerHTML ='<img src="./logo.png" alt="" id="logo" />'; 
    parentlogo.setAttribute("id" , "parentlogo");
    document.getElementById("sidebarlogo").appendChild(parentlogo);
    val=false;
  }
  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}