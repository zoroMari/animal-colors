export interface ICat {
  id: string;
  value: string;
  images: string[];
}

export class Cat implements ICat {
  public id: string;
  public value: string;
  public images: string[];

  constructor({
    id,
    value,
    images,
  }: ICat) {
    this.id = id;
    this.value = value;
    this.images = images;
  }
}

export const catsData: Cat[] = [
  new Cat({
    id: 'bengal',
    value: 'Bengal',
    images: [
      './assets/images/bengal/bengal_01.jpg',
      './assets/images/bengal/bengal_02.jpg',
      './assets/images/bengal/bengal_03.jpg',
      './assets/images/bengal/bengal_04.jpg',
      './assets/images/bengal/bengal_05.jpg',
      './assets/images/bengal/bengal_06.jpg',
      './assets/images/bengal/bengal_07.jpg',
      './assets/images/bengal/bengal_08.jpg',
      './assets/images/bengal/bengal_09.jpg',
      './assets/images/bengal/bengal_10.jpg',
      './assets/images/bengal/bengal_11.jpg',
      './assets/images/bengal/bengal_12.jpg',
    ],
  }),

  new Cat({
    id: 'britishShorthair',
    value: 'British Shorthair',
    images: [
      './assets/images/britishShorthair/britishShorthair_01.jpg',
      './assets/images/britishShorthair/britishShorthair_02.jpg',
      './assets/images/britishShorthair/britishShorthair_03.jpg',
      './assets/images/britishShorthair/britishShorthair_04.jpg',
      './assets/images/britishShorthair/britishShorthair_05.jpg',
    ],
  }),

  new Cat({
      id: 'abyssinian',
      value: 'Abyssinian',
      images: [
        './assets/images/abyssinian/abyssinian_01.jpg',
        './assets/images/abyssinian/abyssinian_02.jpg',
        './assets/images/abyssinian/abyssinian_03.jpg',
        './assets/images/abyssinian/abyssinian_04.jpg',
      ],
    }),

  new Cat({
    id: 'americanShorthair',
    value: 'American Shorthair',
    images: [
      './assets/images/americanShorthair/americanShorthair_01.jpg',
      './assets/images/americanShorthair/americanShorthair_02.jpg',
      './assets/images/americanShorthair/americanShorthair_03.jpg',
      './assets/images/americanShorthair/americanShorthair_04.jpg',
      './assets/images/americanShorthair/americanShorthair_05.jpg',
      './assets/images/americanShorthair/americanShorthair_06.jpg',
      './assets/images/americanShorthair/americanShorthair_07.jpg',
    ],
  }),

  new Cat({
    id: 'siamese',
    value: 'Siamese',
    images: [
      './assets/images/siamese/siamese_01.jpg',
      './assets/images/siamese/siamese_02.jpg',
      './assets/images/siamese/siamese_03.jpg',
      './assets/images/siamese/siamese_04.jpg',
      './assets/images/siamese/siamese_05.jpg',
    ],
  }),
]
