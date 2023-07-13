document.getElementById("calBtn").addEventListener("click", () => { // เมื่อกดปุ่มคำนวณ
  if (document.getElementById("birth-date").value == "") { // ถ้าไม่ได้กรอกวันเกิด
    document.getElementById("result").innerHTML =
      "กรุณากรอกวันเกิดของคุณก่อน !!!"; // แสดงข้อความ
    return;
  }
  var birthDate = new Date(document.getElementById("birth-date").value); // ดึงค่าวันเกิดมาเก็บไว้ในตัวแปร birthDate
  var currentDate = new Date(); // ดึงค่าวันที่ปัจจุบันมาเก็บไว้ในตัวแปร currentDate

  var ageInMilliseconds = currentDate - birthDate; // คำนวณอายุเป็นมิลลิวินาที
  var ageInSeconds = ageInMilliseconds / 1000; // คำนวณอายุเป็นวินาที
  var ageInMinutes = ageInSeconds / 60; // คำนวณอายุเป็นนาที
  var ageInHours = ageInMinutes / 60; // คำนวณอายุเป็นชั่วโมง
  var ageInDays = ageInHours / 24; // คำนวณอายุเป็นวัน
  var ageInMonths = ageInDays / 30.4375; // คำนวณอายุเป็นเดือน
  var ageInYears = ageInDays / 365.25; // คำนวณอายุเป็นปี
  
  var years = Math.floor(ageInYears); // ปัดเศษทศนิยมลง เพื่อให้ได้เฉพาะจำนวนปี
  var months = Math.floor(ageInMonths % 12); // ปัดเศษทศนิยมลง เพื่อให้ได้เฉพาะจำนวนเดือน
  var days = Math.floor(ageInDays % 30.4375); // ปัดเศษทศนิยมลง เพื่อให้ได้เฉพาะจำนวนวัน
  var hours = Math.floor(ageInHours % 24); // ปัดเศษทศนิยมลง เพื่อให้ได้เฉพาะจำนวนชั่วโมง

  var zodiacYear = (birthDate.getFullYear() + 8) % 12; // คำนวณหาปีของราศี โดยเอาปีเกิด + 8 แล้ว mod 12
  var zodiacSign = getZodiacSign(zodiacYear); // ดึงค่าราศีมาเก็บไว้ในตัวแปร zodiacSign

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
    zodiacSign; // แสดงผลลัพธ์
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

  return zodiacSigns[year]; // คืนค่าราศี โดยดึงจากอาเรย์ zodiacSigns โดยใช้ตัวแปร year เป็น index
}

document.getElementById("resetBtn").addEventListener("click", () => { // เมื่อกดปุ่มรีเซ็ต
  document.getElementById("birth-date").value = "";
  document.getElementById("result").innerHTML = "";
});
