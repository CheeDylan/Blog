var button = document.getElementById("button")
let i = 0;
function isclick(){
    i += 1
    if(i%2 != 0){
        button.setAttribute("class", "red");
    }
    else{
        button.setAttribute("class", "blue");
    }
}
let button2 = document.getElementsByClassName("hehe")
let e = 0;
function hasclick(){
    e += 1;
    console.log(e)
    let r = document.getElementsByClassName("peepee")

}
let button3 = document.getElementsByClassName("hehe2")
function wasclick(){
    console.log("pls display")
    let newdiv = document.createElement("div");
    newdiv.classList.add("peepee");
    newdiv.innerHTML = `pressed ${e} times`;
    document.body.appendChild(newdiv);
    
}