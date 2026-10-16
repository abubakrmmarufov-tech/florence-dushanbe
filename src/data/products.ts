export interface ProductSize {
  name: string;
  label: string;
  stems: string;
  priceMultiplier: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'roses' | 'peonies' | 'signature' | 'compositions' | 'gifts';
  categoryLabel: string;
  price: number; // in TJS (сомони)
  originalPrice?: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isSeasonal?: boolean;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  composition: string[];
  dimensions: string;
  sizes: ProductSize[];
  occasion: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'Все букеты' },
  { id: 'roses', label: 'Розы' },
  { id: 'peonies', label: 'Пионы' },
  { id: 'signature', label: 'Авторские букеты' },
  { id: 'compositions', label: 'Цветочные композиции' },
  { id: 'gifts', label: 'Подарки и сеты' },
] as const;

export const OCCASIONS = [
  { id: 'romantic', label: 'Романтика & Свидание', tag: 'romantic' },
  { id: 'birthday', label: 'День рождения', tag: 'birthday' },
  { id: 'anniversary', label: 'Юбилей & Торжество', tag: 'anniversary' },
  { id: 'wedding', label: 'Свадьба', tag: 'wedding' },
  { id: 'gratitude', label: 'В знак благодарности', tag: 'gratitude' },
  { id: 'luxury', label: 'Премиум коллекция', tag: 'luxury' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'florence-ohara-romance',
    name: 'Магия White O’Hara',
    subtitle: 'Ароматные французские садовые розы высшего сорта',
    category: 'roses',
    categoryLabel: 'Розы',
    price: 680,
    originalPrice: 750,
    isBestseller: true,
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Изысканный монобукет из легендарных французских пионовидных роз White O’Hara с пьянящим ароматом весеннего сада.',
    fullDescription: 'Французские розы сорта White O’Hara по праву считаются эталоном роскоши. Их многолепестковые бутоны раскрываются в нежнейшие чашевидные цветы с пьянящим, тонким шлейфовым ароматом. Оформлен в фирменную матовую бумагу Florence Dushanbe и шелковую ленту глубокого бутылочно-зеленого оттенка.',
    composition: [
      'Садовые розы White O’Hara (17 стеблей)',
      'Французский эвкалипт популус',
      'Озотамнус сливочного тона',
      'Фирменная дизайнерская упаковка Florence',
      'Шелковая брендированная лента'
    ],
    dimensions: 'Высота: 55 см, Диаметр: 45 см',
    sizes: [
      { name: 'classic', label: 'Классический (17 роз)', stems: '17 роз', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Премиум (25 роз)', stems: '25 роз', priceMultiplier: 1.45 },
      { name: 'deluxe', label: 'Гранд Люкс (35 роз)', stems: '35 роз', priceMultiplier: 1.95 },
    ],
    occasion: ['romantic', 'anniversary', 'luxury', 'birthday']
  },
  {
    id: 'florence-coral-sunset',
    name: 'Коралловый Рассвет',
    subtitle: 'Сезонные голландские пионы Coral Sunset',
    category: 'peonies',
    categoryLabel: 'Пионы',
    price: 890,
    isBestseller: true,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Волшебные пионы-хамелеоны Coral Sunset, меняющие оттенок от насыщенного коралла до цвета слоновой кости.',
    fullDescription: 'Уникальный сорт пионов, который устраивает живой спектакль прямо в вазе: день за днем бутоны плавно трансформируют цвет из ярко-лососевого в нежный персиковый, а затем в благородный айвори. Идеальный подарок для тонких ценителей прекрасного.',
    composition: [
      'Пионы премиум-сорта Coral Sunset (15 шт)',
      'Ветки эвкалипта Baby Blue',
      'Крафтовая бумага Florence с золотым тиснением',
      'Атласные ленты двойного плетения'
    ],
    dimensions: 'Высота: 50 см, Диаметр: 42 см',
    sizes: [
      { name: 'classic', label: 'Классический (15 пионов)', stems: '15 пионов', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Премиум (23 пиона)', stems: '23 пиона', priceMultiplier: 1.5 },
      { name: 'deluxe', label: 'Роскошный (31 пион)', stems: '31 пион', priceMultiplier: 2.0 },
    ],
    occasion: ['birthday', 'romantic', 'luxury']
  },
  {
    id: 'florence-mon-amour-signature',
    name: 'Венецианский Шарм',
    subtitle: 'Авторский букет в пудрово-винной палитре',
    category: 'signature',
    categoryLabel: 'Авторские букеты',
    price: 740,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Многогранная флористическая композиция с ранункулюсами, кустовыми пионовидными розами и веточками лаванды.',
    fullDescription: 'Авторская работа шеф-флориста Florence Dushanbe. Построена на тонких градиентных переходах от глубокого ягодного к припыленно-розовому и кремовому. Фактурный, воздушный и полный очарования букет.',
    composition: [
      'Ранункулюсы сорта Клуни (7 шт)',
      'Пионовидные розы Джульетта (9 шт)',
      'Астильба нежно-розовая',
      'Эвкалипт николи',
      'Дизайнерская калька цвета мокрого асфальта'
    ],
    dimensions: 'Высота: 48 см, Диаметр: 45 см',
    sizes: [
      { name: 'classic', label: 'Классический', stems: 'Средний объем', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Пышный', stems: 'Увеличенный на 40%', priceMultiplier: 1.4 },
      { name: 'deluxe', label: 'Королевский', stems: 'Максимальный объем', priceMultiplier: 1.85 },
    ],
    occasion: ['birthday', 'gratitude', 'anniversary']
  },
  {
    id: 'florence-emerald-box',
    name: 'Композиция «Изумрудный Душанбе»',
    subtitle: 'Цветы в авторской шляпной коробке глубокого зеленого цвета',
    category: 'compositions',
    categoryLabel: 'Цветочные композиции',
    price: 980,
    isBestseller: true,
    images: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Фирменная бархатная коробка Florence с роскошной шапкой из пионов, садовых роз и орхидей фаленопсис.',
    fullDescription: 'Безупречное решение для тех, кто ценит удобство: цветам не нужна ваза, композиция собрана на специальном оазисе со свежей питательной водой. Бархатная коробка благородного хвойно-изумрудного цвета с золотым логотипом Florence украсит любой интерьер.',
    composition: [
      'Пионовидные розы Kahala (11 шт)',
      'Ветка орхидеи фаленопсис',
      'Сортовые гвоздики Caramel',
      'Эвкалипт и скиммия',
      'Бархатная коробка ручной работы с золотым гербом Florence'
    ],
    dimensions: 'Высота: 40 см, Диаметр коробки: 30 см',
    sizes: [
      { name: 'classic', label: 'Медиум (Ø 25 см)', stems: '21 цветок', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Гранд (Ø 32 см)', stems: '35 цветов', priceMultiplier: 1.5 },
      { name: 'deluxe', label: 'VIP Imperial (Ø 40 см)', stems: '50+ цветов', priceMultiplier: 2.2 },
    ],
    occasion: ['anniversary', 'wedding', 'luxury']
  },
  {
    id: 'florence-pure-whiteness',
    name: 'Белая Симфония',
    subtitle: 'Аристократичный монобукет белых пионовидных роз и эустомы',
    category: 'roses',
    categoryLabel: 'Розы',
    price: 590,
    images: [
      'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Чистота линий, элегантность и грация. Букет для самых трепетных и искренних признаний.',
    fullDescription: 'Классическое сочетание премиальных белых роз сорта Mondial и белоснежной махровой эустомы. Непринужденный европейский шик, вдохновленный парижскими цветочными ателье.',
    composition: [
      'Белые эквадорские розы Mondial (19 шт)',
      'Эустома белая махровая (5 веток)',
      'Листья фисташки',
      'Матовая молочная бумага и шелковая тесьма'
    ],
    dimensions: 'Высота: 60 см, Диаметр: 40 см',
    sizes: [
      { name: 'classic', label: 'Классик (19 роз)', stems: '19 стеблей', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Пышный (29 роз)', stems: '29 стеблей', priceMultiplier: 1.5 },
      { name: 'deluxe', label: 'Королевский (51 роза)', stems: '51 роза', priceMultiplier: 2.4 },
    ],
    occasion: ['wedding', 'romantic', 'gratitude']
  },
  {
    id: 'florence-peony-cloud',
    name: 'Пионовое Облако',
    subtitle: 'Нежнейшие французские пионы Сара Бернар',
    category: 'peonies',
    categoryLabel: 'Пионы',
    price: 1150,
    originalPrice: 1280,
    isBestseller: true,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Воздушный монобукет из легендарных зефирных пионов Сара Бернар с неповторимым ароматом.',
    fullDescription: 'Пион Сара Бернар — непревзойденный фаворит среди ценителей высокой флористики. Плотные бутоны раскрываются в пышные махровые шапки диаметром до 18 см, источая сладковато-пудровый шлейф.',
    composition: [
      'Пионы Sarah Bernhardt (21 стебель)',
      'Французская упаковочная калька',
      'Двойная атласная лента с золотым тиснением'
    ],
    dimensions: 'Высота: 52 см, Диаметр: 48 см',
    sizes: [
      { name: 'classic', label: 'Классика (21 пион)', stems: '21 пион', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Премиум (35 пионов)', stems: '35 пионов', priceMultiplier: 1.6 },
      { name: 'deluxe', label: 'Гранд Овация (51 пион)', stems: '51 пион', priceMultiplier: 2.3 },
    ],
    occasion: ['romantic', 'anniversary', 'birthday', 'luxury']
  },
  {
    id: 'florence-cafe-au-lait',
    name: 'Капучино & Нуга',
    subtitle: 'Теплая карамельно-кофейная гамма с розами Toffee',
    category: 'signature',
    categoryLabel: 'Авторские букеты',
    price: 820,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Редкие розы Toffee карамельного оттенка, кофейные гвоздики и сухоцветы в стильной подаче.',
    fullDescription: 'Трендовая палитра в стиле парижских кофеен: приглушенные оттенки корицы, топленого молока, карамели и благородного шоколада. Букет, который вызывает восхищение своей необычной сдержанной роскошью.',
    composition: [
      'Розы эквадорские Toffee (9 шт)',
      'Пионовидные розы Kahala (7 шт)',
      'Гвоздики карамельного тона (7 шт)',
      'Папоротник и ковыль',
      'Крафт цвета латте с бархатной лентой'
    ],
    dimensions: 'Высота: 50 см, Диаметр: 44 см',
    sizes: [
      { name: 'classic', label: 'Стандарт', stems: '23 стебля', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Пышный букет', stems: '33 стебля', priceMultiplier: 1.45 },
    ],
    occasion: ['birthday', 'gratitude', 'luxury']
  },
  {
    id: 'florence-crimson-velvet',
    name: 'Багровый Бархат',
    subtitle: 'Глубокие алые и бордовые розы Red Naomi в авторской сборке',
    category: 'roses',
    categoryLabel: 'Розы',
    price: 720,
    images: [
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Страстный и монументальный букет из отборных бархатных роз глубокого винного оттенка.',
    fullDescription: 'Розы сорта Red Naomi с плотными, как дорогой бархат, лепестками. Классика любовных признаний и торжественных дат, подчеркнутая минималистичной графичной упаковкой Florence.',
    composition: [
      'Голландские розы Red Naomi (25 стеблей 70 см)',
      'Изумрудный эвкалипт',
      'Черная матовая бумага с тиснением Florence Dushanbe',
      'Рубиновая шелковая лента'
    ],
    dimensions: 'Высота: 70 см, Диаметр: 45 см',
    sizes: [
      { name: 'classic', label: '25 роз', stems: '25 стеблей', priceMultiplier: 1.0 },
      { name: 'premium', label: '51 роза', stems: '51 стебель', priceMultiplier: 1.95 },
      { name: 'deluxe', label: '101 роза (Королевский)', stems: '101 стебель', priceMultiplier: 3.8 },
    ],
    occasion: ['romantic', 'anniversary', 'luxury']
  },
  {
    id: 'florence-basket-garden',
    name: 'Корзина «Флорентийский Сад»',
    subtitle: 'Плетеная корзина с садовыми цветами и сезонными ягодами',
    category: 'compositions',
    categoryLabel: 'Цветочные композиции',
    price: 1450,
    isBestseller: true,
    images: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Натуральная французская корзина, наполненная цветами так, будто их только что срезали в утреннем саду.',
    fullDescription: 'Обильная, раскидистая садовая композиция в винтажной плетеной корзине. Гортензии, пионовидные розы, дельфиниум и полевые травы создают ощущение свежести и загородного уюта высшего класса.',
    composition: [
      'Французская гортензия (3 шапки)',
      'Садовые розы David Austin (11 шт)',
      'Маттиола сиреневая и дельфиниум',
      'Плетеная вручную корзина из натуральной ивы',
      'Влагоудерживающий оазис'
    ],
    dimensions: 'Высота: 55 см, Ширина: 60 см',
    sizes: [
      { name: 'classic', label: 'Корзина Медиум', stems: 'Пышная посадка', priceMultiplier: 1.0 },
      { name: 'premium', label: 'Корзина Гранд Сад', stems: 'Увеличенная в 1.5 раза', priceMultiplier: 1.55 },
    ],
    occasion: ['birthday', 'wedding', 'anniversary']
  },
  {
    id: 'florence-french-box-set',
    name: 'Подарочный Сет «Florence Royale»',
    subtitle: 'Цветочная коробка, ароматическая свеча и швейцарский шоколад',
    category: 'gifts',
    categoryLabel: 'Подарки и сеты',
    price: 1100,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Комплексный подарочный набор: живые цветы в фирменной коробке, селективная свеча с ароматом жасмина и конфеты.',
    fullDescription: 'Идеальный готовый подарок без лишних хлопот. В фирменном жестком боксе Florence собраны свежие пионовидные розы, натуральная соевая свеча ручной работы и коробочка крафтовых трюфелей.',
    composition: [
      'Цветочная композиция из роз и эустомы',
      'Парфюмированная свеча Florence «Jardin Blanc» (220г)',
      'Коробка ремесленных трюфелей ручной работы',
      'Поздравительная открытка с каллиграфией',
      'Подарочный пакет Florence'
    ],
    dimensions: 'Размер сета: 35 × 25 × 20 см',
    sizes: [
      { name: 'classic', label: 'Стандартный сет', stems: 'Полный набор', priceMultiplier: 1.0 },
      { name: 'deluxe', label: 'VIP Сет с парфюмом', stems: 'Расширенная комплектация', priceMultiplier: 1.6 },
    ],
    occasion: ['birthday', 'romantic', 'luxury']
  },
  {
    id: 'florence-gentle-hydrangea',
    name: 'Лазурная Гортензия',
    subtitle: 'Крупноцветковая голландская гортензия небесного цвета',
    category: 'signature',
    categoryLabel: 'Авторские букеты',
    price: 490,
    images: [
      'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Воздушный объем и кристальная свежесть: небесно-голубые гортензии в компании эвкалипта.',
    fullDescription: 'Гортензия — символ искренности и душевного тепла. Огромные пушистые соцветия создают потрясающий объем даже в компактном букете.',
    composition: [
      'Голландские премиум гортензии (3 шапки)',
      'Эвкалипт популус',
      'Дизайнерская серая бумага и сатиновая лента'
    ],
    dimensions: 'Высота: 50 см, Диаметр: 45 см',
    sizes: [
      { name: 'classic', label: '3 гортензии', stems: '3 соцветия', priceMultiplier: 1.0 },
      { name: 'premium', label: '5 гортензий', stems: '5 соцветий', priceMultiplier: 1.55 },
      { name: 'deluxe', label: '9 гортензий (Облако)', stems: '9 соцветий', priceMultiplier: 2.5 },
    ],
    occasion: ['birthday', 'gratitude']
  },
  {
    id: 'florence-ambient-candle-set',
    name: 'Арома-коллекция «Dushanbe Nights»',
    subtitle: 'Сет селективных свечей из соевого воска',
    category: 'gifts',
    categoryLabel: 'Подарки и сеты',
    price: 360,
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608181114410-db2ce3519c8a?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Набор из двух свечей ручной работы с нотами инжира, белого кедра и дамасской розы.',
    fullDescription: 'Фирменные свечи Florence с хлопковым фитилем в матовых керамических подсвечниках глубокого темно-зеленого цвета. До 45 часов горения каждой свечи.',
    composition: [
      '2 свечи по 180 грамм',
      '100% органический соевый воск',
      'Ароматические масла из Грасса (Франция)',
      'Деревянные спички в крафтовом тубусе',
      'Подарочная коробка с шелковым бантом'
    ],
    dimensions: 'Коробка: 20 × 12 × 10 см',
    sizes: [
      { name: 'classic', label: 'Дуо-сет (2 свечи)', stems: '2 шт', priceMultiplier: 1.0 },
      { name: 'deluxe', label: 'Трио-сет с диффузором', stems: '3 предмета', priceMultiplier: 1.65 },
    ],
    occasion: ['birthday', 'gratitude', 'luxury']
  }
];

export const STORE_INFO = {
  name: 'Florence Dushanbe',
  legalName: 'Цветочный бутик Florence',
  address: 'ул. Мирзо Турсунзаде, 11, Душанбе, Таджикистан',
  phone: '+992 000 00 11 77',
  phoneClean: '992000001177',
  instagram: 'florence.dushanbe',
  instagramUrl: 'https://www.instagram.com/florence.dushanbe/',
  hours: 'Ежедневно: 09:00 — 23:00',
  deliveryTime: 'Доставка по городу от 60 минут',
  telegram: 'https://t.me/florence_dushanbe',
  whatsappUrl: 'https://wa.me/992000001177?text=',
};
