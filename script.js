document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const numberElements = document.querySelectorAll('.number');

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getBackgroundColor = (number) => {
        if (number <= 10) return '#FFA07A';
        if (number <= 20) return '#87CEEB';
        if (number <= 30) return '#98FB98';
        if (number <= 40) return '#DDA0DD';
        return '#F0E68C';
    };

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(getRandomNumber(1, 45));
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        
        numberElements.forEach((element, index) => {
            element.style.backgroundColor = getBackgroundColor(lottoNumbers[index]);
            
            // 숫자 생성 애니메이션 효과
            element.style.transform = 'scale(0)';
            setTimeout(() => {
                element.textContent = lottoNumbers[index];
                element.style.transform = 'scale(1)';
            }, index * 100);
        });
    });
});
