import React from 'react'

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "27th Km Milestone on the Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad, Uttar Pradesh 201015, India.",
    "26th Km Milestone on the Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad, Uttar Pradesh 201015, India.",
    "25th Km Milestone on the Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad, Uttar Pradesh 201015, India.",
    "24th Km Milestone on the Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad, Uttar Pradesh 201015, India.",
  ]
  return (
    <div>
      {/* this is just a sample data  */}

      {
        locations.map(function(elem,idx) {
          return <div
          key={idx}
          onClick={()=>{
            props.setVehiclePanel(true)
            props.setVehiclePanel(false)
          }}
           className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel