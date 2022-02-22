import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

export default function Post({
  name,
  message,
  timestamp,
  image,
  postImage,
  link,
}) {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={image} width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        {(link && (
          <p className="pt-4">
            {message}{' '}
            <a href={link} target="_blank" className="hover:text-blue-500">
              {link}
            </a>
          </p>
        )) || <p className="pt-4">{message}</p>}
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* Footer Post */}
      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400 shadow-md">
        <div className="inputIcon group rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4 group-hover:text-blue-500" />
          <p className="text-xs group-hover:text-blue-500 sm:text-base">Like</p>
        </div>
        <div className="inputIcon group rounded-none">
          <ChatAltIcon className="h-4 group-hover:text-blue-500" />
          <p className="text-xs group-hover:text-blue-500 sm:text-base">
            Comment
          </p>
        </div>
        <div className="inputIcon group rounded-none rounded-br-2xl">
          <ShareIcon className="h-4 group-hover:text-blue-500" />
          <p className="text-xs group-hover:text-blue-500 sm:text-base">
            Share
          </p>
        </div>
      </div>
    </div>
  )
}
