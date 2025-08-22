
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'
 
const data={
    cont1:"Our Team Details ",
    cont2:"Home > Our Team Details"
  }
export default function teamdetails() {
  return (
    <MainLayouts>
        <Commonbreadcrumb data={data}/> 
    </MainLayouts>
  )
}
