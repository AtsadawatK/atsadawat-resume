"use client"
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Cover2 from '../../assets/cover2.png'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AdjustIcon from '@mui/icons-material/Adjust';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function AboutMe() {
  
  const ProfileList = [
    {
     
     ProfileHead: "Name",
     ProfileTest: "Atsadawat Kontha"
    },
    { 
     
     ProfileHead: "Age",
     ProfileTest: "23 "
    },
    {
     
      ProfileHead: "Nationality",
      ProfileTest: "Thai"
    },
    { 
      ProfileHead: "Degree",
      ProfileTest: "Information Technology"
    },
    { 
      ProfileHead: "University",
      ProfileTest: "Prince of Songkla University"
    },
    { 
      ProfileHead: "Interest",
      ProfileTest: "Frontend Developer , Web Developer"
    },
  ];

  const EducationList = [
    {
     
     Year: "2013 - 2016",
     Education: "Bangsawan Wittayakhom",
     Name : "Junior Hight School"
    },
    { 
     
      Year: "2017 - 2019",
      Education: "Suratthani Technical College",
      Name : "Information Technology"
    },
    {
     
      Year: "2020 - 2024",
     Education: "Prince of Songkla University",
     Name : "Information Technology"
    },
    
  ];

  const WorkList = [
    {
    position: "Frontend Developer",
    project : "My Personal Project",
    time:"4 Month"
    },
    { 
      position: "Frontend Developer",
      project : "Pensook Healthcare Company",
      time:"5 Month"
    },
   
  ];

  const MyDoing = [
    {
    label : "My Personal Project",
      detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 ranging across all continents except Antarctica"
    },
    { 
    label : "Pensook Healthcare Company",
    detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 ranging across all continents except Antarctica"
    },
    { 
      label : "Pensook Healthcare Company",
      detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 ranging across all continents except Antarctica"
      },
      { 
        label : "Pensook Healthcare Company",
        detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 ranging across all continents except Antarctica"
        },
   
  ];




  return (
    <>
   
  
       <Grid container sx={{pb:{xs:0,lg:3},px:{xs:0,lg:10,xl:20},display:"flex",justifyContent:"center",background: "linear-gradient(to bottom, #FFFFFF, #B6DAFF)",}}>

        {/*  ส่วนโปรโปรไฟล์ และ ติดต่อ */}

         <Box sx={{maxWidth:"1920px",width:"100%",backgroundColor:"#003675",mt:{xs:0,lg:1},borderRadius:{xs:"0px",lg:"8px"}}}>
       <Grid item xs={12} sx={{py:{xs:4,lg:5},px:3,display:"flex",flexDirection:{xs:"column",sm:"row"},}}>

       <Grid item xs={12} lg={6} sx={{display:"flex",}}>
        <Box sx={{height:"100%",width:"100%",alignItems:{xs:"start",lg:"center"},display:"flex",flexDirection:{xs:"column",lg:"row"},}}>

        <Box sx={{display: 'inline-block',position:"relative"}}>
        <Avatar alt="Profile Image" src={Cover2} sx={{width:{xs:100,lg:150},height:{xs:100,lg:150},}}/>
        <SwitchAccountIcon sx={{color:"#1877F2",position: 'absolute', 
          bottom: {xs:5,lg:5}, 
          right: {xs:7,lg:20}, 
          transform: 'translate(-25%, 25%)' }}/>
        </Box>
        <Box sx={{ml:{xs:0,lg:5},mt:{xs:2,lg:0}}}>
        <Typography sx={{color:"#4B4B4B",fontSize:{xs:"20px",md:"20px",lg:"25px"},color:"#FFFFFF"}}>Atsadawat Kontha</Typography>
        <Typography sx={{color:"#4B4B4B",color:"#FFFFFF",fontSize:{xs:"15px",md:"15px",lg:"15px"}}}>Frontend Developer</Typography>
        </Box>
        </Box>
      </Grid>
   
       <Grid item xs={12} lg={6}  sx={{display:"flex",}}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"start",width:"100%",alignItems:{xs:"start",sm:"end"},pt:{xs:3,lg:0}}}>
            <Box>
          <Typography sx={{color:"#4B4B4B",display:"flex",fontSize:{xs:"15px",md:"15px",lg:"20px"},alignItems:"center",color:"#FFFFFF"}}><EmailIcon sx={{mr:2}}/>Email : atsadawat.k@gmail.com</Typography>
        <Typography sx={{color:"#4B4B4B",display:"flex",py:1,alignItems:"center",fontSize:{xs:"15px",md:"15px",lg:"20px"},color:"#FFFFFF"}}><PhoneIcon sx={{mr:2}}/>Phone : 092-814-3707</Typography>
        <Box sx={{display:'flex',alignItems:"center",}}>
        <FaFacebookSquare style={{width:40,height:40,color:"#1877F2",}}/>
        <FaLine style={{width:37,height:37,marginLeft:5,color:"#00B900",}}/>
        </Box>
        </Box>
          </Box>
       </Grid> 
       </Grid>
       </Box>  
 


       {/* ส่วนแสดง Detail ประวัติส่วนตัว */}
         <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
        <Box sx={{mt:{xs:0,lg:1},maxWidth:"1920px",flexDirection:{xs:"column",md:"row"},display:"flex",backgroundColor:"#FFFFFF",borderRadius:{xs:"0px",lg:"8px"}}}>
       <Grid item xs={12} md={6} sx={{display:"flex",borderRadius:"10px",px:{xs:3,},py:3,flexDirection:"column",}}>
          
       <Box >
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"14px",md:"16px"}}}>About Me :</Typography>
<Divider sx={{my:1,width:"100%"}}/>
</Box>
       <Typography sx={{color:"#4B4B4B",color:"#1877F2",fontSize:{xs:"14px",md:"16px"}}}>I'm Atsadawat Kontha</Typography>
       <Typography sx={{color:"#4B4B4B",color:"grey",fontSize:{xs:"14px",md:"16px"}}}>Welcome to my Curriculum Vitae website. I am delighted to present my personal information, accomplishments, and work history. I specialize in developing front-end web applications. Click button below for dowload my CV</Typography>
       <Button variant="outlined" sx={{my:2,}}>Dowload CV</Button>
      </Grid>

      <Grid item xs={12} md={6}sx={{display:"flex",borderRadius:"10px",px:{xs:5,lg:10},py:{xs:1,md:3},}}>
     
      <Box sx={{display:"flex",flexDirection:"column"}}>
      {ProfileList.map((text, index) => (
        <Box key={index} sx={{display:"flex",width:"100%",py:0.5}}>
      <Typography sx={{color:"#4B4B4B",color:"#000000",width:"20%",fontSize:{xs:"14",md:"16px"}}}>{text.ProfileHead}</Typography>
      <Typography sx={{color:"#4B4B4B",color:"grey",px:5,fontSize:{xs:"14px",md:"16px"}}}>:</Typography>
      <Typography sx={{color:"#4B4B4B",color:"grey",width:"50%",fontSize:{xs:"14px",md:"16px"}}}>{text.ProfileTest}</Typography>
      </Box>
       ))} 
      </Box>
    
      </Grid>

      </Box>

      </Grid> 
  
     


 {/*  ส่วนแสดประวัติการศึกษา และ ประวัติการทำงาน */}
  <Grid item xs={12} sx={{display:"flex",justifyContent:"center",}}>
  <Box sx={{mt:{xs:0,lg:1},maxWidth:"1920px",flexDirection:{xs:"column",md:"row"},display:"flex",backgroundColor:"#FFFFFF",borderRadius:{xs:"0px",lg:"8px"}}}>
<Grid item xs={12} md={6} sx={{display:"flex",borderRadius:"10px",flexDirection:"column",px:3,py:3,}}>
<Box >
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"14px",md:"16px"}}}>Education & Experiances</Typography>
<Divider sx={{my:1,width:"100%"}}/>
</Box>
<Grid item xs={12} sx={{display:"flex",borderRadius:"10px",}}>
<Grid item xs={6} sx={{display:"flex",borderRadius:"10px",}}>
<Box sx={{display:"flex",flexDirection:"column",alignItems:"start",width:"100%"}}>
<SchoolIcon sx={{width:{xs:40,md:60},height:{xs:40,md:60},color:"grey"}}/>
<Typography sx={{color:"#4B4B4B",color:"#000000",mb:3,fontSize:{xs:"14px",md:"16px"}}}>Education</Typography>


{EducationList.map((text, index) => (
<Box key={index} sx={{display:"flex",justifyContent:"start",}}>
<Box sx={{display:"flex",flexDirection:"column",}}>
<AdjustIcon />
<Box sx={{position:"relative",height:"100%",borderLeft:"1px dotted black",left:10,py:5}}>
  </Box>
</Box>
<Box sx={{display:"flex",flexDirection:"column",ml:0.5}}>
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"12px",sm:"14px"}}}>{text.Year}</Typography>
<Typography sx={{color:"#4B4B4B",color:"grey",fontSize:{xs:"12px",sm:"14px"}}}>{text.Education}</Typography>
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"12px",sm:"14px"}}}>{text.Name}</Typography>
</Box>
</Box>
 ))} 

</Box>
</Grid>
 

 <Grid item xs={6} sx={{display:"flex",borderRadius:"10px",}}>
  <Box sx={{display:"flex",flexDirection:"column",alignItems:"start",width:"100%"}}>
<WorkIcon sx={{width:{xs:40,md:60},height:{xs:40,md:60},color:"grey"}}/>
<Typography sx={{color:"#4B4B4B",color:"#000000",mb:3,fontSize:{xs:"14px",md:"16px"}}}>Experiances</Typography>


{WorkList.map((text, index) => (
<Box key={index} sx={{display:"flex",justifyContent:"start",width:"100%",}}>
<Box sx={{display:"flex",flexDirection:"column",}}>
<AdjustIcon />
<Box sx={{position:"relative",height:"100%",borderLeft:"1px dotted black",left:10,py:5}}>
  </Box>
</Box>
<Box sx={{display:"flex",flexDirection:"column",ml:0.5}}>
<Typography sx={{color:"#4B4B4B",color:"grey",fontSize:{xs:"12px",sm:"14px"}}}>{text.time}</Typography>
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"12px",sm:"14px"}}}>{text.position}</Typography>
<Typography sx={{color:"#4B4B4B",color:"grey",fontSize:{xs:"12px",sm:"14px"}}}>{text.project}</Typography>
</Box>
</Box>
 ))} 

</Box>
</Grid> 
 </Grid>
</Grid> 



 <Grid item xs={12} md={6} sx={{display:"flex",borderRadius:"10px",flexDirection:"column",py:3}}>
  <Box sx={{px:3,pb:1}}>
<Typography sx={{color:"#4B4B4B",color:"#000000",fontSize:{xs:"14px",md:"16px"}}}>What I'm Doing : </Typography>
<Divider sx={{my:1,width:"100%"}}/>
</Box>


<Grid item xs={12} sx={{px:3}}>

<Box>
    <Grid container spacing={2}>
      {MyDoing.map((text, index) => (
        <Grid item xs={12} sm={6} md={12} lg={6} key={index}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography sx={{fontSize:{xs:"14px",md:"16px"}}}>
                  {text.label}
                </Typography>
                <Typography sx={{fontSize:{xs:"14px",md:"16px"}}}>
                {text.detail}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
    

    

    
</Grid>
</Grid>
</Box>
 </Grid>  






       </Grid>
    
      
  </>
  )
}
