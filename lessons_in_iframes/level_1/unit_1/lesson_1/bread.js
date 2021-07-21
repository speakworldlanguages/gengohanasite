/*_______________CODE FOR THE VERY FIRST LESSON_________________*/
if (parent.deviceDetector.isMobile){
  // MOBILES --- Remove the “GO TO PREVIOUS” button if the user has arrived by coming backwards from 1-1-2
  if (parent.containerDivOfTheNavigationMenu.childNodes.length==4) { // FOUR is because 1 is GO BACK, 2 is HOME, 3 is PROGRESS CHART, 4 is INFO & FINANCIALS.
    parent.removeGoBackToPreviousButtonFromTheNavigationMenu();
  }
  else {
    // --- Add HOME button to the sliding navigation menu if user has arrived normally from the main menu as iframe.src was blank.html whose title is "&nbsp";
    parent.addHomeButtonToTheNavigationMenu();
  }
}else {
  // DESKTOPS --- Remove the “GO TO PREVIOUS” button if the user has arrived by coming backwards from 1-1-2
  if (parent.containerDivOfTheNavigationMenu.childNodes.length==6) { // SIX is because 1 is SPEED, 2 is GO BACK, 3 is HOME, 4 is PROGRESS CHART, 5 is INFO & FINANCIALS, 6 is VOLUME.
    parent.removeGoBackToPreviousButtonFromTheNavigationMenu();
  }
  else {
    // --- Add HOME button to the sliding navigation menu if user has arrived normally from the main menu where iframe.src used to be blank.html whose title is "&nbsp";
    parent.addHomeButtonToTheNavigationMenu();
  }
}
/*______________END OF CODE FOR THE VERY FIRST LESSON______________*/

/*___________________STANDARD CODE___________________*/
// This is DEFERRED in html
// All settings here will depend on the content of the lesson
let theNewWordUserIsLearningNowAndPossibleMishaps; // Get this from txt file
// CAUTION: parent.theLanguageUserIsLearningNow variable depends on localStorage data being available. See js_for_all_container_parent_htmls.js
const filePathForTheWordOrPhrase = "../../../../speech_recognition_dictionary/"+parent.theLanguageUserIsLearningNow+"/1-1-1-bread.txt";
// See js_for_fetch_api_character_encoding.js for the headers setting.
fetch(filePathForTheWordOrPhrase,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){ theNewWordUserIsLearningNowAndPossibleMishaps = contentOfTheTxtFile; });

/* ___AUDIO ELEMENTS___ */ //...Sound player (Howler) exists in the parent html. So the path must be relative to the parent html. Not to the framed html.
const say1say2Path = "audio_files_for_listening/"+parent.theLanguageUserIsLearningNow+"/level_1/unit_1/lesson_1/bread_1-2.mp3";
const say3say4Path = "audio_files_for_listening/"+parent.theLanguageUserIsLearningNow+"/level_1/unit_1/lesson_1/bread_3-4.mp3";
const say5say6Path = "audio_files_for_listening/"+parent.theLanguageUserIsLearningNow+"/level_1/unit_1/lesson_1/bread_5-6.mp3";
const say7say8Path = "audio_files_for_listening/"+parent.theLanguageUserIsLearningNow+"/level_1/unit_1/lesson_1/bread_7-8.mp3";

const sayAB = new parent.Howl({  src: [say1say2Path]  });
const sayCD = new parent.Howl({  src: [say3say4Path]  });
const sayEF = new parent.Howl({  src: [say5say6Path]  });
const sayGH = new parent.Howl({  src: [say7say8Path]  });

const successTone = new parent.Howl({  src: ['user_interface/sounds/success1.mp3']  });
const notificationDingTone = new parent.Howl({  src: ['user_interface/sounds/ding.mp3']  });
function unloadTheSoundsOfThisLesson() { // Call this as the last thing before leaving.
  notificationDingTone.unload();
  successTone.unload();
  sayGH.unload();
  sayEF.unload();
  sayCD.unload();
  sayAB.unload();
}

/* ___VISUAL ELEMENTS___ */
const imgA = document.getElementById("imageA");
const imgB = document.getElementById("imageB");
const imgC = document.getElementById("imageC");
const imgD = document.getElementById("imageD");
const imgE = document.getElementById("imageE");
const imgF = document.getElementById("imageF");
const imgG = document.getElementById("imageG");
const imgH = document.getElementById("imageH");
const imgI = document.getElementById("imageI");
const imgJ = document.getElementById("imageJ");
const the1stDivThatWillAppearWhenMicrophoneStartsListening = document.getElementById('idOfTheFullViewportDivWithNOWYOUSAYITAnimationInsideLayer1');
const the2ndDivThatWillAppearWhenMicrophoneStartsListening = document.getElementById('idOfTheFullViewportDivWithNOWYOUSAYITAnimationInsideLayer2');
const the1stImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne = document.getElementById('idOfTheNowYouSayItAnimationLayer1');
const the2ndImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne = document.getElementById('idOfTheNowYouSayItAnimationLayer2');
const giveUpAndContinueButtonIsInsideThisDiv = document.getElementById('giveUpSkipNextContinueButtonDivID');
const theWhitePreexitDivWithAHiddenGlobeInside = document.getElementById('idOfTheWhiteCoverDivBeforeExitAtTheEndOfLesson');
const theGlobeInsideTheWhiteOutroIMG = document.getElementById('theGlobeInsideTheWhiteOutroID');
function unloadTheImagesOfThisLesson() { // Call this as the last thing before leaving.
  imgA.src = onePixelTransparentGif;
  imgB.src = onePixelTransparentGif;
  imgC.src = onePixelTransparentGif;
  imgD.src = onePixelTransparentGif;
  imgE.src = onePixelTransparentGif;
  imgF.src = onePixelTransparentGif;
  imgG.src = onePixelTransparentGif;
  imgH.src = onePixelTransparentGif;
  imgI.src = onePixelTransparentGif;
  imgJ.src = onePixelTransparentGif;
}
// These are already hidden with display: none and here we get them ready to fade in using classList.remove() when it’s time.
imgC.classList.add("toZeroOpacity");
imgD.classList.add("toZeroOpacity");
imgE.classList.add("toZeroOpacity");
imgF.classList.add("toZeroOpacity");
imgG.classList.add("toZeroOpacity");
imgH.classList.add("toZeroOpacity");
imgI.classList.add("toZeroOpacity");
imgJ.classList.add("toZeroOpacity");
// These are already hidden with left: -9999px and here we get them ready to fade in using classList.remove() when it’s time.
the1stDivThatWillAppearWhenMicrophoneStartsListening.classList.add("toZeroOpacity");
the2ndDivThatWillAppearWhenMicrophoneStartsListening.classList.add("toZeroOpacity");

/* ___PROGRESSION___ */
window.addEventListener("load",function(){   loadingIsCompleteFunction();   }, { once: true });
// Desktop users can change the speed; mobile users can't. Because the mobile GUI has to stay simple.
function loadingIsCompleteFunction()
{
  // Stop and notify the user if necessary; otherwise just continue.
  if (parent.theLanguageUserIsLearningNow == "en") { // Display the explanation about accents for users who want to learn English.
    const pathOfNotificationAboutBritishVsAmerican = "../../../../user_interface/text/"+userInterfaceLanguage+"/1-1-1_british_vs_american.txt";
    fetch(pathOfNotificationAboutBritishVsAmerican,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){
      // Display notification instead of alert(contentOfTheTxtFile);
      createAndHandleNotificationBox(); // See js_for_all_iframed_lesson_htmls.js
      putNotificationTxtIntoThisP.innerHTML = contentOfTheTxtFile;
      // Continue when user clicks or touches OK
      // createAndHandleNotificationBox() will start the lesson 1.5 seconds after the button is clicked
    });
    // Put something like [OK], [Got it], [I see], [Oh really?], [Wow], [That's interesting] etc into the button.
    const pathOfOkCloseTheBox = "../../../../user_interface/text/"+userInterfaceLanguage+"/0-ok_i_understand.txt";
    fetch(pathOfOkCloseTheBox,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){
      okButtonToCloseTheNotification.innerHTML = contentOfTheTxtFile;
    });
  } else if (parent.theLanguageUserIsLearningNow == "zh") { // Display the warning about intonations to users who want to learn the Ren language.
    const pathOfNotificationAboutRenIntonation = "../../../../user_interface/text/"+userInterfaceLanguage+"/1-1-1_ren_intonation.txt";
    fetch(pathOfNotificationAboutRenIntonation,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){
      // Display notification instead of alert(contentOfTheTxtFile);
      createAndHandleNotificationBox(); // See js_for_all_iframed_lesson_htmls.js
      putNotificationTxtIntoThisP.innerHTML = contentOfTheTxtFile;
      // Continue when user clicks or touches OK
      // createAndHandleNotificationBox() will start the lesson 1.5 seconds after the button is clicked
    });
    // Put something like [OK], [Got it], [I see], [Oh really?], [Wow], [That's interesting] etc into the button.
    const pathOfOkCloseTheBox = "../../../../user_interface/text/"+userInterfaceLanguage+"/0-ok_i_understand.txt";
    fetch(pathOfOkCloseTheBox,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){
      okButtonToCloseTheNotification.innerHTML = contentOfTheTxtFile;
    });
  } else {
    startTheLesson(); // PERHAPS: It would be better to use async await in js_for_all_iframed_lesson_htmls
  }
}

function startTheLesson()
{
  setTimeout(function(){ sayAB.play(); }, 1750); // first thing that will be heard
  setTimeout(goFromABtoCD,6500*parent.speedAdjustmentCoefficient); // See js_for_the_sliding_navigation_menu.js
}

function goFromABtoCD()
{
  setTimeout(function(){ sayCD.play(); }, 2750); // after 1s fade out plus 1s fade in
  imgA.classList.add("toZeroOpacity"); // It takes 1s: See css_for_new_vocabulary_with_photos to find "oneOfTheTwoDivsThatContainSquarePictures img"
  imgB.classList.add("toZeroOpacity");
  setTimeout(betweenABandCD,1000);
}

function betweenABandCD()
{
    imgA.style.display = "none";
    imgB.style.display = "none";
    imgC.style.display = "initial";
    imgD.style.display = "initial";
    setTimeout(waitALittleFunc,100);
    function waitALittleFunc(){
    imgC.classList.remove("toZeroOpacity");
    imgD.classList.remove("toZeroOpacity");
    }
    setTimeout(goFromCDtoEF,7500*parent.speedAdjustmentCoefficient);
}

function goFromCDtoEF()
{
  setTimeout(function(){ sayEF.play(); }, 2750);
  imgC.classList.add("toZeroOpacity");
  imgD.classList.add("toZeroOpacity");
  setTimeout(betweenCDandEF,1000);
}

function betweenCDandEF()
{
  imgC.style.display = "none";
  imgD.style.display = "none";
  imgE.style.display = "initial";
  imgF.style.display = "initial";
  setTimeout(waitALittleFunc,100);
  function waitALittleFunc(){
  imgE.classList.remove("toZeroOpacity");
  imgF.classList.remove("toZeroOpacity");
  }
  setTimeout(goFromEFtoGH,6600*parent.speedAdjustmentCoefficient);
}

function goFromEFtoGH()
{
  setTimeout(function(){ sayGH.play(); }, 2750);
  imgE.classList.add("toZeroOpacity");
  imgF.classList.add("toZeroOpacity");
  setTimeout(betweenEFandGH,1000);
}

function betweenEFandGH()
{
  imgE.style.display = "none";
  imgF.style.display = "none";
  imgG.style.display = "initial";
  imgH.style.display = "initial";
  setTimeout(waitALittleFunc,100);
  function waitALittleFunc(){
  imgG.classList.remove("toZeroOpacity");
  imgH.classList.remove("toZeroOpacity");
  }
  setTimeout(goFromGHtoIJ,8500*((parent.speedAdjustmentCoefficient+1)/2)); // See js_for_the_sliding_navigation_menu.js =1.40 =1.0 =0.8
}

function goFromGHtoIJ()
{
  imgG.classList.add("toZeroOpacity");
  imgH.classList.add("toZeroOpacity");
  setTimeout(betweenGHandIJ,1000);
}

function betweenGHandIJ()
{
  imgG.style.display = "none";
  imgH.style.display = "none";
  imgI.style.display = "initial";
  imgJ.style.display = "initial";
  setTimeout(waitALittleFunc,100);
  function waitALittleFunc(){
  imgI.classList.remove("toZeroOpacity");
  imgJ.classList.remove("toZeroOpacity");
  }
  setTimeout(speakToTheMic,1900*parent.speedAdjustmentCoefficient);
}

/* ___SPEECH RECOGNITION___ */
var userHasGivenUp = false;
var preventGiveUpButtonIfSuccessHappens;
function speakToTheMic() {

  the1stDivThatWillAppearWhenMicrophoneStartsListening.style.left=0; // See css_for_new_vocabulary_with_photos
  the2ndDivThatWillAppearWhenMicrophoneStartsListening.style.left=0; // See css_for_new_vocabulary_with_photos
  // Reset the webp animation
  const srcOfNowYouSayItImg = the1stImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne.src;
  the1stImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne.src = onePixelTransparentGif; // See js_for_preload_handling_of_all_htmls.js
  the2ndImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne.src = onePixelTransparentGif; // See js_for_preload_handling_of_all_htmls.js
  setTimeout(function () {
    the1stImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne.src = srcOfNowYouSayItImg;
    the2ndImgOfNOWYOUSAYITwebpThatMustBeResetToFrameOne.src = srcOfNowYouSayItImg;
  },250);
  // Display the “It's your turn” animation if the user's browser is whitelisted.
  if (parent.isTheUsersBrowserWhitelisted) {
    the1stDivThatWillAppearWhenMicrophoneStartsListening.classList.remove("toZeroOpacity"); // MAKE IT APPEAR
    the2ndDivThatWillAppearWhenMicrophoneStartsListening.classList.remove("toZeroOpacity"); // MAKE IT APPEAR
    setTimeout(function () {
      the1stDivThatWillAppearWhenMicrophoneStartsListening.classList.add("toZeroOpacity");
      the2ndDivThatWillAppearWhenMicrophoneStartsListening.classList.add("toZeroOpacity");
    },4800); // AND DISAPPEAR AS SOON AS ANIMATION ENDS
  }
  // A slight whiteout and then the GIVE-UP-BUTTON (Go-To-Next-Button on Safari2021,Firefox2021 etc) appears SLOWLY.
  // Use clearTimeout before it appears to prevent it accordingly.
  // For sake of GUI simplicity the Speed Adjustment Slider is available on desktops only as well as the Global Volume Slider.
  preventGiveUpButtonIfSuccessHappens = setTimeout(function () {
    theWhitePreexitDivWithAHiddenGlobeInside.classList.add("postloaderInNewVocabularyGetSlightlyVisible"); // 1.75
    setTimeout(function () {  giveUpAndContinueButtonIsInsideThisDiv.classList.add("addThisToGlassButtonToUnhide");  },1000);

  },howLongBeforeGiveUpButtonAppears);

  // REMEMBER: To find “what language the browser will listen to (via annyang)” see the code in /js_reusables/js_for_all_container_parent_htmls.js
  // TRICKY: Must know how to set the contents of a script object dynamically as well as how to use regular expressions.
  var commands = {};
  // DEPRECATED: No need to use a regex. Use split() instead.
  /*const magicalSelectionRegex = /\S+/gim;*/ // So called “regular expression” to get each and every word separated by a space (i.e. either the Latin space or the Asian “wide space”)
  /*const eachWordArray = theNewWordUserIsLearningNowAndPossibleMishaps.match(magicalSelectionRegex);*/ // Note that split(" ") works for only one of either Latin space or Asian space; NOT FOR BOTH. But this regex does.
  const eachWordArray = theNewWordUserIsLearningNowAndPossibleMishaps.split("|"); // The text files in speech_recognition_dictionary must be written with the | (bar) character as the separator between phrases.
  for(i=0;i<eachWordArray.length;i++)
  {
    let oneOfTheWords = eachWordArray[i];
    commands[oneOfTheWords] = stopListeningAndProceedToNext;
  }

  if (parent.annyang) {
    // Add commands to annyang
    parent.annyang.addCommands(commands);
    if (parent.deviceDetector.device == "desktop") {
        notificationDingTone.play(); // Better be heard on desktops only.
    }
    // Start listening.
    setTimeout(function() {  parent.annyang.start();  },200);
    setTimeout(function() {  startAudioInputVisualization();  },300); // Will work only on desktops. See js_for_microphone_input_visualization.js
  }

}

// stopListeningAndProceedToNext
var stopListeningAndProceedToNext = function () {
  if (!userHasGivenUp) {
    successTone.play();
    clearTimeout(preventGiveUpButtonIfSuccessHappens);
    giveUpAndContinueButtonIsInsideThisDiv.classList.add("addThisToGlassButtonWhenSuccessHappens");
  }
  // Stop all microphone activity as soon as success happens and don’t wait until “beforeunload” fires. See js_for_all_iframed_lesson_htmls to find what happens with window.onbeforeunload
  if (parent.annyang) { // As of 2021, Firefox says annyang is undefined. But the app still has to work without Web Speech API so the code must be wrapped in if(parent.annyang).
    parent.annyang.removeCommands();
    parent.annyang.abort();
  }
  stopAudioInputVisualization();
  theWhitePreexitDivWithAHiddenGlobeInside.classList.add("postloaderInNewVocabularyGetTotallyVisible"); // 1.75s
  setTimeout(function() { theGlobeInsideTheWhiteOutroIMG.classList.add("postloaderInNewVocabularyGetTotallyVisible"); },1750); // 1.75s+1.75s=3.5s
  // See js_for_all_iframed_lesson_htmls about unloadTheSoundsOfThisLesson() unloadTheImagesOfThisLesson()
  setTimeout(function() { self.location.href = '../lesson_2/index.html'; },3600); // REMEMBER: This makes window.onbeforeunload fire in js_for_all_iframed_lesson_htmls.js
};
