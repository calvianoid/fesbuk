import SidebarRow from './SidebarRow'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from '@heroicons/react/solid'
import {
  ShoppingCartIcon,
  ChevronDoubleDownIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div className="max-w-{600px} xl:min-w-{300px} mt-5 p-2">
      <SidebarRow src="/profile-pic.png" title="Calviano Nathanael" />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDoubleDownIcon} title="See More" />
    </div>
  )
}
