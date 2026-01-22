// const submit= document.getElementById("generate_token")

//const { json } = require("express");

// submit.addEventListener("click",()=>{
    
// })
function generateUniqueToken(data) {
    return btoa(
        data.name +
        data.email +
        data.number +
        data.date +
        data.booking +
        Date.now()
    );
}
function getRandomInt(){
    return Math.round(Math.random()*10000000000);
}
const urlparams = new URLSearchParams(window.location.search);
const name=urlparams.get('name');
const email=urlparams.get('email');
const number=urlparams.get('number');
const date=urlparams.get('date');
const booking=urlparams.get('booking');
const slotkey = `${date}_${booking}`;


let bookings=JSON.parse(localStorage.getItem("bookings"))||{};
bookings[slotkey]=bookings[slotkey]||[]; // get storage

//Limit Check (max 3)
if(bookings[slotkey].length >=3){
    alert(" This slot is already full (only 3 allowed)");
    window.location.href="ads.html";//GO BACK 
}

//localStorage.setItem("bookings",json.stringify(bookings));
localStorage.setItem("bookings", JSON.stringify(bookings));


document.getElementById('displayUsername').textContent =name; 
 document.getElementById('displayEmail').textContent = email;
 document.getElementById('number').textContent=number
 document.getElementById('date').textContent=date
 document.getElementById('booking').textContent=booking

//console.log(getRandomInt())
const value=getRandomInt().toString()
console.log(value)
const qrcode=new QRCode(document.getElementById("qrcode"),{
    width:128,
    height:128,
    colorDark:"#000000ff",
    colorLight:"#ffffffff",
    correctLevel:QRCode.CorrectLevel.H
});
 qrcode.makeCode(value)
function downloadDiv() {
    const element = document.getElementById("para"); 
    html2canvas(element).then(canvas => {
        const link = document.createElement("a");
        link.download = "downloaded-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
// const admin = require("firebase-admin");
// const serviceAccount = require("../serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Firestore reference
// const db = admin.firestore();

// Optional: Realtime Database
// const db = admin.database();

// console.log("Firebase connected successfully");
