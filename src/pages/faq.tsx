
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Questions from '@/Components/Faq/Questions'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'
   
const data={
    cont1:"Frequently Asked Questions",
    cont2:"Find answers to common questions about Utkal Groups services and operations"
  }
export default function faq() {
  return (
    <MainLayouts>
       <Commonbreadcrumb data={data}/> 
       <Questions/>
    </MainLayouts>
  )
}
