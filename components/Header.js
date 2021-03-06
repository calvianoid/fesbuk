import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

export default function Header() {
  return (
    <div className="x-50 sticky top-0 flex items-center bg-white p-2 shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image src="/logo-fb.svg" width={40} height={40} layout="fixed" />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 flex-shrink text-gray-500" />
          <input
            type="text"
            placeholder="Search.."
            className="ml-2 hidden items-center bg-transparent outline-none md:inline-flex"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        {/* Profile Pic */}
        <Image src="/profile-pic.png" width={40} height={40} layout="fixed" />

        <p className="hidden whitespace-nowrap pr-3 font-semibold md:inline-flex">
          Calviano Nathanael
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}
