// Script.js
// create a new QRCode instance
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Initial QR code generation
// with a default message
qrcode.makeCode("Why did you scan me?");

// Function to generate QR
// code based on user input
function generateQr() {
  if (
    document.querySelector("input").value === "" ||
    document.querySelector("input").value === " "
  ) {
    alert("Input Field Can not be blank!");
  } else {
    qrcode.makeCode(document.querySelector("input").value);
  }
}
