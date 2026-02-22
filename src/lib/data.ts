export interface Anime {
  id: string;
  title: string;
  cover: string;
  rating: number;
  episodes: number;
  description: string;
  categories: string[];
  status: 'Ongoing' | 'Completed';
  year: number;
  studio: string;
}

export const categories = [
  'Action', 'Romance', 'Adventure', 'Fantasy', 'Comedy', 'Horror', 'School'
];

export const animeList: Anime[] = [
  {
    id: '1',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    cover: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    episodes: 26,
    description: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
    categories: ['Action', 'Fantasy', 'Adventure'],
    status: 'Ongoing',
    year: 2019,
    studio: 'ufotable'
  },
  {
    id: '2',
    title: 'Jujutsu Kaisen',
    cover: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1000&auto=format&fit=crop',
    rating: 4.8,
    episodes: 24,
    description: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.',
    categories: ['Action', 'Fantasy', 'Horror'],
    status: 'Ongoing',
    year: 2020,
    studio: 'MAPPA'
  },
  {
    id: '3',
    title: 'Your Lie in April',
    cover: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1000&auto=format&fit=crop',
    rating: 4.7,
    episodes: 22,
    description: 'A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own.',
    categories: ['Romance', 'School', 'Comedy'],
    status: 'Completed',
    year: 2014,
    studio: 'A-1 Pictures'
  },
  {
    id: '4',
    title: 'Attack on Titan',
    cover: 'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    episodes: 75,
    description: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    categories: ['Action', 'Fantasy', 'Horror'],
    status: 'Completed',
    year: 2013,
    studio: 'WIT Studio'
  },
  {
    id: '5',
    title: 'Spy x Family',
    cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop',
    rating: 4.6,
    episodes: 12,
    description: 'A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.',
    categories: ['Action', 'Comedy', 'School'],
    status: 'Ongoing',
    year: 2022,
    studio: 'Wit Studio x CloverWorks'
  },
  {
    id: '6',
    title: 'Mushoku Tensei',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    rating: 4.5,
    episodes: 23,
    description: 'When a 34-year-old underachiever gets run over by a bus, his story doesn\'t end there. Reincarnated in a new world as an infant, Rudy will seize every opportunity to live the life he\'s always wanted.',
    categories: ['Adventure', 'Fantasy', 'Romance'],
    status: 'Ongoing',
    year: 2021,
    studio: 'Studio Bind'
  }
];

export const featuredAnime = animeList.slice(0, 3);
export const trendingAnime = animeList.slice(3, 6);
export const newReleases = animeList.slice(0, 4);
export const popularAnime = animeList.slice(2, 6);
