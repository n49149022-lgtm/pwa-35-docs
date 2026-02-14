# Удаление BOM из HTML файлов
$htmlFiles = Get-ChildItem -Path .\modules\ -Recurse -Filter *.html
Write-Host "Найдено HTML файлов: $($htmlFiles.Count)" -ForegroundColor Green

foreach ($file in $htmlFiles) {
    Write-Host "Обрабатываю: $($file.Name)" -ForegroundColor Yellow
    
    try {
        # Читаем файл как байты
        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
        
        # Проверяем на UTF-8 BOM (EF BB BF)
        if ($bytes.Length -gt 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
            # Убираем первые 3 байта (BOM)
            $newBytes = $bytes[3..($bytes.Length - 1)]
            [System.IO.File]::WriteAllBytes($file.FullName, $newBytes)
            Write-Host "  ✅ BOM удален" -ForegroundColor Green
        } else {
            Write-Host "  ⏭️ BOM не найден" -ForegroundColor Gray
        }
    } catch {
        Write-Host "  ❌ Ошибка: $_" -ForegroundColor Red
    }
}

Write-Host "
Готово! Все файлы обработаны." -ForegroundColor Green
