/* Код выбора случайного целого числа из диапазона взят по ссылке https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5 */

function takeNumberRange (minNumber, maxNumber) {
  if (
    typeof minNumber !== 'number' ||
    typeof maxNumber !== 'number' ||
    minNumber < 0 ||
    maxNumber < 0
  ) {
    return NaN;
  }
  else if (minNumber === maxNumber) {
    return Math.round(minNumber);
  }
  else if (minNumber > maxNumber) {
    const tmp = minNumber;
    minNumber = Math.ceil(maxNumber);
    maxNumber = Math.floor(tmp);
    return Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber ; //Максимум и минимум включительно
  }

  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber; //Максимум и минимум включительно
}

takeNumberRange(4.34, 4.34);


/* Свойство, выдающее длину строки взято по ссылке https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length#summary */
function getStringLength (comment, maxSizeLength) {
  return comment.length <= maxSizeLength;
}

getStringLength('Тут был текст', 3);
