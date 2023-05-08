const expandBtns=document.querySelectorAll(".card-item span");
expandBtns.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{
        for(let i=0;i<expandBtns.length;i++){
            if(index==i){
                expandBtns[i].parentElement.classList.toggle("expand");
            }
            else{
                expandBtns[i].parentElement.classList.remove("expand");  
            }
        }
    })
})

 const submitBtn = document.getElementById("submit");
      submitBtn.addEventListener("click", (event) => {
        event.preventDefault(); // prevent form from submitting and refreshing page
        alert("Form submitted!");
      });