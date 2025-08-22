
import { contact1 } from '@/assests/Contact'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Contactinformation from '@/Components/Contact/Contactinformation'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'

const data={
    cont1:"Contact Us",
    cont2:"Get in touch with our team for inquiries, partnerships, or support"
  }
export default function contact() {
  return (
    <MainLayouts>
         <Commonbreadcrumb data={data}/>
         <Contactinformation/>
        
    </MainLayouts>
  )
}
