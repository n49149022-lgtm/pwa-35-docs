// Единая платежная система для всех 35 модулей
function pay(productId, amount, description) {
    // Заглушка для демонстрации
    alert(Оплата ₽ за \n\nПосле оплаты PDF будет разблокирован);
    
    // Реальная интеграция с Enot.io (раскомментируй когда получишь ключи)
    /*
    EnotWidget.open({
        shop_id: "ТВОЙ_SHOP_ID",
        amount: amount,
        currency: "RUB",
        description: description,
        payment_method: "card, sbp, qr",
        success_url: window.location.href + "?success=1",
        fail_url: window.location.href + "?fail=1"
    });
    */
    
    // Для теста сразу разблокируем PDF
    setTimeout(() => {
        unlockPDF();
    }, 1000);
}

function unlockPDF() {
    const downloadBtn = document.getElementById('pdfDownload');
    if (downloadBtn) {
        downloadBtn.style.display = 'block';
        localStorage.setItem('paid_' + window.location.pathname, 'true');
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
        unlockPDF();
    }
}
