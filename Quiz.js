const inputname=document.getElementById("name");
const slec=document.getElementById("check1")

const regex=/^[a-z A-Z]{6,20}$/;
 const form=document.forms;
 console.log(form)
form[0].addEventListener('submit',(e)=>{

        
    if (inputname.value ===''|| inputname.value===null)
    {
    
        alert("zone name empty write a name")
        e.preventDefault();
    }
  
else if(!regex.test(inputname.value)){
    alert("error")
    e.preventDefault();
    
}
})


