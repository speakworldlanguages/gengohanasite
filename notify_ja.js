// MODULE OR NO MODULE ???
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js"; // No need: get, child, update, remove
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-messaging.js";

const brokenApiKey = "IzaSyDYBQrC1GFMYtsWtR8tOTanfE09I4alX50";
// Your web app's Firebase configuration
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

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const messaging = getMessaging(firebaseApp);
const db = getDatabase();

var index = new Date();
var tokenToBeSaved = "0";
function insertData() {
  set(ref(db,"ja/"+index.toUTCString()),{"Token":tokenToBeSaved}).then(()=>{console.log("token is saved");}).catch((error)=>{console.log("couldn't save token: "+error);});
}
const brokenVapidKey = "B7_p1Mfhfo4YbGkmKRDjemU0tPEGcZ3zzysITjcrPMzjR3x38cKyRmzG1T7ID3YdXC-QqSRgxLntBmAJ8tkn04";

const clickToSubscribe = document.getElementById('footerNotificationID');
clickToSubscribe.addEventListener("click",subscribeUser); // Do we need once:true???
const reg = await getSW();
function getSW() {  return navigator.serviceWorker.getRegistration('service-worker.js');  }
function subscribeUser() {
  Notification.requestPermission().then(permission=>{
    if (permission == "granted") {
      clickToSubscribe.classList.add("footerGetLost"); // Disappear animation via transition (not keyframes)
      setTimeout(function () { clickToSubscribe.parentNode.removeChild(clickToSubscribe); },500);
      localStorage.isSubscribedToNotifications = "yes"; // Used in js_for_pwa.js
      getToken(messaging, {vapidKey:"B"+brokenVapidKey}).then((currentToken) => {
        tokenToBeSaved = currentToken;
        insertData();
        // var notification = new Notification('Great', { body: "You will be notified when new lessons are online", icon: "icon_for_pwa_en.png" }); // THIS DOESN'T WORK!
        reg.showNotification('よかった', { body: "新しいレッソンをここで知らせます", icon: "icon_for_pwa_ja.png" });

      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    }
  });
}

onMessage(messaging, (payload) => {
  // What to do if notification arrives when user is active and playing a game
  // Nothing or wait until user is idle
});
