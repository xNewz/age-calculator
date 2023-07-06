document.getElementById("calBtn").addEventListener("click", () => {
  if (document.getElementById("birth-date").value == "") {
    document.getElementById("result").innerHTML =
      "กรุณากรอกวันเกิดของคุณก่อน !!!";
    return;
  }
  var birthDate = new Date(document.getElementById("birth-date").value);
  var currentDate = new Date();

  var ageInMilliseconds = currentDate - birthDate;
  var ageInSeconds = ageInMilliseconds / 1000;
  var ageInMinutes = ageInSeconds / 60;
  var ageInHours = ageInMinutes / 60;
  var ageInDays = ageInHours / 24;
  var ageInMonths = ageInDays / 30.4375;
  var ageInYears = ageInDays / 365.25;
  
  var years = Math.floor(ageInYears);
  var months = Math.floor(ageInMonths % 12);
  var days = Math.floor(ageInDays % 30.4375);
  var hours = Math.floor(ageInHours % 24);

  var zodiacYear = (birthDate.getFullYear() + 8) % 12;
  var zodiacSign = getZodiacSign(zodiacYear);

  document.getElementById("result").innerHTML =
    "อายุของคุณคือ " +
    years +
    " ปี " +
    months +
    " เดือน " +
    days +
    " วัน " +
    hours +
    " ชั่วโมง" +
    "<br>" +
    "ปีของราศีของคุณคือ " +
    zodiacSign;
});

function getZodiacSign(year) {
  var zodiacSigns = [
    "ชวด",
    "ฉลู",
    "ขาล",
    "เถาะ",
    "มะโรง",
    "มะเส็ง",
    "มะเมีย",
    "มะแม",
    "วอก",
    "ระกา",
    "จอ",
    "กุน",
  ];

  return zodiacSigns[year];
}

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("birth-date").value = "";
  document.getElementById("result").innerHTML = "";
});
