import lottie, { AnimationItem } from 'lottie-web' // Import AnimationItem
import PaymentFailed from './success_lottie.json'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
// import HomeIcon from '@mui/icons-material/Home';
// import ReplayIcon from '@mui/icons-material/Replay';
import Link from 'next/link'

const SuccessLottie = () => {
  const animationContainer = useRef<HTMLDivElement>(null)
  const animationInstance = useRef<AnimationItem | null>(null) // Adjust the type here
  const parentContainer = useRef<HTMLDivElement>(null)

//   const router = useRouter();

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: PaymentFailed,
      // Add width and height properties here
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice', // Adjust this according to your needs
        progressiveLoad: true,
      },
    })

    return () => {
      // Cleanup function to stop animation when component unmounts
      if (animationInstance.current) {
        animationInstance.current.destroy()
      }
    }
  }, [])


  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 py-5 lg:py-20 ">
      <div className="flex items-center justify-center gap-4 text-center order-2 sm:order-1">
        <div className="flex w-[80%] flex-col gap-4">
          <h1 className="text-3xl x3l:mt-8">Registered Successfully</h1>
          {/* <p>
            This payment was unsuccessful accidentally. If you think its your gateway problem then{' '}
            <span className="hover: cursor-pointer text-green-600 hover:text-green-700">try again</span> or{' '}
            <span className="cursor-pointer text-green-600 hover:text-green-700">contact to our support</span>
          </p> */}
          <hr className="h-[1px] w-[98%] bg-slate-300" />
          <div className='flex gap-4 flex-col sm:flex-row'>
            <button title="Try" type="button" className="registerButton flex justify-center items-center gap-1">
              {/* <span> <ReplayIcon/> </span> */}
             <span className=' m-0 '> Try Again </span>
            </button>
             <button title="Try" type="button" className="registerButton flex items-center justify-center gap-1"
            // onClick={()=>{
            //   router.push('/register');
            // }}
            >
             <Link href='/login'><span className='m-0'>Back to Register</span> </Link>
            {/* <span> <HomeIcon/> </span> */}
            </button> 
          </div>
          <button
            title="phone"
            type="button"
            className="w-full rounded-lg border border-green-600 px-5 py-3.5 text-center text-sm font-medium text-green-600 hover:border-green-700  hover:text-green-700 focus:outline-none focus:ring-4"
          >
            Call: 0800-0121212 (Toll Free)
          </button>
          <p>
            Nothing Work? <span className="cursor-pointer text-green-600 hover:text-green-700">Submit A Report</span>
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center order-1 sm:order-2">
        <div ref={parentContainer}>
          <div className=" h-[350px] w-[350px] " ref={animationContainer}></div>
        </div>
      </div>
    </div>
  )
}

export default SuccessLottie
