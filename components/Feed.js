import Stories from '../components/Stories'
import InputBox from '../components/InputBox'
import Posts from '../components/Posts'
export default function Feed() {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* Input Box */}
        <InputBox />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  )
}
