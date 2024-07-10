"use client"

import {
    Box,
    Grid,
    Typography,
    Button,
    Paper,
} from "@mui/material";
import React from 'react';
import Image from 'next/image';
import pensookWeb from '../../../../assets/pensookWeb.png';
import resumeWeb from '../../../../assets/resume.png';
import html from '../../../../assets/html.png';
import css from '../../../../assets/css.png';
import javaScript from '../../../../assets/js.png';
import react from '../../../../assets/react.png';
import next from '../../../../assets/next.png';
import vue from '../../../../assets/vue.png';
import mui from '../../../../assets/mui.png';
import bootstrap from '../../../../assets/bootstrap.png'
import tailwind from '../../../../assets/tailwind.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export default function ProjectDetail({ params }) {
    const workid = params.slug;

    const StackUse = [
        { name: 'Html', image: html },
        { name: 'Css', image: css },
        { name: 'JavaScript', image: javaScript },
        { name: 'React', image: react },
        { name: 'Next', image: next },
        { name: 'Vue', image: vue },
        { name: 'Mui', image: mui },
        { name: 'Bootstrap', image: bootstrap },
        { name: 'Tailwind', image: tailwind },
    ];

    const WorkDetail = [
        {
            id: "1",
            mainLebel: "Pensook Landing Page",
            label: "Web Application With Responsive",
            detail: " printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: "www.pensook.com",
            stack: ["Html", "Css", "JavaScript", "React", "Next", "Mui","Bootstrap","Tailwind","Vue"],
            image: pensookWeb,
        },
        {
            id: "2",
            mainLebel: "Resume",
            label: "Web Application With Responsive",
            detail: " printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: "www.atsadawatresume.com",
            stack: ["Html", "Css", "JavaScript", "React", "Next", "Mui"],
            image: resumeWeb,
        },
        {
            id: "3",
            mainLebel: "Classroom",
            label: "Web Application With Responsive",
            detail: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: "www.atsadawatresume.com",
            stack: ["Html", "Css", "JavaScript", "React", "Next", "Mui"]
        },
        
    ];

    const getWorkDetail = WorkDetail.find(data => data.id === workid);

    if (!getWorkDetail) {
        return "ไม่พบข้อมูล";
    }

    return (
        <Box sx={{ height: {xs:"calc(100vh - 50px)",md:"calc(100vh - 60px)",lg:"calc(100vh - 80px)"}, background: "linear-gradient(to bottom, #FFFFFF, #9B78FF)", display:"flex",justifyContent:"center",}}>
            <Box sx={{ mx: { xs: 0, lg: 10, xl: 20 }, mt: { xs: 0, lg: 1 },  maxWidth: "1920px", backgroundColor: "#FFFFFF", display: "flex", py: 5 ,flexDirection: "column",alignItems:"center",}}>
            <Box sx={{width:"95%",display:"flex",alignItems:"center",pb:5}}>
                <Box sx={{cursor:"pointer",display:"flex",alignItems:"center",pr:1,"&:hover":{
                    
                }}} onClick={() => { window.location.href = `/projects`; }}>
                <ChevronLeftIcon sx={{fontSize:"50px",}} />{/* <Typography sx={{fontSize:"18px",fontWeight:600}}>Back</Typography> */}
                </Box>
            </Box>
                <Grid container >
                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", }}>
                       <Box sx={{width:{xs:"90%",md:"80%",lg:"90%"},}}>
                       
                        <Image
                            src={getWorkDetail.image}
                            style={{ objectFit: "cover", width: "100%", height: "auto" }}
                            alt="Picture of the author"
                        />
                         </Box>
                    </Grid>

                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column",alignItems:{xs:"center",lg:"start "},pt:{xs:3,lg:0}}}>
                     
                        <Box sx={{width:{xs:"90%",md:"80%",lg:"90%"}}}>
                        <Box sx={{ display: "flex", justifyContent:"space-between",alignItems:"center" }}>
                            <Typography sx={{ fontSize: {xs:"18px",md:"25px",lg:"35px"}, lineHeight: 1,  fontWeight: 600 }}>
                                {getWorkDetail.mainLebel}
                            </Typography>
                            <Typography sx={{ fontSize: {xs:"10px",md:"15px",lg:"15px"}, lineHeight: 1.3 }}>
                                {getWorkDetail.label}
                            </Typography>
                        </Box>
                        <Box sx={{ py: {xs:1,lg:3} ,flex: 1}}>
                            <Typography sx={{ fontSize: {xs:"10px",md:"15px",lg:"15px"}, width: {xs:"100%",lg:"90%"} }}>
                                {getWorkDetail.detail}
                            </Typography>
                        </Box>
                        </Box>


                        <Box sx={{pt: 3 ,display:"flex",width:{xs:"90%",md:"80%",lg:"90%",justifyContent:"space-between"}}}>
                            <Button variant="contained" sx={{ fontSize:{xs:"10px",md:"12px",lg:"14px"},borderRadius: "30px", backgroundColor: "#9B78FF" }}>Click to Link</Button>
                            <Button variant="outline" sx={{ fontSize:{xs:"10px",md:"12px",lg:"14px"},visibility: {xs:"visible",},borderRadius: "30px",  }}>Link to Github</Button>
                        </Box>

                    
                    </Grid>

                    <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center", }}>
                        <Box sx={{ width: {xs:"90%",md:"80%",lg:"95%"}, }}>
                            <Typography sx={{ py: 5, fontSize: "30px", fontWeight: 600 }}>
                                Stack
                            </Typography>
                            <Box sx={{ 
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
  gap: 2,
  width: "100%",
 
}}>
  {getWorkDetail.stack.map((text, index) => {
    const stackItem = StackUse.find(item => item.name === text);
    return (
      <Paper 
        key={index} 
        elevation={5} 
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        {stackItem && (
          <Image
            src={stackItem.image}
            style={{ width: 50, height: 50 }}
            alt={text}
          />
        )}
        {text}
      </Paper>
    );
  })}
</Box>
                        </Box>
                    </Grid>

                    


                </Grid>
            </Box>
        </Box>
    );
}
