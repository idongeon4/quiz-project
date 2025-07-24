exports.handler = async function(event, context) {
    // 실제 정답은 이 곳, 서버 코드에만 안전하게 보관됩니다.
    const CORRECT_ANSWER_1 = '11';
    const CORRECT_ANSWER_2 = '12';

    // 사용자가 보낸 답을 받아옵니다.
    const { ans1, ans2 } = JSON.parse(event.body);

    // 서버에서 정답을 비교합니다.
    if (ans1 === CORRECT_ANSWER_1 && ans2 === CORRECT_ANSWER_2) {
        // 정답일 경우, 성공(200) 신호를 보냅니다.
        return { statusCode: 200, body: JSON.stringify({ message: 'Correct!' }) };
    } else {
        // 오답일 경우, 실패(400) 신호와 메시지를 보냅니다.
        return { statusCode: 400, body: JSON.stringify({ message: 'Wrong answer. Try again.' }) };
    }
};
