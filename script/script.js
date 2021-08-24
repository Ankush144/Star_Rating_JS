const stars = document.querySelectorAll('.fas');
var x=true;
/* hover on x star then fill the starts from 0 to x */
/* mouseout on x start then remove the class from the all stars */
/* any star greater than 1 then all the starts before it should be filled */
for(let i=0;i<5;i++){
    if(x===true){
        stars[i].addEventListener("mouseover",function(){
            for(let j=0;j<=i;j++){
                stars[j].classList.add("gold");
            } 
        
        });
        stars[i].addEventListener("mouseout",function(){
            for(let j=0;j<=i;j++){
                stars[j].classList.remove("gold");
            } 
        
        });
    }
    stars[i].addEventListener("click",function(){
      
            for(let j=0;j<5;j++){
                stars[j].classList.remove("gold");
                stars[j].classList.remove("orange");
            }
            for(let j=0;j<=i;j++){
                stars[j].classList.add("orange");
                let output = document.querySelector(".output");
                output.innerHTML = "Ratings: "+(i+1)+" stars";
            } 
            x=false;
    });
}
// load once more
const btn = document.querySelector(".next");
btn.addEventListener("click",function(){
    location.reload();
});