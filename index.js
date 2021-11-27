var current_Panel = document.getElementById("home");
var current_Color = document.getElementById("homebtn");
current_Color.style.color = "#118ab2";
var panelnum = 1;
menuopen = 0;
mobile = 0;

function showone(on) {
  if (on == 1) {
    document.getElementById("one").style.display = "block";
  } else {
    document.getElementById("one").style.display = "none";
  }
}
function show(panel) {
  if (!mobile) {
    if (panel == 1) {
      if (panel != panelnum) {
        if (current_Panel != null) {
          current_Panel.style.top = "-100%";
        }
        current_Panel = document.getElementById("home");
        current_Color.style.color = "black";
        current_Color = document.getElementById("homebtn");
        current_Color.style.color = "#118ab2";
        current_Panel.style.top = "0%";
        panelnum = panel;
      }
    } else if (panel == 2) {
      if (panel != panelnum) {
        if (current_Panel != null) {
          current_Panel.style.top = "-100%";
        }
        current_Panel = document.getElementById("about");
        current_Color.style.color = "black";
        current_Color = document.getElementById("aboutbtn");
        current_Color.style.color = "#118ab2";
        current_Panel.style.top = "0%";
        panelnum = panel;
      }
    } else if (panel == 3) {
      if (panel != panelnum) {
        if (current_Panel != null) {
          current_Panel.style.top = "-100%";
        }
        current_Panel = document.getElementById("work");
        current_Color.style.color = "black";
        current_Color = document.getElementById("workbtn");
        current_Color.style.color = "#118ab2";
        current_Panel.style.top = "0%";
        panelnum = panel;
      }
    } else if (panel == 4) {
      if (panel != panelnum) {
        if (current_Panel != null) {
          current_Panel.style.top = "-100%";
        }
        current_Panel = document.getElementById("projects");
        current_Color.style.color = "black";
        current_Color = document.getElementById("projectsbtn");
        current_Color.style.color = "#118ab2";
        current_Panel.style.top = "0%";
        panelnum = panel;
      }
    } else if (panel == 5) {
      if (panel != panelnum) {
        if (current_Panel != null) {
          current_Panel.style.top = "-100%";
        }
        current_Panel = document.getElementById("skills");
        current_Color.style.color = "black";
        current_Color = document.getElementById("skillsbtn");
        current_Color.style.color = "#118ab2";
        current_Panel.style.top = "0%";
        panelnum = panel;
      }
    }
  } else {
    // document.getElementById("menu").style.top = "-100%";
    if (panel == 1) {
      document.getElementById("about").scrollIntoView();
      openmenu();
    } else if (panel == 2) {
      document.getElementById("work").scrollIntoView();
      openmenu();
    } else if (panel == 3) {
      document.getElementById("skills").scrollIntoView();
      openmenu();
    } else if (panel == 4) {
      document.getElementById("projects").scrollIntoView();
      openmenu();
    }
  }
}

function openmenu() {
  if (menuopen) {
    document.getElementById("menu").style.top = "-100%";
    document.getElementById("cursorback").style.width = "0";
    document.getElementById("cursorback").style.display = "none";
    menuopen = 0;
  } else {
    document.getElementById("menu").style.top = "0";
    document.getElementById("cursorback").style.display = "block";
    document.getElementById("cursorback").style.width = "100%";
    menuopen = 1;
  }
}
if (
  navigator.userAgentData.mobile == true ||
  window.innerWidth <= window.innerHeight
) {
  document.getElementById("projects").style.left = "0";
  document.getElementById("projects").style.width = "100vw";
  document.getElementById("projects").style.height = "auto";
  document.getElementById("projects").style.position = "relative";
  document.getElementById("skills").style.left = "0";
  document.getElementById("skills").style.width = "100vw";
  document.getElementById("skills").style.height = "auto";
  document.getElementById("skills").style.position = "relative";
  document.getElementById("work").style.left = "0";
  document.getElementById("work").style.width = "100vw";
  document.getElementById("work").style.height = "auto";
  document.getElementById("work").style.position = "relative";
  document.getElementById("about").style.left = "0";
  document.getElementById("about").style.width = "100vw";
  document.getElementById("about").style.height = "auto";
  document.getElementById("about").style.position = "relative";
  document.getElementById("menu").style.top = "-100%";
  document.getElementById("menu").style.width = "100vw";
  document.getElementById("menu").style.position = "fixed";
  document.getElementById("ham").style.display = "block";
  document.getElementById("menu").style.mixBlendMode = "normal";
  document.getElementById("name").style.paddingRight = "4rem";
  document.getElementById("namegreet").style.paddingRight = "4rem";
  document.getElementById("Info").style.paddingRight = "4rem";
  document.getElementById("cursor").style.display = "none";
  document.getElementById("cursorback").style.display = "none";
  mobile = 1;
} else {
  mobile = 0;
}

window.onresize = function () {
  if (
    navigator.userAgentData.mobile == true ||
    window.innerWidth <= window.innerHeight
  ) {
    document.getElementById("projects").style.left = "0";
    document.getElementById("projects").style.width = "100vw";
    document.getElementById("projects").style.height = "auto";
    document.getElementById("projects").style.position = "relative";
    document.getElementById("skills").style.left = "0";
    document.getElementById("skills").style.width = "100vw";
    document.getElementById("skills").style.height = "auto";
    document.getElementById("skills").style.position = "relative";
    document.getElementById("work").style.left = "0";
    document.getElementById("work").style.width = "100vw";
    document.getElementById("work").style.height = "auto";
    document.getElementById("work").style.position = "relative";
    document.getElementById("about").style.left = "0";
    document.getElementById("about").style.width = "100vw";
    document.getElementById("about").style.height = "auto";
    document.getElementById("about").style.position = "relative";
    document.getElementById("menu").style.top = "-100%";
    document.getElementById("menu").style.width = "100vw";
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.mixBlendMode = "normal";
    document.getElementById("ham").style.display = "block";
    document.getElementById("name").style.paddingLeft = "4rem";
    document.getElementById("name").style.paddingRight = "4rem";
    document.getElementById("namegreet").style.paddingRight = "4rem";
    document.getElementById("Info").style.paddingRight = "4rem";
    for (let index = 0; index < 3; index++) {
      document.getElementsByClassName("paneltitle")[index].style.display =
        "block";
    }
    document.getElementById("cursor").style.display = "none";
    document.getElementById("cursorback").style.display = "none";
    mobile = 1;
  } else {
    mobile = 0;
    document.getElementById("projects").style.left = "25%";
    document.getElementById("projects").style.width = "75vw";
    document.getElementById("projects").style.height = "100vh";
    document.getElementById("projects").style.position = "absolute";
    document.getElementById("skills").style.left = "25%";
    document.getElementById("skills").style.width = "75vw";
    document.getElementById("skills").style.height = "100vh";
    document.getElementById("skills").style.position = "absolute";
    document.getElementById("work").style.left = "25%";
    document.getElementById("work").style.width = "75vw";
    document.getElementById("work").style.height = "100vh";
    document.getElementById("work").style.position = "absolute";
    document.getElementById("about").style.left = "25%";
    document.getElementById("about").style.width = "75vw";
    document.getElementById("about").style.height = "100vh";
    document.getElementById("about").style.position = "absolute";
    document.getElementById("menu").style.top = "0%";
    document.getElementById("menu").style.width = "25vw";
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.mixBlendMode = "screen";
    document.getElementById("ham").style.display = "none";
    document.getElementById("name").style.paddingRight = "0";
    document.getElementById("namegreet").style.paddingRight = "0";
    document.getElementById("Info").style.paddingRight = "0";
    document.getElementById("cursor").style.display = "block";
    document.getElementById("cursorback").style.display = "block";
    location.reload();
  }
};

document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});
