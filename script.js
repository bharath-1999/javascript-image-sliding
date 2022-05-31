const panel=document.getElementsByClassName("panel");
console.log(panel);
for(let index=0;index<panel.length;index++){
  panel[index].addEventListener('click',()=>{
    removeActiveClass();
    panel[index].classList.add('active');
    // console.log(  panel[index].classList);
  })
}
function removeActiveClass(){
  for(let index=0;index<panel.length;index++){
  //  panel[ind].classList.remove('active');
//  console.log(ind+" "+panel[ind].classList);
 panel[index].classList.remove('active');
 //console.log("hhbj");
  }
}
