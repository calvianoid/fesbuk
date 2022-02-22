import Image from 'next/image'
export default function Contact({ name, src }) {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-xl hover:bg-gray-200">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p className="font-semibold">{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-400"></div>
    </div>
  )
}
