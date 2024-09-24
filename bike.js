function pswd(){
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const passworderror = document.getElementById("passworderror");
const loginerror = document.getElementById("loginerror");
    
    if (username === "Raviraj" && password === "Admin") {
        return true;
    } else {
        loginerror.innerHTML="*Incorrect credientials"
        return false;
    }
}


const toggle = document.getElementById("tge");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const het = document.getElementById("het");
const het1 = document.getElementById("het1");
toggle.addEventListener("click",()=>{
    col1.classList.toggle("active2");
    col2.classList.toggle("active3");
    het.classList.toggle("height");
    het1.classList.toggle("height1");
    
})



function pro(){
    let fn_stat = false;
    if(fn !== ''){
        alert("first name is updated");
        fn_stat=true;
    }else{
        fn_stat=true;
    }
    
    
    
    fn.placeholder="asf";
    event.preventDefault();
    
}