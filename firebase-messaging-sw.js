importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js");

const brokenApiKey = "IzaSyDYBQrC1GFMYtsWtR8tOTanfE09I4alX50";
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "A"+brokenApiKey,
  authDomain: "using-firebase-service.firebaseapp.com",
  databaseURL: "https://using-firebase-service-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "using-firebase-service",
  storageBucket: "using-firebase-service.appspot.com",
  messagingSenderId: "624023469269",
  appId: "1:624023469269:web:57354f114e4f82e5f1765c",
  measurementId: "G-JMY3GKP4RH"
};
//
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  // const notificationTitle = '';
  // const notificationOptions = {       body: ''       };
  return self.registration.showNotification();
});
