export default [
    {
        id: 1,
        name: 'Языки',
        description: 'Языки которые использованы мной в проектах, в процентном соотношении показано сколько времени и знаний у меня имеется в определенном языке на текущий момент. Все языки были использованы исключительно под задачи проектов',
        items: [
            { id:1, name: 'JavaScript', percent: 90 },
            { id:2, name: 'TypeScript', percent: 70 },
            { id:3, name: 'PHP', percent: 50 },
            { id:4, name: 'C#', percent: 40 },
        ]
    },
    {
        id: 2,
        name: 'Web-дизайн',
        description: 'Основные библиотеки CSS стилей которые были использованы для оформления дизайна проектов и шаблонизаторы которые включают в себя фреймворки перечисленые в разделе фреймворков',
        items: [
            { id:1, name: 'HTML5', percent: 90 },
            { id:2, name: 'CSS3', percent: 80 },
            { id:3, name: 'Vuetify', percent: 70 },
            { id:4, name: 'Bootstrap', percent: 80 },
            { id:5, name: 'Bulma', percent: 70 },
            { id:6, name: 'Blade', percent: 50 },
            { id:7, name: 'Twig', percent: 60 },
        ]
    },
    {
        id: 3,
        name: 'Базы данных',
        description: 'Основные базы данных которые использованы в проектах, процент знаний баз данных так же включает в себя знание ORM и SQL',
        items: [
            { id:1, name: 'MySQL', percent: 90 },
            { id:2, name: 'Postgres', percent: 60 },
            { id:3, name: 'Mongo', percent: 50 },
        ]
    },
    {
        id: 4,
        name: 'Сервисы',
        description: 'Удобные и популярные сервисы которые были использованы мной в процессе работы над проектами',
        items: [
            { id:1, name: 'Git', percent: 90 },
            { id:2, name: 'Jira', percent: 40 },
            { id:3, name: 'GitHub', percent: 90 },
            { id:4, name: 'Docker', percent: 50 },
        ]
    },
    {
        id: 5,
        name: 'Фреймворки',
        description: 'Backend и Frontend фреймворки которые использовались мной в процессе работы а так же сюда я включил библиотеку по созданию сервера',
        items: [
            { id:1, name: 'Vue.js', percent: 80 },
            { id:2, name: 'Node.js', percent: 50 },
            { id:3, name: 'React.js', percent: 30 },
            { id:4, name: 'Express.js', percent: 50 },
            { id:5, name: 'Laravel', percent: 60 },
        ]
    },
    {
        id: 6,
        name: 'Библиотеки и API',
        description: 'Все перечисленные API были использованны мной в процессе разработки ботов и интеграций с популярными сервисами. Библиотеки также были использованы из-за их удобства использования',
        items: [
            { id:1, name: 'moment.js', percent: 50 },
            { id:2, name: 'cron.js', percent: 50 },
            { id:3, name: 'VK API', percent: 60 },
            { id:4, name: 'Telegram API', percent: 50 },
            { id:5, name: 'Google API', percent: 50 },
        ]
    },
    {
        id: 7,
        name: 'Теория',
        description: 'Знания теории включают в себя прочитанные книги и просмотренные видеокурсы',
        items: [
            { id:1, name: 'ООП', percent: 90 },
            { id:2, name: 'Паттерны', percent: 60 },
            { id:3, name: 'Чистый код', percent: 60 },
        ]
    }
];