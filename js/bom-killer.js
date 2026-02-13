// Удаляет BOM и принудительно ставит UTF-8
(function() {
    // Проверяем, есть ли BOM в начале документа
    if (document.documentElement && document.documentElement.innerHTML.charCodeAt(0) === 0xFEFF) {
        console.log('BOM detected, reloading...');
        // Перезагружаем с правильной кодировкой
        document.charset = 'UTF-8';
        location.reload();
    }
    
    // Принудительная установка кодировки
    if (document.charset && document.charset.toLowerCase() !== 'utf-8') {
        document.charset = 'UTF-8';
    }
    
    // Для старых браузеров
    if (document.characterSet && document.characterSet.toLowerCase() !== 'utf-8') {
        document.charset = 'UTF-8';
    }
})();
