const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(express.json());

const todaysTrendingArticlesList = [
  {
    id: 0,
    date: '14 апреля 2024',
    author: 'Иван Слеповицин',
    category: 'Спорт',
    title: 'Футбольный тренер рассказал об отношении к россиянам в Индии',
    subtitle: 'Футбольный тренер Андрей Чернышов рассказал об отношении к россиянам в Индии. Его слова приводит «Спорт день за днем».',
    image: 'https://icdn.lenta.ru/images/2024/04/13/20/20240413203918038/owl_detail_240_090e7b4c2da83be954137ed2a7406742.jpg'
  },
  {
    id: 1,
    date: '14 апреля 2024',
    author: 'Игорь Семенов',
    category: 'Политика',
    title: 'Иран подтвердил запуск БПЛА и ракет по Израилю',
    subtitle: 'Корпус стражей исламской революции (КСИР) подтвердил запуск беспилотных летательных аппаратов (БПЛА) в сторону Израиля и предупредил о ракетной атаке. Об этом сообщает иранское агентство IRNA. Кроме того, телеканал Al Arabiya утверждает, что Иран запустил крылатые ракеты в сторону Израиля.',
    image: 'https://icdn.lenta.ru/images/2024/04/13/23/20240413234529935/owl_detail_240_66a2090ed5b0fe28be1de55bbe1a9d56.jpg'
  },
  {
    id: 2,
    date: '14 апреля 2024',
    author: 'Ислам Абугазали',
    category: 'СМИ',
    title: '24-летнюю звезду TikTok приговорили к пожизненному заключению',
    subtitle: 'В сентябре 2023 года суд в английском графстве Лестершир поставил точку в резонансном деле об убийстве двух молодых мужчин',
    image: 'https://icdn.lenta.ru/images/2024/03/29/14/20240329142633240/detail_6ede2d9b4ef426b967c0e5357a5f62dc.jpg'
  },
  {
    id: 3,
    date: '14 апреля 2024',
    author: 'Мирослав Негеев',
    category: 'Культура',
    title: 'В кино — «Падение империи»',
    subtitle: 'В российский прокат вышло «Падение империи» Алекса Гарленда — один из самых амбициозных фильмов года',
    image: 'https://icdn.lenta.ru/images/2024/04/12/18/20240412185048438/detail_310634a3e0d0b00706300f4aca896840.jpg'
  }
];

const entertainmentArticlesList = [
  {
    id: 0,
    date: '26 марта 2024',
    title: '«Фоллаут»',
    image: 'https://icdn.lenta.ru/images/2024/03/22/14/20240322144000071/detail_04806f49cbe93f76091bfa950a9914fd.jpg',
    subtitle: 'На Amazon Prime Video 11 апреля выходит «Фоллаут» — научно-фантастический сериал по мотивам линейки сверхпопулярных видеоигр.'
  },
  {
    id: 1,
    date: '13 апреля 2024',
    title: '«Превзошла все ожидания»',
    image: 'https://icdn.lenta.ru/images/2024/03/31/18/20240331185136004/detail_5554a5bd90dfdecac399ac6071409ebb.jpg',
    subtitle: 'Румыния — дешевая Европа, доступная россиянам. Почему ее недооценивают и чем она удивляет?'
  },
  {
    id: 2,
    date: '9 апреля 2024',
    title: 'Вышла игра «Смута» от российских разработчиков',
    image: 'https://icdn.lenta.ru/images/2024/04/05/14/20240405140837875/detail_5c92bf58d137f94a82c8628e88918aa1.jpeg',
    subtitle: '«Смута» вышла. В том, что она реально выйдет и в нее можно будет играть, многие сомневались до последнего.'
  },
  {
    id: 3,
    date: '11 апреля 2024',
    title: 'Женские солнцезащитные очки в 2024 году',
    image: 'https://icdn.lenta.ru/images/2024/04/01/14/20240401144727052/detail_1080179a11bd546bba5854fd06d92784.jpg',
    subtitle: 'Солнцезащитные очки — полезный для здоровья и стильный аксессуар, который не только ограждает глаза от вредного ультрафиолетового излучения.'
  }
];

app.get('/', (req, res) => {
  res.send('My backend!!!');
});

app.get('/todaysTrendingArticles', (req, res) => {
  setTimeout(() => {
    return res.json(todaysTrendingArticlesList);
  }, 3000)
});

app.get('/entertainmentArticles', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.title) {
      return res.json(entertainmentArticlesList.filter(item => item.title.toLowerCase().includes(req.query.title.toLowerCase())))
    }
    res.json(entertainmentArticlesList)
  }, 3000)
})

app.get('/entertainmentArticles/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const newsItem = entertainmentArticlesList.find(item => item.id === id);
  setTimeout(() => {  
    return res.json(newsItem);
  }, 3000)
});

app.post('/entertainmentArticles', (req, res) => {
  const newCard = req.body;
  newCard.id=entertainmentArticlesList.length
  entertainmentArticlesList.push(newCard);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
