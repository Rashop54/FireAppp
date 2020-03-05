
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVeD1uaTUNqRvIsVZrs6FrO60ilYC7RZ8",
  authDomain: "form-b64f1.firebaseapp.com",
  databaseURL: "https://form-b64f1.firebaseio.com",
  projectId: "form-b64f1",
  storageBucket: "form-b64f1.appspot.com",
  messagingSenderId: "860468339761",
  appId: "1:860468339761:web:9be729b3e9b7e1fc2b6110",
  measurementId: "G-CBMNCR6VL2"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}