const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
let val = false;

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");
  if (val == false) {
    const select2 = document.getElementById("parentlogo");
    select2.remove();

    document.getElementById("experimentheading").style.visibility = "hidden";
    document.getElementById("researchoverview").style.visibility = "hidden";
    document.getElementById("methodology").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    document.getElementById("publications").style.visibility = "hidden";
    val = true;
  } else {
    const select2 = document.createElement("div");
    select2.setAttribute("id", "parentlogo");

    select2.innerHTML = '<img src="./logo.png" alt="" id="logo"></img>';
    document.getElementById("sidebarlogo").appendChild(select2);

    document.getElementById("experimentheading").style.visibility = "visible";
    document.getElementById("researchoverview").style.visibility = "visible";
    document.getElementById("methodology").style.visibility = "visible";
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("publications").style.visibility = "visible";
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

//////////////////////////////////////////////////////////////////////////

const inp = document.querySelector("#Searchdata");
const prt = document.querySelector("#displayhere");
const butt = document.querySelector("#butt");
const head1 = document.querySelector("#headle1");
const head2 = document.querySelector("#headle2");
const prh = document.querySelector("#kuchbhi");
const pro = document.querySelector("#pro").children;
const ass = document.querySelector("#ass").children;
const sam = document.querySelector("#sam").children;
const mqc = document.querySelector("#mqc");

async function getdata() {
  const response = await fetch(
    `https://osdr.nasa.gov/osdr/data/osd/meta/${inp.value}`
  );
  const data = await response.json();
  return data;
}

butt.addEventListener("click", async () => {
  const data = await getdata();
  console.log(data);
  head1.innerText = `OSD-${inp.value}`;
  head2.innerText = data.study[`OSD-${inp.value}`].studies[0].title;
  prh.innerText = "Description";
  prt.innerText = data.study[`OSD-${inp.value}`].studies[0].description;

  const lele = document.querySelector("#dataoptions").children;

  for (let i = 0; i < lele.length; i++) {
    lele.item(i).addEventListener("click", () => {
      console.log(lele.item(i));
      switch (i + 1) {
        case 1:
          prh.innerText = "";
          prt.innerText = "";
          const std = data.study[`OSD-${inp.value}`].studies[0];
          pro[0].innerText = std.comments[1].name;
          pro[1].innerText = std.comments[1].value;
          pro[2].innerText = std.comments[2].name;
          pro[3].innerText = std.comments[2].value;
          pro[4].innerText = std.comments[3].name;
          pro[5].innerText = std.comments[3].value;
          pro[6].innerText = std.comments[4].name;
          pro[7].innerText = std.comments[4].value;
          pro[8].innerText = std.comments[5].name;
          pro[9].innerText = std.comments[5].value;
          pro[10].innerText = std.comments[6].name;
          pro[11].innerText = std.comments[6].value;
          pro[12].innerText = std.comments[7].name;
          pro[13].innerText = std.comments[7].value;
          pro[14].innerText = std.comments[8].name;
          pro[15].innerText = std.comments[8].value;
          pro[16].innerText = std.comments[9].name;
          pro[17].innerText = std.comments[9].value;
          pro[18].innerText = std.comments[10].name;
          pro[19].innerText = std.comments[10].value;
          pro[20].innerText = std.comments[11].name;
          pro[21].innerText = std.comments[11].value;
          pro[22].innerText = std.comments[12].name;
          pro[23].innerText = std.comments[12].value;
          pro[24].innerText = std.comments[13].name;
          pro[25].innerText = std.comments[13].value;
          pro[26].innerText = std.comments[14].name;
          pro[27].innerText = std.comments[14].value;
          pro[28].innerText = std.comments[15].name;
          pro[29].innerText = std.comments[15].value;
          pro[30].innerText = std.comments[16].name;
          pro[31].innerText = std.comments[16].value;
          pro[32].innerText = std.comments[17].name;
          pro[33].innerText = std.comments[17].value;
          pro[34].innerText = std.comments[18].name;
          pro[35].innerText = std.comments[18].value;
          break;

        case 2:
          prh.innerText = "";
          prt.innerText = "";
          for (let i = 0; i < pro.length; i++) {
            pro[i].innerText = "";
          }
          for (let i = 0; i < ass.length; i++) {
            ass[i].innerText = "";
          }
          const st = data.study[`OSD-${inp.value}`];
          sam[0].innerText = st.studies[0].protocols[0].name;
          sam[1].innerText = st.studies[0].protocols[0].description;
          sam[2].innerText = st.studies[0].protocols[1].name;
          sam[3].innerText = st.studies[0].protocols[1].description;

          break;

        case 3:
          prh.innerText = "";
          prt.innerText = "";
          for (let i = 0; i < pro.length; i++) {
            pro[i].innerText = "";
          }
          for (let i = 0; i < sam.length; i++) {
            sam[i].innerText = "";
          }
          const s = data.study[`OSD-${inp.value}`].studies[0];
          ass[0].innerText = s.protocols[2].name;
          ass[1].innerText = s.protocols[2].description;
          ass[2].innerText = s.protocols[3].name;
          ass[3].innerText = s.protocols[3].description;
          ass[4].innerText = s.protocols[4].name;
          ass[5].innerText = s.protocols[4].description;
          ass[6].innerText = s.protocols[5].name;
          ass[7].innerText = s.protocols[5].description;

          break;

        case 4:
          prh.innerText = "";
          prt.innerText = "";
          for (let i = 0; i < pro.length; i++) {
            pro[i].innerText = "";
          }
          for (let i = 0; i < sam.length; i++) {
            sam[i].innerText = "";
          }
          for (let i = 0; i < sam.length; i++) {
            ass[i].innerText = "";
          }
          mqc.innerHTML = `<iframe src="https://osd-${inp.value}.netlify.app/" width="800" height="600"></iframe>`;
          break;

        // case 5:prt.innerText = data.fields[0].publications;
        // break;
      }
    });
  }
});

function toggleDropdown() {
  var dropdown = document.getElementById("dropdownContent");
  dropdown.classList.toggle("show-dropdown"); // Toggle the 'show-dropdown' class to show/hide the menu
}
