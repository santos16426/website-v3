import { Shell } from 'lucide-react'

const Loader = () => {
  return (
    <div className="absolute w-screen h-screen flex flex-col justify-center items-center bg-[#E3E1DF]  text-center">
      <div className="w-full flex flex-col justify-center items-center header !text-orange-400 text-4xl">
        {'Billy Joe Santos'}
        <Shell className="animate-spin mt-5" />
      </div>
    </div>
  )
}

export default Loader
