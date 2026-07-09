import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82NzNiNjcxZi00Y2NkLTQ4NGEtYWQ5Ny1jZGVkMzE4MjNlZDAucG5n" alt="" />
                    <h4 className='text-lg font-medium'>Ashish Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.12</h4>
                    <p className='text-sm bg-gray-100'>Earned</p>
                </div>
            </div>

            <div className='flex justify-center p-3 mt-6 gap-5 items-start'>
                <div className='text-center'>
                    <i className=' text-3xl mb-2 font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className=' text-3xl mb-2 font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className=' text-3xl mb-2 font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails