import React from 'react'
import { Suspense } from 'react'
import ProjectDetail from './component/ProjectDetail'
import { Box } from '@mui/material'
import loading from './loading'
export default function page({params}) {
    
  return (
    <Suspense fallback={<loading />}>
    <ProjectDetail params={params}/>
    </Suspense>
   
  )
}
