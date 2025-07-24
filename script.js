document.getElementById('answer-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // 페이지 새로고침 방지

    const answer1 = document.getElementById('answer1').value;
    const answer2 = document.getElementById('answer2').value;
    const messageDiv = document.getElementById('message');

    messageDiv.classList.add('hidden'); // 이전 메시지 숨기기

    // Netlify 서버에 있는 'check' 함수를 호출합니다.
    const response = await fetch('/.netlify/functions/check', {
        method: 'POST',
        body: JSON.stringify({ ans1: answer1, ans2: answer2 })
    });

    if (response.ok) { // 서버가 "정답!"이라고 응답하면 (성공)
        window.location.href = 'https://jovial-otter-9ae1db.netlify.app';
    } else { // 서버가 "오답!"이라고 응답하면 (실패)
        const result = await response.json();
        messageDiv.textContent = result.message;
        messageDiv.classList.remove('hidden');
    }
});
