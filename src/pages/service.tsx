
import ServiceDetails from '@/Components/Service/Servicedetails'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'

import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'
const data={
  cont1:"Our Services",
  cont2:"Delivering innovative solutions across industries"
}
export default function service() {
  return (
    <MainLayouts>
      <Commonbreadcrumb data={data}/>
        <ServiceDetails/>
      
      
    </MainLayouts>
  )
}