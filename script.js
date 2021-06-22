let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("button");

window.addEventListener("mousemove", cursor);

function cursor(e){
  gsap.to(mouseCursor, 0.4, {
    x: e.clientX,
    y: e.clientY
  });
}

btn.forEach(link => {
  link.addEventListener("mouseover", ()=>{
    mouseCursor.classList.add("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale: 2
    });
  });

  link.addEventListener("mouseleave", ()=>{
    mouseCursor.classList.remove("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale: 1
    });
  });
});
