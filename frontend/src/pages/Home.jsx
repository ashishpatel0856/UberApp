import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel,setConfirmRidePanel] = useState(false)

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

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

    useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-10 pt-14 translate-y-full'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-10 pt-14 translate-y-full'>
              <ConfirmedRide  />
      </div>
    </div>
  )
}

export default Home