document.getElementById('clickBtn').addEventListener('click', function() {
    const messages = [
        'آفرین! اولین کلیک تو! 🎯',
        'باز هم کلیک کن! 🔥',
        'تو یک استاره! ⭐',
        'عالی انجام میشی! 💪'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});
