"use client"
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import next from '../../assets/next.png'
import vue from '../../assets/vue.png'
import mui from '../../assets/mui.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import Image from "next/image";
export default function Skills() {

  const [tabSkill, settabSkill] = useState(0);

  const handleChange = (event, newValue) => {
    settabSkill(newValue);
    
  };

  const HardSkillList = [
    {
      name: "Html",
      image : html,
    },
    {
      name: "Css",
      image : css,
    },
    {
      name: "JavaScript",
      image : js,
    },  
    {
      name: "React.js",
      image : react,
    },
    {
      name: "Next.js",
      image : next,
    },
    {
      name: "Vue.js",
      image : vue,
    },
    {
      name: "Mui",
      image : mui,
    },
    {
      name: "Bootstrap",
      image : bootstrap,
    },
    {
      name: "Tailwind",
      image : tailwind,
    },
   
  ];

  const SoftSkillList = [
    {
      name: "Communication",
      image : "",
    },
    {
      name: "Problem-solving",
      image : "",
    },
    {
      name: "Time management",
      image : "",
    },  
    {
      name: "Team Work",
      image : "",
    },
    {
      name: "Attention to detail",
      image : "",
    },
    
   
  ];


  return (
    <>
   <Box sx={{height: {xs:"calc(100vh - 50px)",md:"calc(100vh - 60px)",lg:"calc(100vh - 80px)"},background: "linear-gradient(to bottom, #FFFFFF, #FF8484)",}}>
   <Grid container sx={{px:{xs:0,lg:10,xl:20,display:"flex",justifyContent:"center",height:"100%"}}}>
    <Box sx={{backgroundColor:"#ffffff",display:"flex",width:"100%",height: {xs:"calc(100vh - 50px)",md:"calc(100vh - 60px)",lg:"calc(100vh - 80px)"},maxWidth:"1920px",position:"relative",overflowX:"hidden",}}>
        <Grid item xs={12} >
        
      <Tabs variant="fullWidth" value={tabSkill} onChange={handleChange}  centered sx={{width:"100%","& .MuiTabs-indicator": {backgroundColor:"#FF8484 !important" ,},}}>
        <Tab label="Hard Skill" sx={{
          height:"80px",
          "&.Mui-selected": { 
            color:"#FF8484"
        },
        "&:hover": {
                    color:"#FF8484",
                    
                  },
        fontWeight:600,
        fontSize:"20px"
        }}/>
        <Tab label="Soft Skill" sx={{
          "&.Mui-selected": { 
            color:"#FF8484"
        },
        "&:hover": {
          color:"#FF8484",
          
        },
        fontWeight:600,
        fontSize:"20px"
        }}/>
      </Tabs>
   

         <Box sx={{display:"flex",width:"100%",my:3,justifyContent:"center",position:"absolute",right: tabSkill === 0 ? 1 : '100%',transition: 'right 0.5s ease-in-out',}}>
        <Grid container >
        {HardSkillList.map((text,index) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} sx={{display:"flex",justifyContent:"center",px:2,py:{xs:1,lg:3}}}>
        <Paper elevation={3} sx={{width:"100%",py:3,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderRadius:"8px",boxShadow: [
                        "0px 5px 20px  rgba(255,132,132, 0.50) !important",
                      ],}}>
        <Image
                  src={text.image}
                  width={100}
                  height={100}
                  alt={text.name}
                />
              <Typography sx={{mt:2}}>{text.name}</Typography>
          </Paper>
        </Grid>
        ) )} 
        </Grid>
        </Box> 

  <Box sx={{display:"flex",width:"100%",my:3,justifyContent:"center",position:"absolute",left: tabSkill === 1 ? 0 : '100%',transition: 'left 0.5s ease-in-out',}}>
        <Grid container >
        {SoftSkillList.map((text,index) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} sx={{display:"flex",justifyContent:"center",px:2,py:{xs:1,lg:3}}}>
        <Paper elevation={3} sx={{width:"100%",py:3,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderRadius:"8px",boxShadow: [
                        "0px 5px 20px  rgba(255,132,132, 0.50) !important",
                      ],
                        }}>
          {text.name}</Paper>
        </Grid>
        ) )} 
        </Grid>
        </Box>  
 
        </Grid>
        </Box>
      </Grid>
    </Box>
</>
  )
}
