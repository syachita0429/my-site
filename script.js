document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    
    let index = 0;
    const speed = 100; // タイピング速度 (ms)

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // タイピング完了後にカーソルの点滅を止める（オプション）
            textElement.style.borderRight = 'none';
        }
    }

    // 少し待ってからアニメーションを開始
    setTimeout(type, 1000);
});
