import StoryCard from '../components/StoryCard'

const stories = [
  {
    id: 1,
    name: 'Lee Jieun',
    src: '/stories-1.jpg',
    profile: '/profile-1.jpg',
  },
  {
    id: 2,
    name: 'Eunha',
    src: '/stories-2.jpg',
    profile: '/profile-2.jpg',
  },
  {
    id: 3,
    name: 'Kang Hyewon',
    src: '/stories-3.jpg',
    profile: '/profile-3.jpg',
  },
  {
    id: 4,
    name: 'Choi Yujin',
    src: '/stories-4.jpg',
    profile: '/profile-4.jfif',
  },
  {
    id: 5,
    name: 'Kim Chaehyun',
    src: '/stories-5.jpg',
    profile: '/profile-5.jpg',
  },
]

export default function Stories() {
  return (
    <div className="mx-auto flex justify-center space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  )
}
