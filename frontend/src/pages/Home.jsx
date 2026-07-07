import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
        // opacity:1

      })
      gsap.to(panelCloseRef.current, {
        opacity: 1

      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeg" alt="" />
      </div>

      <div className='  flex flex-col justify-end h-screen absolute top-3 w-full '>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>

          </h5>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
            />

            <input
              onClick={() => setPanelOpen(true)}

              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-6' type="text" placeholder='Enter your destination'
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bg-white bottom-0 px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a  Vehicle</h3>
        <div className='flex border-2 mb-2 border-black rounded-xl  items-center justify-between p-3'>
          <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtoYgO1l_DEsuaPJm3a8WJ4vNfK-A-WnD7rgMyZc3I9fMuXnQzZzGtuUP&s=10" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> UberGo <span><i className='ri-user-3-fill'></i>4</span>    </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>rs193.20</h2>
        </div>

        <div className='flex border-2 mb-2 border-black rounded-xl  items-center justify-between p-3'>
          <img className='h-12' src="https://img.autocarpro.in/autocarpro/4d3ef0c9-c75e-46a3-af25-fab216e0bfe8_Untitled.jpg?w=750&h=490&q=75&c=1" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> Moto <span><i className='ri-user-3-fill'></i>1</span>    </h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold'>rs65.20</h2>
        </div>

        <div className='flex border-2 mb-2 border-black rounded-xl  items-center justify-between p-3'>
          <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypcJwGKaAvAV_zkUSnCSZCRZyPKRS8xh9p5r7FPHyfQ&s=10" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> Auto <span><i className='ri-user-3-fill'></i>3</span>    </h4>

            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>rs155.20</h2>
        </div>

        <div className='flex border-2 mb-2 border-black rounded-xl  items-center justify-between p-3'>
          <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtoYgO1l_DEsuaPJm3a8WJ4vNfK-A-WnD7rgMyZc3I9fMuXnQzZzGtuUP&s=10" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> UberGo <span><i className='ri-user-3-fill'></i>4</span>    </h4>

            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>rs193.20</h2>
        </div>
      </div>
    </div>
  )
}

export default Home