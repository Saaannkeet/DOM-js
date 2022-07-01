//que1:: Write the code to access element which is having id as "text"

document.getElementById ("text");

//que2::Write the code to access element which is having tag as "h1"

document.getElementsByTagName ("h1");


// que3::write the code to access element which is having class as "box".
document.getElementsByClassName("box")

// que4:: <h1>HELLO</h1>
      //  change the heading from "HELLO" to "Hello World" using DOM function 
     let change =  document.getElementsByClassName("change");
      change.innerText='Hello World';



//que5:: Create an HTML page having content as Hello world and a button named 
// Replace Text. When user will click on this button page content should
//  be changed to "Welcome to Elevation academy"

 const btn = document.getElementById('btn')
btn.addEventListener('click',function(){
  world.innerText='Welcome to Elevation academy';

})


// que6:: <h1>Hello</h1>
//        Add one style attribute and give text color as red and id attribute and give the id value 
//        "heading" in the above given h1 tag using DOM functions.


const element = document.getElementById("heading");
element.style.color ="red";


// que8::Create a select drop down for selecting Year 20-21 ,21-22 etc. print item text selected. 





// que9::write code to implement timer clock using JS -- display 
// HH:MM:SS --the time should keep updating every second. 

function displayclock (){
  let time = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();


if(hrs>12){
  hrs = hrs -12;
}

  if(hrs==0){
    hrs = 12;
  }
  document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
}

setInterval(displayclock,1000)

// que10::Creat three cardon html page and arrange them using flex property in row 
// or horizontal direction and also creat button at the bottom named"Changed flex direction"
// when user click on this button card arraanged should be changed to vertical direction  
const buttton2 =document.getElementById('btn2');
buttton2.addEventListener('click',() =>{
     const flex =document.getElementById('container');
     flex.style.flexDirection = "column";
});

// que11::creat a drop down for selecting year 20-21,21-22etc. print the item text selected. 

function getadd()
{
     const year = document.getElementById('selected');
     year.innerHTML=('Select '+form.choose[form.choose.selectedIndex].value);
}
// que12::// Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95

function form(){
    var form = document.createElement("form")
    form.setAttribute("method","get")
    form.setAttribute("action","submit")
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
  

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com");
    
    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("placeholder","91-87952636");
    phoneNo.setAttribute("pattern","[91]{2}[0-9]{10}");
   
    var DOB = document.createElement("input");
    DOB.setAttribute("type","date");
    DOB.setAttribute("name","DOB");
    DOB.setAttribute("placeholder","DOB");
    DOB.setAttribute("min","1995-01-01");
   

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phoneNo);
    form.appendChild(DOB);
    form.appendChild(submit);
    document.getElementsByClassName("form")[0]
    .appendChild(form);
   
}
form();

