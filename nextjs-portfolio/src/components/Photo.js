import Image from 'next/image'

function Photo ({ photo }) {
  return (
    <div className='flex flex-col gap-1 justify-end'>
      <Image
        src={photo.photoURL}
        alt={photo.name}
        className='w-full rounded-lg'
        width={1600}
        height={1000}
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">{ photo.name }</p>
    </div>
  )
}

export default Photo
