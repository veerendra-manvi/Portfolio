// typing animation

var typed = new Typed(".typing",{

strings:[
"Java Full Stack Developer",
"Software Engineer",
"Web Developer"
],

typeSpeed:80,
backSpeed:40,
loop:true

});


// particle background

particlesJS("particles-js",{

particles:{
number:{value:80},
color:{value:"#38bdf8"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.4,
width:1
},

move:{
enable:true,
speed:3
}

},

interactivity:{
events:{
onhover:{
enable:true,
mode:"repulse"
}
}
}

});


// circular skill indicators

document.querySelectorAll(".circle").forEach(circle=>{

let percent=circle.getAttribute("data-percent");

circle.style.background=
`conic-gradient(#38bdf8 ${percent*3.6}deg,#1e293b 0deg)`;

});