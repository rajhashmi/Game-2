const rocket = document.querySelector('.rocket');

let stars;

function get_Random_Number(min , max){
  return Math.floor(Math.random() * (max - min) + min);
}


function moveStar(stars){
  requestAnimationFrame(setInterval(()=>{
    stars.forEach((element)=>{
      let replaceStr = element.style.top.replace("px", "")
      if(replaceStr > (window.screen.height) - 50){
        element.style.top = '0px'
      }else{
        element.style.top = `${++replaceStr}px`
      }

    })
  },10))
  
}


function loadStar(){
  const fragment = document.createDocumentFragment();
  const size = {
    x: window.innerWidth,
    y: window.innerHeight
  }
  console.log(size);
  for(let i = 0; i <= 100; i++){
    const star = document.createElement('span');
    star.style.top = `${get_Random_Number(0,size.y)}px`;
    star.style.left = `${get_Random_Number(0,size.x)}px`;
    star.classList.add("star")
    fragment.appendChild(star)
  };
  document.body.appendChild(fragment)
  stars = document.querySelectorAll(".star");
  moveStar(stars)
}

window.addEventListener('mousemove', (event)=>{
    // console.log(event.clientX);
    rocket.style.left = event.clientX + "px"
})


// setInterval(fire,1000)

window.addEventListener('DOMContentLoaded', loadStar)