const buttonElement = document.getElementById('myButton');

function handleButtonClick() {
  console.log('ปุ่มถูกคลิกแล้ว! JavaScript ทำงานแล้วครับ!');
  alert('Hello from JavaScript!');
}

buttonElement.addEventListener('click', handleButtonClick);