
let v=0;
const mobilemenu=document.querySelector(".mobilemenu");
const sections=document.querySelector(".sections");
mobilemenu.addEventListener("click",(e)=>{
    console.log("click");
    if(sections.getAttribute("active")==="false")
    sections.setAttribute("active","true")
    else sections.setAttribute("active","false")
});

let colors=[111111,333333,666666];
let backgrounds=[{
    path:"M 0 2 l 0 -1 q 0.3 -0.5 1 0 q 0.7 0.5 1 0 l 0 1Z",
    color:[250,250,0],
    text:"Web Developer",
    top:"40vh",
    left:"60vw"
},{
    path:"M 0 2 l 0 -1 q 0.3 0.8 1 0 q 0.7 -0.8 1 0 l 0 1Z",
    color:[250,150,0],
    text:"Electrical Engineer",
    top:"40vh",
    left:"20vw"
},{
    path:"M 0 2 l 0 -1.2 q 0.3 0.2 1 0.3 q 0.5 0 1 -1 l 0 2Z",
    color:[150,250,0],
    text:"Graphic Designer",
    top:"40vh",
    left:"50vw"
}
];

function init(){
    let wave=`<svg>`;
    for (let i = 0; i < colors.length; i++) {
        wave+=`<path fill=#${colors[i]} d="${backgrounds[v].path}" />`
    }
    wave+=`</svg><h1 style="color:white;font-family: cursive;position:absolute;top:${backgrounds[v].top};left:${backgrounds[v].left};transition:1s;z-index:1;user-select:none;">${backgrounds[v].text}</h1>`
    document.querySelector(".background").innerHTML=wave;
    update(2);
}
function update(v){
    const w=window.innerWidth;
    const h=window.innerHeight;
    let paths=document.querySelectorAll("svg path");
    paths.forEach((p,i)=>{
    p.style.setProperty( "d",`path("${backgrounds[v].path}")` );
    p.style.setProperty( "transform",`translate(${i*10}px,${i*150}px) rotate(8deg) scale(${w<500?300:1030},${w<500?300:500})` )
    p.style.setProperty( "transition","1s" )
    p.addEventListener("mouseenter",(e)=>{
    p.style.setProperty("fill",`rgba(${backgrounds[v].color[0]},${backgrounds[v].color[1]},${backgrounds[v].color[2]},${(i+1)/4})`);
    })
    p.addEventListener("mouseleave",(e)=>{
    p.style.setProperty("fill",`#${colors[i]}`)
    })
    let h1=document.querySelector("h1");
    h1.style.setProperty("top",backgrounds[v].top);
    h1.style.setProperty("left",backgrounds[v].left);
    h1.innerText=backgrounds[v].text;
    })
}
init();


window.addEventListener("wheel",scroll );
document.querySelector("h1").addEventListener('touchstart', scroll);
function scroll(e){ 
    v+=e.deltaY>0?1:-1;
    if(v<0)v=backgrounds.length-1;
    update(v%backgrounds.length);
 }