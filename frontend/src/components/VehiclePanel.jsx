import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehiclePanel(false)
                }}
                className='p-1 text-center w-[93%] absolute top-0 '><i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a  Vehicle</h3>
            <div
                onClick={() => { props.setConfirmRidePanel(true) }}
                className='flex border-2 mb-2 active:border-black bg-gray-100  rounded-xl  items-center justify-between p-3'>
                <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtoYgO1l_DEsuaPJm3a8WJ4vNfK-A-WnD7rgMyZc3I9fMuXnQzZzGtuUP&s=10" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'> UberGo <span><i className='ri-user-3-fill'></i>4</span>    </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>

            <div
                onClick={() => { props.setConfirmRidePanel(true) }}
                className='flex border-2 active:border-black mb-2  bg-gray-100 rounded-xl  items-center justify-between p-3'>
                <img className='h-12' src="https://img.autocarpro.in/autocarpro/4d3ef0c9-c75e-46a3-af25-fab216e0bfe8_Untitled.jpg?w=750&h=490&q=75&c=1" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'> Moto <span><i className='ri-user-3-fill'></i>1</span>    </h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹65.20</h2>
            </div>

            <div
                onClick={() => { props.setConfirmRidePanel(true) }}
                className='flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl  items-center justify-between p-3'>
                <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypcJwGKaAvAV_zkUSnCSZCRZyPKRS8xh9p5r7FPHyfQ&s=10" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'> Auto <span><i className='ri-user-3-fill'></i>3</span>    </h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹155.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel