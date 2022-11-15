import images from './images';

const wines = [
  {
    title: 'Chicken salad',
    price: '156DH',
    tags: 'Salad',
  },
  {
    title: 'Tricolour salad',
    price: '256DH',
    tags: 'Salad',
  },
  {
    title: 'Summer squash',
    price: '156DH',
    tags: 'Salad',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
];

const cocktails = [
  {
    title: 'Sweet Chili almonds',
    price: '356DH',
    tags: 'Chilli',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
  {
    title: '',
    price: '156DH',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
