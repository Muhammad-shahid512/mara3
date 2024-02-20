
let btn=document.querySelector(".btn");
let check=0;


btn.addEventListener("click",function()
{
    if(check==0)
    {
        document.body.style.backgroundColor="#03032b";
        document.body.style.color="white"
        btn.innerHTML="Enable light mode"
  check=1;
    }
    else{

        document.body.style.backgroundColor="white";
        document.body.style.color="black"
        btn.innerHTML="Enable dark mode"

        check=0;


    }

})