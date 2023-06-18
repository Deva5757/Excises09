//Task01 Ternary operator
alert("Start 1st Task")
function Student(username, access){
    access=="yes"?console.log(username.toUpperCase() + " Your Live class scheduled in Entri App! Check Out!"):console.log(username.toUpperCase() + " Your live class yet to begin!")
}
let sname=prompt("Enter your Name");
let Status=prompt("YES, NO");
Student(sname, Status);

//Task02 Mentor name
alert("Start 2st Task")
function showSchedule(batchcode){
    let scheduled;
    let mentor;
    if(batchcode==="B1"){
        scheduled="Wednesday & Friday";
        mentor="Sindhu";
    }
    else if(batchcode==="B2"){
        scheduled="Tuesday & Thursday";
        mentor="Rufsal";
    }
    else if(batchcode==="B3"){
        scheduled="Monday & Sunday";
        mentor="Anushya";
    }
    else{
        scheduled="Days not Available!";
        mentor="Mentor not Available!";
    }
    console.log("Class_Schedule: "+scheduled+" Mentor: " + mentor);
}
let batch=prompt("Enter Your Batch Available(B1, B2, B3)");
let x=batch.toUpperCase()
showSchedule(x)

//Task03 Times_Up
function timesup(tn){
    for(i=0;i<=tn;i++){
        if(i>=tn){
           alert("Times Up! "+ tn)

        }
        else{
            console.log("Count "+i)
        }
    }
}
let z=prompt("Enter your Count")
timesup(z)

//Task04 Change Uppercase
alert("Start 4th Task")
function change_case(text){
    console.log("Changed your text "+ text.toUpperCase())
}
var q=prompt("Enter Your Name");
change_case(q)
