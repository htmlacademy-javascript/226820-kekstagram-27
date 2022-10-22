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

const photosCount = 25;
const avatarCount = 6;

const getRandomArrayElement = (array) =>
  array[takeNumberRange(0, array.length - 1)];

const description = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.',
  'Живите во всех тех моментах, которые вы не можете выразить словами.',
  'Не ждите идеального момента. Берите каждый момент и делайте его идеальным.',
  'Признай это. Без меня, твоя жизнь была бы действительно скучной.',
  'Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь.',
  'Я пыталась заниматься йогой, но в позе лотоса уснула.',
  'Я, возможно, никогда не буду лучшей, но я стараюсь быть лучшей твоей.',
  'Если вам никто не улыбнулся утром, я подарю вам одну из своих.',
  'Никогда не позволяйте никому скучать.',
  'Все только начинает становиться действительно хорошим.',
  'Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!',
  'Мечтайте. Поверьте, в это. Добейтесь этого.',
  'Утром, только одна хорошая мысль меняет смысл целого дня.',
  'Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет.',
  'Любите меня, от этого я буду сиять еще ярче.',
  'Я точно знаю, кто я, и я чертовски горжусь этим.',
];


const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const author = [
  'Артур Васильев',
  'Степан Власов',
  'Иван Волков',
  'Тихон Головин',
  'Антон Горбачев',
  'София Громова',
  'Артём Дмитриев',
  'Милана Егорова',
  'Илья Захаров',
  'Максим Захаров',
  'Алексей Иванов',
  'Кира Исаева',
  'Ульяна Кудряшова',
  'Константин Кузнецов',
  'Дарья Кузнецова',
  'Ксения Кулешова',
  'Елизавета Маркова',
  'Ярослав Медведев',
  'Макар Медведев',
  'Полина Морозова',
  'София Некрасова',
  'Матвей Павлов',
  'Алиса Павлова',
  'Елена Парамонова',
  'Мирослава Петрова',
  'Тимофей Сергеев',
  'София Соколова',
  'Кирилл Ушаков',
  'Антонина Фомина',
  'Анна Чеботарева',
];

const createMessage = () =>
  Array.from({length: takeNumberRange(1, 2) }, () =>
    getRandomArrayElement(message)
  ).join(' ');


const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${takeNumberRange(1, avatarCount)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(author),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(description),
  likes: takeNumberRange(15, 200),
  comments: Array.from(
    { length: takeNumberRange(0, 20) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPhoto = () =>
  Array.from( {length: photosCount}, (_, pictureIndex) =>
    createPhoto(pictureIndex + 1)
  );

createComment();
createPhoto();
getPhoto();
