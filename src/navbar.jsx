"use client"

import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import Grid from '@mui/material/Grid';
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FolderIcon from '@mui/icons-material/Folder';
import ContactsIcon from '@mui/icons-material/Contacts';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

   

  const MenuList = [
    {
      MenuId: 1,
      MenuText: "Profile",
      Link: '/',
      Icon: <SentimentSatisfiedAltIcon />
    },
    { MenuId: 2, 
      MenuText: "Skills" ,
      Link: '/skills',
      Icon: <AutoFixHighIcon />},
    {
      MenuId: 3,
      MenuText: "Experiances",
      Link: '/projects',
      Icon: <FolderIcon />
    },
  
  ];



  const DrawerList = (
    <Box sx={{ width: {xs:"50vw",md:"30vw"} }} role="presentation" onClick={toggleDrawer(false)}>
      <IconButton onClick={toggleDrawer(false)}><ArrowBackIosIcon /> </IconButton>
      <Divider />
      <List >
        {MenuList.map((text, index) => (
          <ListItem key={text.MenuId} disablePadding >
            <ListItemButton onClick={()=> router.push(text.Link)}>
            <ListItemIcon>
                {text.Icon}
              </ListItemIcon>
              <ListItemText primary={text.MenuText}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <>
    <AppBar
          sx={{
            height: {xs:"50px",md:"60px",lg:"80px"},
            bgcolor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            position: "fixed",
            px:{xs:0,lg:10,xl:20},
          }}
        >

      
    
<Grid container  >


      


        <Grid item xs={12}  sx={{alignContent:"center",display:"flex",justifyContent:{xs:"end",lg:"center"}}}>
          {/* Menu For Pc , Laptop */}
        <Box sx={{display:{xs:"none",lg:"flex"},justifyContent:"space-between",width:"100%",maxWidth:"1920px",}}>
          
          {MenuList.map((item) => (
          <Button  key={item.MenuId} sx={{borderRadius:"8px",width:"30%",padding :"0px" , overflow: "hidden"  ,transition: " 0.5s", height:"57px","&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            right:"100%",
            width: "100%",
            height: "100%",
            transition: "right, 0.5s",
            zIndex: "0"},"&:hover::before": {
                     right:"0",
                      bgcolor: pathname === '/' ? "#003675" : pathname === '/skills' ? "#DD9494" : pathname === '/projects' ? "#907FC0" : "#907FC0", 
                    },
          backgroundColor: pathname === item.Link ? item.Link === '/skills' ? "#DD9494" : item.Link === '/projects' ? "#907FC0" : item.Link === '/contact' ? "#919868" : "#003675" : "transparent", }} onClick={() => router.push(item.Link)}>
          <Typography sx={{width:"100%",lineHeight:2.1, zIndex : "5",fontSize:"25px",textTransform: "none","&: hover": { color:"#FFFFFF",}, color: pathname == item.Link ? "#FFFFFF" : "#4B4B4B" }}>{item.MenuText}</Typography>
          </Button>
           ))}
          </Box>

          <Box sx={{display:{xs:"flex",lg:"none"},width:"100%",alignItems:"center",px:2,}}>
          <Breadcrumbs aria-label="breadcrumb"  sx={{display:pathname === '/projects' ? "flex" : "none"}} separator="›">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
         
          {pathname === '/projects' ? "Projects" : ""}
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          
        </Typography>
      </Breadcrumbs> {/* <IconButton aria-label="back">
        <ArrowBackIosIcon />
      </IconButton> */} <Typography sx={{color:"#4B4B4B",color:"black"}}>{pathname === '/' ? "Profile" : pathname === '/skills' ? "Skills" : ""}</Typography></Box>

           <Box sx={{display:{xs:"flex",lg:"none"},justifyContent:"end",px:2}}>
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /> </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" >
        {DrawerList}
      </Drawer>
          </Box>
        </Grid>
       

      </Grid>
        
          

          



      </AppBar>

      
     



    </>
  )
}
