var wakeUpTime = 7;
var noon = 12;
var lunch = 12;
var evening = 18;
var party = 20;
var nap = 14;
var time = new Date().getHours();
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");



var updateClock = function() {

	var messageText=null;
	var message = document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == party) {
			messageText = "Time to Party!!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		}
		else if (time == nap) {
			messageText = "zzzzzzz";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		}
		else if (time == lunch) {
			messageText = "Time to chow down";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		}
		else if (time == wakeUpTime) {
			messageText = "Wake up!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		}
		else if (time < noon) {
			messageText = "Good Morning!";
			image = "http://www.lovethispic.com/uploaded_images/152094-Yawning-Cat.jpg";
			}
		else if (time > evening) {
			messageText = "Good Evening!";
			image = "https://i.ytimg.com/vi/8sCcXlLZd7Y/hqdefault.jpg";
			}
		else {
		messageText = "Good Afternoon!";
		image = "https://cdn.shopify.com/s/files/1/0673/5777/files/funny-cat-pictures-045-029_large.jpg?v=1497753244";
		}

		message.innerText = messageText;
		lolcat.src = image;

		showCurrentTime();

};

var showCurrentTime = function () {
	var clock = document.getElementById("clock");
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	if (hours >= noon)
		{
			meridian = "PM";
		}
	if (hours > noon)
		{
			hours = hours - 12;
		}

	if (minutes < 10)
		{
			minutes = "0" + minutes;
		}

		if (seconds <10)
		{
			seconds = "0" + seconds;
		}

		var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

		clock.innerText = clockTime;
	};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


var partyEvent = function () {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = party;
		partyTimeButton.innerText = "Party Over";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
		//text should read "Party Over"
		//Button should be #0A8DAB
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "Party Time!";
		partyTimeButton.style.backgroundColor = "#222";
		//text should read "Party time!"
		//Color should be #222
	};
};

var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
	nap = napTimeSelector.value;
};

var lunchEvent = function () {
	lunch = lunchTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
