import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const contacts = [
  {
    id: 1,
    name: 'Lee Jieun',
    src: '/profile-1.jpg',
  },
  {
    id: 2,
    name: 'Eunha',
    src: '/profile-2.jpg',
  },
  {
    id: 3,
    name: 'Kang Hyewon',
    src: '/profile-3.jpg',
  },
  {
    id: 4,
    name: 'Choi Yujin',
    src: '/profile-4.jfif',
  },
  {
    id: 5,
    name: 'Kim Chaehyun',
    src: '/profile-5.jpg',
  },
]

export default function Widgets() {
  return (
    <div className="mt-5 hidden w-60 flex-col p-2 lg:flex">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.key} name={contact.name} src={contact.src} />
      ))}
    </div>
  )
}
