// const submit= document.getElementById("generate_token")




// submit.addEventListener("click",()=>{
    
// })
// function generateUniqueToken(data) {
//     return btoa(
//         data.name +
//         data.email +
//         data.number +
//         data.date +
//         data.booking +
//         Date.now()
//     );
// }
// function getRandomInt(){
//     return Math.round(Math.random()*10000000000);
// }
function generateUniqueQR(data) {
  const key = `qr_${data.email}`;  // unique key per email

  // If QR already exists, return it
  const existingQR = localStorage.getItem(key);
  if (existingQR) {
    return JSON.parse(existingQR);
  }

  // Create new QR data (you can also hash it)
  const qrData = JSON.stringify({
    username: data.name,
    email: data.email,
    number: data.number,
    date: data.date,
    booking: data.booking,
    token: crypto.randomUUID()  // unique token
  });

  // Save in local storage
  localStorage.setItem(key,JSON.stringify(qrData));

  return qrData;
}



function generateQRCode() {
  // USE THE URL VARIABLES WE CAPTURED ALREADY
  const data = {
    name: name,      // Uses the 'name' variable from URL
    email: email,    // Uses the 'email' variable from URL
    number: number,
    date: date,
    booking: booking
  };

  // Pass this data to your unique generator
  const qrData = generateUniqueQR(data);

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // Clear container just in case

  // This library automatically creates the <img> tag inside your div
  new QRCode(qrContainer, {
    text: qrData, // qrData is already a JSON string from your function
    width: 100,
    height: 100,
  });
}

// function generateQRCode() {
//   const data = {
//     username: document.getElementById('name').value,
//     email: document.getElementById('email').innerText,
//     number: document.getElementById('number').innerText,
//     date: document.getElementById('date').innerText,
//     booking: document.getElementById('booking').innerText,
//   };

//   const qrData = generateUniqueQR(data);

//   const qrContainer = document.getElementById("qrcode");
//   qrContainer.innerHTML = "";

//   new QRCode(qrContainer, {
//     text: JSON.stringify(qrData),
//     width: 180,
//     height: 180,
//   });
// }

const urlparams = new URLSearchParams(window.location.search);
const name=urlparams.get('name');
const email=urlparams.get('email');
const number=urlparams.get('number');
const date=urlparams.get('date');
const booking=urlparams.get('booking');
// const slotkey = `${date}_${booking}`;

const slotkey =`${date}_${booking}`;
const userkey = `${email}_${date}_${booking}`;
let bookings = JSON.parse(localStorage.getItem("bookings"))||{};
bookings[slotkey]=bookings[slotkey]||[]; // get storage

//Limit Check (max 3)


if(bookings[slotkey].includes(userkey)){
    alert(" you already have a token for this slot !");
    window.location.href="ads.html";//GO BACK 
}else if(bookings[slotkey].length>=3){
  alert("This slot is already full (only 3 allowed)");
  window.location.href = "ads.html";
}

else {
     bookings[slotkey].push(userkey);
     localStorage.setItem("bookings",JSON.stringify(bookings));

}
document.getElementById('displayusername').textContent ='name: ' +name;
 document.getElementById('displayEmail').textContent = 'email:' +email;
 document.getElementById('number').textContent='number:'  +number;
 document.getElementById('date').textContent='date:'   +date;
 document.getElementById('booking').textContent='booking:'  +booking;


generateQRCode();

//localStorage.setItem("bookings",json.stringify(bookings));
localStorage.setItem("bookings", JSON.stringify(bookings));



//console.log(getRandomInt())
// const value=getRandomInt().toString()
console.log(value)
// const qrcode=new QRCode(document.getElementById("qrcode"),{
//     width:128,
//     height:128,
//     colorDark:"#000000ff",
//     colorLight:"#ffffffff",
//     correctLevel:QRCode.CorrectLevel.H
// });
//  qrcode.makeCode(value);
function downloadDiv() {
    const element = document.getElementById("para"); 
    html2canvas(element).then(canvas => {
        const link = document.createElement("a");
        link.download = "downloaded-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

// const serviceAccount = require("../serviceAccountKey.json");



// // Firestore reference
// const db = admin.firestore();

// Optional: Realtime Database
// const db = admin.database();

// console.log("Firebase connected successfully")
