const ProfileImage = () => {
  return (
    <div
      className="relative w-[300px] sm:w-[280px] sm:h-[280px] lg:w-[350px] h-[300px] lg:h-[450px] rounded-full lg:rounded-lg mb-5 cursor-pointer shadow-2xl transition-all hover:scale-105"
      style={{
        backgroundImage: 'url(/images/profile.jpg)',
        backgroundSize: 'cover',
      }}
    />
  )
}

export default ProfileImage
