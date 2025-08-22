
import { photo, team6 } from '@/assests/Team'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Readmore from '@/Components/Home/Readmore'
import TeamSection from '@/Components/Team/Teamsection'

import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'
const data={
    cont1:"Our Team",
    cont2:"Driven by passion, united by purpose"
  }
export default function team() {
  return (
    <MainLayouts>
     <Commonbreadcrumb data={data}/>
    <TeamSection/>
 
    </MainLayouts>
  )
}
