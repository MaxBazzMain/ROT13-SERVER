// Функция для обработки ввода и вывода
 function convert() {
  // Получаем введенный текст
  const input = document.getElementById('inputText').value;
            
  // Применяем ROT13
  const converted = rot13(input);
            
  // Выводим результат
  document.getElementById('output').textContent = converted;
  }




function rot13(str) {
    // Создаем словарь для ROT13
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const rot13Map = {};
  
  // Заполняем словарь: буква -> её ROT13-пара
  for (let i = 0; i < alphabet.length; i++) {
    const char = alphabet[i];
    const isUpperCase = i < 26; // Первые 26 символов — заглавные
    const rotatedIndex = (i + 13) % 26 + (isUpperCase ? 0 : 26);
    rot13Map[char] = alphabet[rotatedIndex];
  }

    // Обрабатываем каждый символ строки
  let result = '';
  for (const char of str) {
    result += rot13Map[char] || char; // Заменяем или оставляем как есть
    }
  return result;
  }



  function clearTextarea() {
    document.getElementById('inputText').value = '';
    document.getElementById('output').textContent = '';
  }
