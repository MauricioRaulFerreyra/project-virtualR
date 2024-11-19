import videoOne from '../assets/video1.mp4'
import videoTwo from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='mt-6 flex flex-col items-center lg:mt-20'>
      <h1 className='text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl'>
        VirtualR build tools
        <span className='bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent'> for developers</span>
      </h1>
      <p className='mt-10 max-w-4xl text-center text-lg text-neutral-500'>
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your
        imagination into immersive reality!
      </p>
      <div className='my-10 flex justify-center'>
        <a href='#' className='mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3'>
          Start for free
        </a>
        <a href='#' className='mx-3 rounded-md border px-4 py-3'>
          Documentation
        </a>
      </div>
      <div className='mt-10 flex justify-center'>
        <video autoPlay loop muted className='mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400'>
          <source src={videoOne} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400'>
          <source src={videoTwo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection
