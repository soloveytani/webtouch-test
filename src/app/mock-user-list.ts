import { User } from './user';

export const USER_LIST: User[] = [
  {
    login: 'king',
    firstName: 'Jon',
    lastName: 'Snow',
    avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg'
  },
  {
    login: 'queen',
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg'
  },
  {
    login: 'lady',
    firstName: 'Sansa',
    lastName: 'Stark',
    avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg'
  },
  {
    login: 'little_lion',
    firstName: 'Tyrion',
    lastName: 'Lannister',
    avatar: 'https://pm1.narvii.com/6904/e54dbaca42aeb19140fd382340a3fcb803a58d2cr1-235-307v2_128.jpg'
  },
  {
    login: 'faceless_girl',
    firstName: 'Arya',
    lastName: 'Stark',
    avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440'
  },
  {
    login: 'three_eyed_raven',
    firstName: 'Brandon',
    lastName: 'Stark',
    avatar: 'https://78.media.tumblr.com/avatar_fbd7b7d18b24_128.pnj'
  },
  {
    login: 'queen_always',
    firstName: 'Cersei',
    lastName: 'Lannister',
    avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg'
  },
  {
    login: 'kingslayer',
    firstName: 'Jaime',
    lastName: 'Lannister',
    avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg'
  },
  {
    login: 'maester',
    firstName: 'Samwell',
    lastName: 'Tarly',
    avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg'
  },
  {
    login: 'spider',
    firstName: 'Varys',
    lastName: '',
    avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg'
  },
];

export const USER_INFO: {} = {
  king: {
    firstName: 'Jon',
    lastName: 'Snow',
    about: 'I\'m the watcher on The Wall.',
    age: '22',
    city: 'Winterfell',
    avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg'
  },
  queen: {
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    about: 'Daenerys of the House Targaryen, the First of Her Name Daenerys Stormborn, The Mother of Dragons, The Queen Across the Sea',
    age: '22',
    city: 'Dragonstone',
    avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg'
  },
  lady: {
    firstName: 'Sansa',
    lastName: 'Stark',
    about: 'I did what I had to do to survive, my lady. But I am a Stark, I will always be a Stark',
    age: '19',
    city: 'Winterfell',
    avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg'
  },
  little_lion: {
    firstName: 'Tyrion',
    lastName: 'Lannister',
    about: 'Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.', // tslint:disable-line
    age: '38',
    city: 'Casterly Rock',
    avatar: 'https://pbs.twimg.com/profile_images/638039233748430848/7J1qNIXT_400x400.jpg'
  },
  faceless_girl: {
    firstName: 'Arya',
    lastName: 'Stark',
    about: 'When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.',
    age: '17',
    city: 'Winterfell',
    avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440'
  },
  three_eyed_raven: {
    firstName: 'Brandon',
    lastName: 'Stark',
    about: 'I need to learn to see better. When the Long Night comes again...I need to be ready.',
    age: '16',
    city: 'Winterfell',
    avatar: 'https://thefilmchronicles.files.wordpress.com/2016/05/game-of-thrones-s6-ep5-the-door-max-von-sydow-as-the-three-eyed-raven-and-isaac-hempstead-wright-as-bran-stark-21.jpg?w=256&h=256&crop=1' // tslint:disable-line
  },
  queen_always: {
    firstName: 'Cersei',
    lastName: 'Lannister',
    about: 'When you play the game of thrones, you win or you die. There is no middle ground.',
    age: '42',
    city: 'Casterly Rock',
    avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg'
  },
  kingslayer: {
    firstName: 'Jaime',
    lastName: 'Lannister',
    about: 'There are no men like me. Only me.',
    age: '42',
    city: 'Casterly Rock',
    avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg'
  },
  maester: {
    firstName: 'Samwell',
    lastName: 'Tarly',
    about: 'Sometimes a man has to make hard choices, choices that might look wrong to others, but you know are right in the long run.',
    age: '24',
    city: 'Horn Hill',
    avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg'
  },
  spider: {
    firstName: 'Varys',
    lastName: '',
    about: 'Storms come and go, the big fish eat the little fish, and I keep on paddling',
    age: '',
    city: 'Lys',
    avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg'
  },
};

export const MESSAGES_HISTORY: {} = {
  king: {
    firstName: 'Jon',
    lastName: 'Snow',
    avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg',
    messages: [
      { type: 'incoming', text: 'Hi! How are you?' },
      { type: 'outgoing', text: 'Hi, Jon! I\'m fine. And u? What is something new on the Wall?' }
    ]
  },
  queen: {
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg',
    messages: [
      { type: 'outgoing', text: 'Hi, Daeny! I would like to ask you one question. Where do you color your hair? I need your master phone quickly!!!' }, // tslint:disable-line
      { type: 'incoming', text: 'Hello! I\'m sorry but it\'s my secret=(' },
      { type: 'outgoing', text: 'Oh(..... Ok, I understand.' },
      { type: 'outgoing', text: 'So, what did you do today?' },
      { type: 'incoming', text: 'I was flying by Dracaris to Vesteros for shopping. And u?' },
    ]
  },
  lady: {
    firstName: 'Sansa',
    lastName: 'Stark',
    avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg',
    messages: [
      { type: 'outgoing', text: 'Sansa, good morning!' },
      { type: 'incoming', text: 'Hi, Tania) Are you going to Big Party this Friday?' },
      { type: 'outgoing', text: 'Unfortunately, no( I have nothing to wear((( I need some new dress' },
      { type: 'incoming', text: 'It\'s a pity(((' },
      { type: 'incoming', text: 'Mm..... I think I have a solution!' },
      { type: 'incoming', text: 'You can take one of my dresses.' },
      { type: 'outgoing', text: 'Really?? Thank you my dear! It will be nice!' },
    ]
  },
  little_lion: {
    firstName: 'Tyrion',
    lastName: 'Lannister',
    avatar: 'https://pm1.narvii.com/6904/e54dbaca42aeb19140fd382340a3fcb803a58d2cr1-235-307v2_128.jpg',
    messages: [
      { type: 'outgoing', text: 'Hi, Tyrion!' },
    ]
  },
  faceless_girl: {
    firstName: 'Arya',
    lastName: 'Stark',
    avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440',
    messages: [],
  },
  three_eyed_raven: {
    firstName: 'Brandon',
    lastName: 'Stark',
    avatar: 'https://78.media.tumblr.com/avatar_fbd7b7d18b24_128.pnj',
    messages: [
      { type: 'outgoing', text: 'Hi, Bran!' },
      { type: 'incoming', text: 'Hello! I saw you yesterday in my dream)' },
    ]
  },
  queen_always: {
    firstName: 'Cersei',
    lastName: 'Lannister',
    avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg',
    messages: []
  },
  kingslayer: {
    firstName: 'Jaime',
    lastName: 'Lannister',
    avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg',
    messages: []
  },
  maester: {
    firstName: 'Samwell',
    lastName: 'Tarly',
    avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg',
    messages: []
  },
  spider: {
    firstName: 'Varys',
    lastName: '',
    avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg',
    messages: []
  }
};
