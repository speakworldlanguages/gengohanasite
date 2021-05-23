var exitFullscreenModeSound = new Howl({  src: ['user_interface/sounds/user_goes_away.mp3']  }); // MOBILE ONLY!
var enterFullscreenModeSound = new Howl({  src: ['user_interface/sounds/user_returns.mp3']  }); // MOBILE ONLY!
// NOTE: Do not use “const” for things that need to be accessible from elsewhere. Only use “var” for such variables.
// The buttons have 4 (webp img) states : A, B, C and D. If we use one variable and only change the src it works but it is very glitchy.
// Therefore we have to use four variables for each webp and change the css rule “display block none” instead of changing the src.
// DEBUG: On mobiles buttons sometimes appear incorrectly for a brief moment like two states are “display block” at the same time. That is supposed to never happen!
// DEBUG: On desktops something sometimes mysteriously causes the button animations to NOT reset back to frame 1. Not a major issue because the result is still usable.
var containerDivOfTheNavigationMenu = document.createElement("NAV");

var clickToGoToPreviousDiv = document.createElement("DIV");
var clickToGoToMainMenuDiv = document.createElement("DIV");
var clickToOpenProgressDiv = document.createElement("DIV");
var clickToFinanceDiv = document.createElement("DIV");

const clickToGoToPreviousImgA = document.createElement("IMG");
const clickToGoToPreviousImgB = document.createElement("IMG");
const clickToGoToPreviousImgC = document.createElement("IMG");
const clickToGoToPreviousImgD = document.createElement("IMG");
const clickToGoToMainMenuImgA = document.createElement("IMG");
const clickToGoToMainMenuImgB = document.createElement("IMG");
const clickToGoToMainMenuImgC = document.createElement("IMG");
const clickToGoToMainMenuImgD = document.createElement("IMG");
const clickToOpenProgressImgA = document.createElement("IMG");
const clickToOpenProgressImgB = document.createElement("IMG");
const clickToOpenProgressImgC = document.createElement("IMG");
const clickToOpenProgressImgD = document.createElement("IMG");
const clickToFinanceImgA = document.createElement("IMG");
const clickToFinanceImgB = document.createElement("IMG");
const clickToFinanceImgC = document.createElement("IMG");
const clickToFinanceImgD = document.createElement("IMG");

const onePixelTransparentGifUsedLocallyHereInNavMenu = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

clickToGoToPreviousImgA.src = "user_interface/images/sliding_navigation_menu/go_to_previous_for_ltr_ui_a.webp";
clickToGoToPreviousImgB.src = "user_interface/images/sliding_navigation_menu/go_to_previous_for_ltr_ui_b.webp";
clickToGoToPreviousImgC.src = "user_interface/images/sliding_navigation_menu/go_to_previous_for_ltr_ui_c.webp";
clickToGoToPreviousImgD.src = "user_interface/images/sliding_navigation_menu/go_to_previous_for_ltr_ui_d.webp";
clickToGoToMainMenuImgA.src = "user_interface/images/sliding_navigation_menu/go_to_main_menu_house_a.webp";
clickToGoToMainMenuImgB.src = "user_interface/images/sliding_navigation_menu/go_to_main_menu_house_b.webp";
clickToGoToMainMenuImgC.src = "user_interface/images/sliding_navigation_menu/go_to_main_menu_house_c.webp";
clickToGoToMainMenuImgD.src = "user_interface/images/sliding_navigation_menu/go_to_main_menu_house_d.webp";
clickToOpenProgressImgA.src = "user_interface/images/sliding_navigation_menu/open_progress_a.webp";
clickToOpenProgressImgB.src = "user_interface/images/sliding_navigation_menu/open_progress_b.webp";
clickToOpenProgressImgC.src = "user_interface/images/sliding_navigation_menu/open_progress_c.webp";
clickToOpenProgressImgD.src = "user_interface/images/sliding_navigation_menu/open_progress_d.webp";
clickToFinanceImgA.src = "user_interface/images/sliding_navigation_menu/scale_a.webp";
clickToFinanceImgB.src = "user_interface/images/sliding_navigation_menu/scale_b.webp";
clickToFinanceImgC.src = "user_interface/images/sliding_navigation_menu/scale_c.webp";
clickToFinanceImgD.src = "user_interface/images/sliding_navigation_menu/scale_d.webp";

clickToGoToPreviousImgB.style.display = "none";
clickToGoToPreviousImgC.style.display = "none";
clickToGoToPreviousImgD.style.display = "none";
clickToGoToMainMenuImgB.style.display = "none";
clickToGoToMainMenuImgC.style.display = "none";
clickToGoToMainMenuImgD.style.display = "none";
clickToOpenProgressImgB.style.display = "none";
clickToOpenProgressImgC.style.display = "none";
clickToOpenProgressImgD.style.display = "none";
clickToFinanceImgB.style.display = "none";
clickToFinanceImgC.style.display = "none";
clickToFinanceImgD.style.display = "none";

clickToGoToPreviousDiv.appendChild(clickToGoToPreviousImgA); // display = "block";
clickToGoToPreviousDiv.appendChild(clickToGoToPreviousImgB); // display = "none";
clickToGoToPreviousDiv.appendChild(clickToGoToPreviousImgC); // display = "none";
clickToGoToPreviousDiv.appendChild(clickToGoToPreviousImgD); // display = "none";
clickToGoToMainMenuDiv.appendChild(clickToGoToMainMenuImgA); // display = "block";
clickToGoToMainMenuDiv.appendChild(clickToGoToMainMenuImgB); // display = "none";
clickToGoToMainMenuDiv.appendChild(clickToGoToMainMenuImgC); // display = "none";
clickToGoToMainMenuDiv.appendChild(clickToGoToMainMenuImgD); // display = "none";
clickToOpenProgressDiv.appendChild(clickToOpenProgressImgA); // display = "block";
clickToOpenProgressDiv.appendChild(clickToOpenProgressImgB); // display = "none";
clickToOpenProgressDiv.appendChild(clickToOpenProgressImgC); // display = "none";
clickToOpenProgressDiv.appendChild(clickToOpenProgressImgD); // display = "none";
clickToFinanceDiv.appendChild(clickToFinanceImgA); // display = "block";
clickToFinanceDiv.appendChild(clickToFinanceImgB); // display = "none";
clickToFinanceDiv.appendChild(clickToFinanceImgC); // display = "none";
clickToFinanceDiv.appendChild(clickToFinanceImgD); // display = "none";
/* “clickToGoToMainMenu” and “clickToGoToPrevious” will be added conditionally from within the iframe; see bread.js in 1-1-1 and water.js in 1-1-2 */
/* Touching/Clicking the "Return to last checkpoint" box's “OK” button must also add “clickToGoToMainMenu” and “clickToGoToPrevious” button images */
/* See js_for_all_container_parent_htmls.js and find whenLoadLastLessonOkButtonIsClickedOrTapped() function */

containerDivOfTheNavigationMenu.appendChild(clickToOpenProgressDiv);
containerDivOfTheNavigationMenu.appendChild(clickToFinanceDiv);
// speedAdjustmentDiv and volumeAdjustmentDiv are for DESKTOP ONLY. See the code below in window load event's desktop block.

// Call these from bread.js and water.js etc to add or remove the navigation buttons
// In the future, use a condition like if(userInterfaceDirection=="ltr") {} for a user interface that reads from right to left like Arabic.
// Don't forget to do the same in whenLoadLastLessonOkButtonIsClickedOrTapped() inside js_for_all_container_parent_htmls.js
function addHomeButtonToTheNavigationMenu() {
  if (deviceDetector.isMobile) {
    containerDivOfTheNavigationMenu.insertBefore(clickToGoToMainMenuDiv,containerDivOfTheNavigationMenu.childNodes[0]); // Make it leftmost
  } else {
    containerDivOfTheNavigationMenu.insertBefore(clickToGoToMainMenuDiv,containerDivOfTheNavigationMenu.childNodes[1]); // Place it on the right of speedAdjustmentDiv
  }
  //console.log("HOME button is added to the menu");
}
// In the future, use a condition like if(userInterfaceDirection=="ltr") {} for a user interface that reads from right to left like Arabic.
// Don't forget to check whenLoadLastLessonOkButtonIsClickedOrTapped() inside js_for_all_container_parent_htmls.js
function addGoBackToPreviousButtonToTheNavigationMenu() {
  if (deviceDetector.isMobile){
    containerDivOfTheNavigationMenu.insertBefore(clickToGoToPreviousDiv,containerDivOfTheNavigationMenu.childNodes[0]); // Make it leftmost
  } else {
    containerDivOfTheNavigationMenu.insertBefore(clickToGoToPreviousDiv,containerDivOfTheNavigationMenu.childNodes[1]); // Place it on the right of speedAdjustmentDiv
  }
  //console.log("GO BACK button is added to the menu");
}
function removeGoBackToPreviousButtonFromTheNavigationMenu() {
  containerDivOfTheNavigationMenu.removeChild(clickToGoToPreviousDiv); // Whatever its location was
  //console.log("GO BACK button is removed from the menu");
}

// Sliding navigation menu button UI sounds
const navMenuHoverSound = new Howl({  src: ['user_interface/sounds/navigation_menu_hover.mp3']  }); // DESKTOP ONLY. Put it here to make it global.
const navMenuClickSound = new Howl({  src: ['user_interface/sounds/navigation_menu_click.mp3']  });

var speedAdjustmentDiv = document.createElement("DIV"); // ONLY FOR DESKTOPS
speedAdjustmentDiv.classList.add("sliderContainerDivsWillLook");
speedAdjustmentDiv.style.left="0px";
var speedSlider = document.createElement("INPUT");
speedSlider.type = "range";
speedSlider.min = "1";
speedSlider.max = "3";
speedAdjustmentDiv.appendChild(speedSlider);
speedSlider.classList.add("bothSlidersAppearance");

var volumeAdjustmentDiv = document.createElement("DIV"); // ONLY FOR DESKTOPS
volumeAdjustmentDiv.classList.add("sliderContainerDivsWillLook");
volumeAdjustmentDiv.style.right="0px";
var volumeSlider = document.createElement("INPUT");
volumeSlider.type = "range";
volumeSlider.min = "1";
volumeSlider.max = "100";
/*volumeSlider.value = "75";*/ // Use localStorage.volumeWasAtThisLevel instead
volumeAdjustmentDiv.appendChild(volumeSlider);
volumeSlider.classList.add("bothSlidersAppearance");
volumeSlider.classList.add("volumeSliderAppearance");

var speedAdjustmentCoefficient = 1.1;

// Detect first click/first user gesture that unlocks sounds
// REMEMBER: Sliding menu buttons also need this. Handle separately. See js_for_the_sliding_navigation_menu.js
var firstUserGestureHasUnleashedAudio = false;
window.addEventListener("mouseup",function () {  firstUserGestureHasUnleashedAudio = true;  }, {once:true});

window.addEventListener("load",function() {

  // What to do on MOBILE DEVICES
  if (deviceDetector.isMobile){
    // If something blocks the clickablity of any other element use pointerEvents = "none";
    containerDivOfTheNavigationMenu.classList.add("theSmallNavigationMenuMOBILEStyling"); // See css_for_all_container_parent_htmls.css
    var invisibleContainerOfContainerDivOfTheNavigationMenu = document.createElement("DIV");
    invisibleContainerOfContainerDivOfTheNavigationMenu.classList.add("invisibleTopContainerOfTheNavigationMenuOnMobiles"); // See css_for_all_container_parent_htmls.css
    //invisibleContainerOfContainerDivOfTheNavigationMenu.style.bottom = "-25vmin";
    //invisibleContainerOfContainerDivOfTheNavigationMenu.style.display = "none"; // See bread.js to find how this is made visible
    document.body.appendChild(invisibleContainerOfContainerDivOfTheNavigationMenu);
    invisibleContainerOfContainerDivOfTheNavigationMenu.appendChild(containerDivOfTheNavigationMenu);
    // SOLVED: Samsung Browser and Chrome were firing fullscreenchange and resize differently. 100ms delay before the boolean operations did the trick.
    window.addEventListener('resize', hideOrUnhideTheNavigationMenuOnMOBILES);
  }
  // What to do on DESKTOPS
  else {
    // CAUTION: localStorage works with strings variables only! Conversion may be necessary in and out.
    /* __ HANDLE GLOBAL VOLUME WITH THE SLIDER __ */
    if(localStorage.volumeWasAtThisLevel){ // If it already exists then the user is not a first-timer.
      Howler.volume(Number(localStorage.volumeWasAtThisLevel)/100); // Howler volume is from 0 to 1, min-max.
      volumeSlider.value=Number(localStorage.volumeWasAtThisLevel);
    }
    else {
      localStorage.volumeWasAtThisLevel = 75; // First time users start with 75% sound volume. Number gets converted to string automatically.
      volumeSlider.value=Number(localStorage.volumeWasAtThisLevel);
      Howler.volume(Number(localStorage.volumeWasAtThisLevel)/100);
    }
    volumeSlider.oninput = function()
    {
      Howler.volume(this.value/100);
      localStorage.volumeWasAtThisLevel = this.value;
    }

    /* __ ADJUST PROGRESSION SPEED WITH THE SLIDER __ */
    if (localStorage.speedWasAtThisLevel) { // If it already exists then the user is not a first-timer.
      speedSlider.value=Number(localStorage.speedWasAtThisLevel);
      switch (localStorage.speedWasAtThisLevel) {
        case "1":
          // SLOWER
          speedAdjustmentCoefficient = 1.4; // Inversely proportional; the greater the value the slower.
          speedSlider.classList.add("speedSliderAppearance1");
          speedSlider.classList.remove("speedSliderAppearance2");
          speedSlider.classList.remove("speedSliderAppearance3");
          break;
        case "3":
          // FASTER
          speedAdjustmentCoefficient = 0.8; // Inversely proportional; the smaller the value the faster.
          speedSlider.classList.remove("speedSliderAppearance1");
          speedSlider.classList.remove("speedSliderAppearance2");
          speedSlider.classList.add("speedSliderAppearance3");
          break;
        default:
          // NORMAL
          speedAdjustmentCoefficient = 1.1;
          speedSlider.classList.remove("speedSliderAppearance1");
          speedSlider.classList.add("speedSliderAppearance2");
          speedSlider.classList.remove("speedSliderAppearance3");
      }
    } else {
      localStorage.speedWasAtThisLevel = 2; // First time users start with normal speed (1 is slow, 2 is normal, 3 is fast). Number gets converted to string automatically.
      speedSlider.value=Number(localStorage.speedWasAtThisLevel);
      speedSlider.classList.add("speedSliderAppearance2");
    }
    speedSlider.oninput = function()
    {
      let chosen = this.value;
      localStorage.speedWasAtThisLevel = chosen;
      switch (chosen) {
        case "1":
          // SLOWER
          speedAdjustmentCoefficient = 1.4; // Inversely proportional; the greater the value the slower
          speedSlider.classList.add("speedSliderAppearance1");
          speedSlider.classList.remove("speedSliderAppearance2");
          speedSlider.classList.remove("speedSliderAppearance3");
          break;
        case "3":
          // FASTER
          speedAdjustmentCoefficient = 0.8; // Inversely proportional; the smaller the value the faster
          speedSlider.classList.remove("speedSliderAppearance1");
          speedSlider.classList.remove("speedSliderAppearance2");
          speedSlider.classList.add("speedSliderAppearance3");
          break;
        default:
          // NORMAL
          speedAdjustmentCoefficient = 1.1;
          speedSlider.classList.remove("speedSliderAppearance1");
          speedSlider.classList.add("speedSliderAppearance2");
          speedSlider.classList.remove("speedSliderAppearance3");
      }
    }

    /* __Add the elements and event listeners__ */
    containerDivOfTheNavigationMenu.insertBefore(speedAdjustmentDiv,containerDivOfTheNavigationMenu.childNodes[0]); // Make it leftmost
    containerDivOfTheNavigationMenu.appendChild(volumeAdjustmentDiv); // Make it rightmost
    containerDivOfTheNavigationMenu.classList.add("theSmallNavigationMenuDESKTOPStyling"); // See css_for_all_container_parent_htmls.css
    var invisibleHoverAreaDiv = document.createElement("DIV");
    invisibleHoverAreaDiv.classList.add("invisibleHoverAreaToAccessNavigationMenu"); // See css_for_all_container_parent_htmls.css
    document.body.appendChild(invisibleHoverAreaDiv);
    invisibleHoverAreaDiv.appendChild(containerDivOfTheNavigationMenu);
    invisibleHoverAreaDiv.addEventListener("mouseenter",makeTheMenuComeDown);
    invisibleHoverAreaDiv.addEventListener("mouseleave",makeTheMenuGoUp);
    containerDivOfTheNavigationMenu.classList.add("addThisForAnimationAppearFromTop");

    clickToGoToPreviousDiv.addEventListener("mouseenter",goToPreviousEnterHoverFunction);
    clickToGoToPreviousDiv.addEventListener("mouseleave",goToPreviousExitHoverFunction);
    clickToGoToMainMenuDiv.addEventListener("mouseenter",goToMainMenuEnterHoverFunction);
    clickToGoToMainMenuDiv.addEventListener("mouseleave",goToMainMenuExitHoverFunction);
    clickToOpenProgressDiv.addEventListener("mouseenter",clickToOpenProgressEnterHoverFunction);
    clickToOpenProgressDiv.addEventListener("mouseleave",clickToOpenProgressExitHoverFunction);
    clickToFinanceDiv.addEventListener("mouseenter",clickToFinanceEnterHoverFunction);
    clickToFinanceDiv.addEventListener("mouseleave",clickToFinanceExitHoverFunction);

  } // End of IF-ELSE

  // ---------- Desktop-only functions ----------

  /*__HANDLE GO TO PREVIOUS LESSON - BACKWARDS BUTTON__*/
  let preventMistakeForPreviousButton;
  function goToPreviousEnterHoverFunction() {
    if(firstUserGestureHasUnleashedAudio){navMenuHoverSound.play();}
    const resetByUsingSrcB = clickToGoToPreviousImgB.src;
    clickToGoToPreviousImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToGoToPreviousImgB.src = resetByUsingSrcB;
    clickToGoToPreviousImgB.addEventListener("load", nextWebpStateB, { once: true });
    function nextWebpStateB() {
      clickToGoToPreviousImgA.style.display = "none"; // Necessary only once
      clickToGoToPreviousImgD.style.display = "none"; // Necessary after the first rotation/round of hover
      clickToGoToPreviousImgB.style.display = "block";
    }

    preventMistakeForPreviousButton = setTimeout(function () {
      clickToGoToPreviousImgB.style.display = "none";
      clickToGoToPreviousImgC.style.display = "block"; // Does not need to be reset. It is already looping.
    },240); // 8 frames with 30 ms each
  }
  function goToPreviousExitHoverFunction() {
    const resetByUsingSrcD = clickToGoToPreviousImgD.src;
    clickToGoToPreviousImgD.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToGoToPreviousImgD.src = resetByUsingSrcD;
    clickToGoToPreviousImgD.addEventListener("load", nextWebpStateD, { once: true });
    function nextWebpStateD() {
      clickToGoToPreviousImgB.style.display = "none"; // In case 240 ms could not elapse.
      clickToGoToPreviousImgC.style.display = "none";
      clickToGoToPreviousImgD.style.display = "block";
    }
    clearTimeout(preventMistakeForPreviousButton);
  }

  /*__HANDLE GO TO MAIN MENU - HOUSE HOME BUTTON__*/
  let preventMistakeForHomeButton;
  function goToMainMenuEnterHoverFunction() {
    if(firstUserGestureHasUnleashedAudio){navMenuHoverSound.play();}
    const resetByUsingSrcB = clickToGoToMainMenuImgB.src;
    clickToGoToMainMenuImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToGoToMainMenuImgB.src = resetByUsingSrcB;
    clickToGoToMainMenuImgB.addEventListener("load", nextWebpStateB, { once: true });
    function nextWebpStateB() {
      clickToGoToMainMenuImgA.style.display = "none"; // Necessary only once
      clickToGoToMainMenuImgD.style.display = "none"; // Necessary after the first rotation/round of hover
      clickToGoToMainMenuImgB.style.display = "block";
    }

    preventMistakeForHomeButton = setTimeout(function () {
      clickToGoToMainMenuImgB.style.display = "none";
      clickToGoToMainMenuImgC.style.display = "block"; // Does not need to be reset. It is already looping.
    },240); // 8 frames with 30 ms each
  }
  function goToMainMenuExitHoverFunction() {
    const resetByUsingSrcD = clickToGoToMainMenuImgD.src;
    clickToGoToMainMenuImgD.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToGoToMainMenuImgD.src = resetByUsingSrcD;
    clickToGoToMainMenuImgD.addEventListener("load", nextWebpStateD, { once: true });
    function nextWebpStateD() {
      clickToGoToMainMenuImgB.style.display = "none"; // In case 240 ms could not elapse.
      clickToGoToMainMenuImgC.style.display = "none";
      clickToGoToMainMenuImgD.style.display = "block";
    }
    clearTimeout(preventMistakeForHomeButton);
  }

  /*__HANDLE PROGRESS CHART BUTTON__*/
  let preventMistakeForProgressButton;
  function clickToOpenProgressEnterHoverFunction() {

    const resetByUsingSrcB = clickToOpenProgressImgB.src;
    clickToOpenProgressImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToOpenProgressImgB.src = resetByUsingSrcB;
    clickToOpenProgressImgB.addEventListener("load", nextWebpStateB, { once: true });
    function nextWebpStateB() {
      clickToOpenProgressImgA.style.display = "none"; // Necessary only once
      clickToOpenProgressImgD.style.display = "none"; // Necessary after the first rotation/round of hover
      clickToOpenProgressImgB.style.display = "block";
    }

    preventMistakeForProgressButton = setTimeout(function () {
      clickToOpenProgressImgB.style.display = "none";
      clickToOpenProgressImgC.style.display = "block"; // Does not need to be reset. It is already looping.
    },240); // 8 frames with 30 ms each

    if(firstUserGestureHasUnleashedAudio){navMenuHoverSound.play();}
  }
  function clickToOpenProgressExitHoverFunction() {
    const resetByUsingSrcD = clickToOpenProgressImgD.src;
    clickToOpenProgressImgD.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToOpenProgressImgD.src = resetByUsingSrcD;
    clickToOpenProgressImgD.addEventListener("load", nextWebpStateD, { once: true });
    function nextWebpStateD() {
      clickToOpenProgressImgB.style.display = "none"; // In case 240 ms could not elapse.
      clickToOpenProgressImgC.style.display = "none";
      clickToOpenProgressImgD.style.display = "block";
    }
    clearTimeout(preventMistakeForProgressButton);
  }

  /*__HANDLE INFORMATION BUTTON (with the scale icon)__*/
  let preventMistakeForNgoButton;
  function clickToFinanceEnterHoverFunction() {

    const resetByUsingSrcB = clickToFinanceImgB.src;
    clickToFinanceImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToFinanceImgB.src = resetByUsingSrcB;
    clickToFinanceImgB.addEventListener("load", nextWebpStateB, { once: true });
    function nextWebpStateB() {
      clickToFinanceImgA.style.display = "none"; // Necessary only once
      clickToFinanceImgD.style.display = "none"; // Necessary after the first rotation/round of hover
      clickToFinanceImgB.style.display = "block";
    }

    preventMistakeForNgoButton = setTimeout(function () {
      const resetByUsingSrcC = clickToFinanceImgC.src;
      clickToFinanceImgC.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
      clickToFinanceImgC.src = resetByUsingSrcC;
      clickToFinanceImgC.addEventListener("load", nextWebpStateC, { once: true });
      function nextWebpStateC(){
        clickToFinanceImgB.style.display = "none";
        clickToFinanceImgC.style.display = "block"; // This particular looping animation MUST BE RESET.
      }
    },240); // 8 frames with 30 ms each

    if(firstUserGestureHasUnleashedAudio){navMenuHoverSound.play();}
  }
  function clickToFinanceExitHoverFunction() {
    const resetByUsingSrcD = clickToFinanceImgD.src;
    clickToFinanceImgD.src = onePixelTransparentGifUsedLocallyHereInNavMenu;
    clickToFinanceImgD.src = resetByUsingSrcD;
    clickToFinanceImgD.addEventListener("load", nextWebpStateD, { once: true });
    function nextWebpStateD() {
      clickToFinanceImgB.style.display = "none"; // In case 240 ms could not elapse.
      clickToFinanceImgC.style.display = "none";
      clickToFinanceImgD.style.display = "block";
    }
    clearTimeout(preventMistakeForNgoButton);
  }

  /*__CREATE MOVEMENT__*/
  function makeTheMenuComeDown() {
    containerDivOfTheNavigationMenu.classList.add("addOrRemoveThisToMakeTheNavMenuAppearDisappear");
  }
  function makeTheMenuGoUp() {
    containerDivOfTheNavigationMenu.classList.remove("addOrRemoveThisToMakeTheNavMenuAppearDisappear");
  }

  // ---------- Mobile functions ----------
  function hideOrUnhideTheNavigationMenuOnMOBILES() {
    window.removeEventListener('resize', hideOrUnhideTheNavigationMenuOnMOBILES);
    // Use hasGoneFullscreen variable from js_for_handling_fullscreen_mode.js
    // WARNING! “hasGoneFullscreen” has a boolean value that alternates every time “fullscreenchange” event fires.
    // CAUTION! This may happen before or after “resize” event fires depending on the browser!
    setTimeout(function () { /*!!!*/ // Try and see if 100ms delay will solve the opposite firing conflict between Chrome and Samsung Browser? Result: YES!
      if (!hasGoneFullscreen) {
        exitFullscreenModeSound.play();
        invisibleContainerOfContainerDivOfTheNavigationMenu.classList.add("addThisForAnimationAppearFromBottom"); // See css_for_all_container_parent_htmls.css
        invisibleContainerOfContainerDivOfTheNavigationMenu.classList.remove("addThisForAnimationSinkAndDisappear");
        setTimeout(function () {    window.addEventListener('resize', hideOrUnhideTheNavigationMenuOnMOBILES);    },200); // animation duration is .4s inside css

        // Make the nav menu buttons glow
        setTimeout(function () {
          setTimeout(function () { clickToGoToPreviousImgA.style.display = "none"; clickToGoToPreviousImgB.style.display = "initial";  },300); //Could these be the cause of THAT problem on mobiles?
          setTimeout(function () { clickToGoToMainMenuImgA.style.display = "none"; clickToGoToMainMenuImgB.style.display = "initial";  },200);
          setTimeout(function () { clickToOpenProgressImgA.style.display = "none"; clickToOpenProgressImgB.style.display = "initial";  },100);
          clickToFinanceImgA.style.display = "none"; clickToFinanceImgB.style.display = "initial";
        },1000);
        setTimeout(function () {
          setTimeout(function () { clickToGoToPreviousImgB.style.display = "none"; clickToGoToPreviousImgC.style.display = "initial";  },300);
          setTimeout(function () { clickToGoToMainMenuImgB.style.display = "none"; clickToGoToMainMenuImgC.style.display = "initial";  },200);
          setTimeout(function () { clickToOpenProgressImgB.style.display = "none"; clickToOpenProgressImgC.style.display = "initial";  },100);
          clickToFinanceImgB.style.display = "none"; clickToFinanceImgC.style.display = "initial";
        },1240);
      } // End of if
      else {
        enterFullscreenModeSound.play();
        invisibleContainerOfContainerDivOfTheNavigationMenu.classList.add("addThisForAnimationSinkAndDisappear"); // See css_for_all_container_parent_htmls.css
        invisibleContainerOfContainerDivOfTheNavigationMenu.classList.remove("addThisForAnimationAppearFromBottom");
        setTimeout(function () {    window.addEventListener('resize', hideOrUnhideTheNavigationMenuOnMOBILES);    },200); // animation duration is .4s inside css

        // Reset the nav menu buttons back to initial
        clickToGoToPreviousImgC.style.display = "none"; clickToGoToPreviousImgA.style.display = "initial";
        clickToGoToMainMenuImgC.style.display = "none"; clickToGoToMainMenuImgA.style.display = "initial";
        clickToOpenProgressImgC.style.display = "none"; clickToOpenProgressImgA.style.display = "initial";
        clickToFinanceImgC.style.display = "none"; clickToFinanceImgA.style.display = "initial";

        const resetWebpsViaSrcPB = clickToGoToPreviousImgB.src; clickToGoToPreviousImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToGoToPreviousImgB.src = resetWebpsViaSrcPB; },10);
        const resetWebpsViaSrcPC = clickToGoToPreviousImgC.src; clickToGoToPreviousImgC.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToGoToPreviousImgC.src = resetWebpsViaSrcPC; },10);
        const resetWebpsViaSrcMB = clickToGoToMainMenuImgB.src; clickToGoToMainMenuImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToGoToMainMenuImgB.src = resetWebpsViaSrcMB; },10);
        const resetWebpsViaSrcMC = clickToGoToMainMenuImgC.src; clickToGoToMainMenuImgC.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToGoToMainMenuImgC.src = resetWebpsViaSrcMC; },10);
        const resetWebpsViaSrcGB = clickToOpenProgressImgB.src; clickToOpenProgressImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToOpenProgressImgB.src = resetWebpsViaSrcGB; },10);
        const resetWebpsViaSrcGC = clickToOpenProgressImgC.src; clickToOpenProgressImgC.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToOpenProgressImgC.src = resetWebpsViaSrcGC; },10);
        const resetWebpsViaSrcFB = clickToFinanceImgB.src; clickToFinanceImgB.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToFinanceImgB.src = resetWebpsViaSrcFB; },10);
        const resetWebpsViaSrcFC = clickToFinanceImgC.src; clickToFinanceImgC.src = onePixelTransparentGifUsedLocallyHereInNavMenu; setTimeout(function(){ clickToFinanceImgC.src = resetWebpsViaSrcFC; },10);
      } // End of else
    },100); /*!!!*/ // End of setTimeout. Set to 100ms assuming that nobody would enter and then exit full screen within 100 milliseconds.
  } // End of function hideOrUnhideTheNavigationMenuOnMOBILES()

  // NOTE: Consider adding listeners for touchstart events for mobile.
  clickToGoToPreviousDiv.addEventListener("click", goToPreviousLessonFunction );
  clickToGoToMainMenuDiv.addEventListener("click", goToMainMenuFunction );
  clickToOpenProgressDiv.addEventListener("click", openProgressChartFunction );
  clickToFinanceDiv.addEventListener("click", openFinancialMethodsPageFunction );

  // The task of unloading sounds and stopping annyang has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload

  function goToPreviousLessonFunction() {
    navMenuClickSound.play();
    /*
    stopAnnyangAndStopHowler(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    iFrameScriptAccess.contentWindow.unloadTheSoundsOfThisLesson(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    iFrameScriptAccess.contentWindow.unloadTheImagesOfThisLesson(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    */
    // Use indexOfLessons object from js_object_of_all_lessons_listed.js
    // Get the frame title and find the lesson index
    let theTitleOfCurrentLesson = iFrameScriptAccess.contentWindow.document.title; // Use iFrameScriptAccess variable from js_for_all_container_parent_htmls.js
    let theIndexOfCurrentLesson;
    // Maybe “switch case” or “while” with breaks would be better instead of “for” but anyways...
    for(i=0;i<indexOfLessons.title.length;i++)
    { if (indexOfLessons.title[i] === theTitleOfCurrentLesson ){
        theIndexOfCurrentLesson = i;
      }
    }
    // Go to the previous lesson
    iFrameScriptAccess.src = indexOfLessons.path[theIndexOfCurrentLesson-1];
  }

  let areYouSureTextInUILanguage = "Go to start?"; // Override this default by getting this from txt file
  const filePathForTheConfirmationText = "user_interface/text/"+userInterfaceLanguage+"/0-are_you_sure.txt";
  fetch(filePathForTheConfirmationText,myHeaders).then(function(response){return response.text();}).then(function(contentOfTheTxtFile){ areYouSureTextInUILanguage = contentOfTheTxtFile; });// See js_for_fetch_api_character_encoding.js for the headers thingy.

  function goToMainMenuFunction() {
    navMenuClickSound.play();
    /*
    stopAnnyangAndStopHowler(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    iFrameScriptAccess.contentWindow.unloadTheSoundsOfThisLesson(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    iFrameScriptAccess.contentWindow.unloadTheImagesOfThisLesson(); // This task has been moved to js_for_all_iframed_lesson_htmls.js to be handled with window onbeforeunload
    */
    // Ask “Are you sure?” in all user interface languages via fetch()
    if (confirm(areYouSureTextInUILanguage)) {
      localStorage.removeItem("theLastCheckpointSavedInLocalStorage");
      localStorage.removeItem("theLanguageUserWasLearningLastTime");
      // WARNING: Avoid using reference to the root "/" as it maybe uncertain what the root is in case of deep-iframing.
      // Try solving with conditionals if a problem emerges.
      window.open("/","_self");
      containerDivOfTheNavigationMenu.removeChild(clickToGoToMainMenuDiv);
    } else {
      // User has clicked CANCEL. So, do nothing and stay.
    }
  }

  function openProgressChartFunction() {
    navMenuClickSound.play();
    // CAUTION! Changing the location with href will trigger window.onbeforeunload
    // stopAnnyangAndStopHowler(); // When this button becomes functional in future, let this be handled by onbeforeunload function in js_for_all_iframed_lesson_htmls
    alert("This feature is not available yet.\nBu özellik henüz hazır değil.\nこのボタンの機能は準備中です。");
  }

  function openFinancialMethodsPageFunction() {
    navMenuClickSound.play();
    // stopAnnyangAndStopHowler(); // use contentWindow because the function has been moved to js_for_all_iframed_lesson_htmls.js
    window.open("information","_blank");
  }

},{ once: true });
