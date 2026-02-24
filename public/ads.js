
function generateUniqueQR(data) {
  const key = `qr_${data.email}`; 
  
  const existingQR = localStorage.getItem(key);
  if (existingQR) {
    return JSON.parse(existingQR);
  }

  
  const qrData = JSON.stringify({
    username: data.name,
    email: data.email,
    number: data.number,
    date: data.date,
    booking: data.booking,
    token: crypto.randomUUID()  
  });

  
  localStorage.setItem(key,JSON.stringify(qrData));

  return qrData;
}



function generateQRCode() {
  
  const data = {
    name: name,     
    email: email,   
    number: number,
    date: date,
    booking: booking
  };

 
  const qrData = generateUniqueQR(data);

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; 

  
  new QRCode(qrContainer, {
    text: qrData, 
        width: 100,
    height: 100,
  });
}


const urlparams = new URLSearchParams(window.location.search);
const name=urlparams.get('name');
const email=urlparams.get('email');
const number=urlparams.get('number');
const date=urlparams.get('date');
const booking=urlparams.get('booking');


const slotkey =`${date}_${booking}`;
const userkey = `${email}_${date}_${booking}`;
let bookings = JSON.parse(localStorage.getItem("bookings"))||{};
bookings[slotkey]=bookings[slotkey]||[]; 




if(bookings[slotkey].includes(userkey)){
    alert(" you already have a token for this slot !");
    window.location.href="ads.html"; 
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


localStorage.setItem("bookings", JSON.stringify(bookings));




console.log(value)

function downloadDiv() {
    const element = document.getElementById("para"); 
    html2canvas(element).then(canvas => {
        const link = document.createElement("a");
        link.download = "downloaded-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

