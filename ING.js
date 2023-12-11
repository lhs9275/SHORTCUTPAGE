 // 지정한 날짜  설정
 const notificationDates = [1, 7, 10, 12 , 14 , 17 , 18 , 21 , 23 , 27 , 30 ];

 // 페이지 로드 시 실행되는 함수
 document.addEventListener("DOMContentLoaded", function () {
  checkNotification();

  const currentDate = new Date();

  // 년, 월, 일 추출
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = currentDate.getDate();

  // 날짜를 표시할 요소 찾기
  const dateOutputElement = document.getElementById("dateOutput");

  // 날짜를 년-월-일 형식으로 표시
  const formattedDate = `${year}년${month < 10 ? '0' + month : month}월${day < 10 ? '0' + day : day}일`;
  dateOutputElement.innerText = formattedDate;
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

   clock.innerText = `${hours}시${minutes}분${seconds}초`;
}


getClock(); 
setInterval(getClock, 1000); 



//슬라이드 
const images = document.querySelectorAll('.img');
let current = 0;

function showSlide() {
  for(let i=0; i<images.length; i++) {
    images[i].classList.remove('on');
  }
  current++;
  if(current > images.length) {
    current = 1;
  }
  images[current - 1].classList.add('on');
  setTimeout(showSlide, 4000);
}

showSlide();

