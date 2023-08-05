// slider open close js code 
let openbtn = document.querySelector(".navbars #menu");
let closebtn = document.querySelector(".nav-links .fa-xmark");
let navlink = document.querySelector(".nav-links ");

openbtn.addEventListener("click",()=>{
    navlink.style.left = "0";
});
closebtn.addEventListener("click",()=>{
    navlink.style.left = "-100%";
})

// $("openbtn").hide();



$(".search").hide();
// search bar
$("#closo").click(function(){
    $(".search").hide();
  });
  
  $("#opense").click(function(){
    $(".search").show();
  });




// function closobtn(){
//     document.querySelector('.search').style.visibility='hidden';
// }

// function seachbtn(){
//     document.querySelector('.search').style.visibility='visible';
// }
// function closobtn(){
//     document.querySelector('.search').style.display='none';
// }

// function seachbtn(){
//     document.querySelector('.search').style.display='';
// }
