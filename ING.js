 // 지정한 날짜  설정
 const notificationDates = [1, 6, 10];

 // 페이지 로드 시 실행되는 함수
 document.addEventListener("DOMContentLoaded", function () {
     checkNotification();

   const date = new Date().toLocaleDateString();
   document.getElementById("dateOutput").innerText = date;
   });


 // 주기적으로 현재 날짜를 확인하고 알림을 표시하는 함수
  function checkNotification() {
  const currentDate = new Date().getDate();
  const notificationElement = document.getElementById("notification");

  if (notificationDates.includes(currentDate)) {
    const originalText = '오늘은 휴방입니다';
    const highlightedText = originalText.replace(
      /휴방/g,
      '<span class="highlight">휴방</span>'
    );

    notificationElement.innerHTML = highlightedText;
    notificationElement.style.display = "block";
  } else {
    notificationElement.innerText = '오늘은 방송이 있습니다';
    notificationElement.style.display = "block";
  }

  // 일정한 간격으로 함수를 호출하도록 설정 
  setTimeout(checkNotification, 60000);
}

const clock = document.querySelector(".clock"); 

function getClock() {
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");

   clock.innerText = `${hours}:${minutes}:${seconds} `;
}


getClock(); 
setInterval(getClock, 1000); 
