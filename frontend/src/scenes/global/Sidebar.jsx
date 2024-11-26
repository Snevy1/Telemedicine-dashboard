import { useState } from "react"
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses,useProSidebar } from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import  profileImage  from "../../assets/user.jpg";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const  Prosidebar = ()=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');



  const Item = ({ title, to, icon, selected, setSelected, isSubMenuItem = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const isActive = selected === title;
  
    return (
      <MenuItem
        component={<Link to={to} />}
        icon={icon}
        active={isActive}
        style={{
          color: theme.palette.mode === "dark" 
            ? (isSubMenuItem ? colors.grey[800] : colors.grey[100]) // Adjust colors for dark mode
            : (isSubMenuItem ? colors.grey[100] : colors.grey[100]), // Adjust colors for light mode
          fontWeight: isSubMenuItem ? (isActive ? "bold" : "normal") : (isActive ? "bolder" : "normal"),
          fontSize: isSubMenuItem ? "0.9rem" : "1rem",
          backgroundColor: isActive ? colors.primary[400] : "transparent",
          borderRadius: "8px",
        }}
        onClick={() => setSelected(title)}
      >
        {title}
      </MenuItem>
    );
  };
  


  
  return (
    <Box backgroundColor={ `colors.secondary[500] !important`} p="5px 35px 5px 20px !important" h='100vh' >

      {/* Hamburger Menu Button */}
      <Box display="flex" justifyContent="space-between" p="10px">
        {!isCollapsed &&
         <Typography variant="h3" color={colors.grey[100]} fontWeight='bold' sx={{m: "10px 0 0 0"}}>Telehealth</Typography> }
      
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlined />
        </IconButton>
      </Box>

      <Sidebar className="sidebar" rootStyles={{
    [`.${sidebarClasses.container}`]: {
      background: colors.primary[400],
    },
  }}  collapsed={isCollapsed}>

    {!isCollapsed && <Box>
    <Box display='flex' justifyContent='center' alignItems='center'>
      <img src={profileImage} alt="profile-user" width='100px' height='100px'  style={{cursor:"pointer", borderRadius:"50%"}}/>
        
    </Box>
     <Box textAlign='center'>
      <Typography variant="h2" color={colors.grey[100]} fontWeight='bold' sx={{m: "10px 0 0 0"}}>Nevily</Typography>
      <Typography variant="h5" color={colors.greenAccent[500]}>Doctor Admin</Typography>
    </Box>


    </Box>}
    
    <Box>
    <Menu  >
          <MenuItem className="menu1">
            <h2>Telehealth</h2>
          </MenuItem>
          {/* <MenuItem >Dashboard </MenuItem> */}
          <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          {/* <MenuItem> Invoices </MenuItem> */}
          <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          <SubMenu label="Charts">
{/*             <MenuItem> Timeline Chart </MenuItem> */}
<Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
{/*             <MenuItem> Bubble Chart </MenuItem> */}

            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
          </SubMenu>
          <SubMenu label="Wallets">
{/*             <MenuItem>Current Wallet</MenuItem> */}

            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />


{/*             <MenuItem>Savings Wallet</MenuItem> */}


            <Item
              title="Savings Wallet"
              to="/appointments"
              icon={<SavingsRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
          </SubMenu>
         {/*  <MenuItem> Transactions </MenuItem> */}
          <Item
              title="FAQ page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            
            />
          <SubMenu label="Settings">
{/*             <MenuItem> Account </MenuItem> */}

            <Item
              title="Profile's form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />



            {/* <MenuItem> Privacy </MenuItem> */}
            <Item
              title="Privacy"
              to="/privacy"
              icon={<ShieldRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
            {/* <MenuItem> Notifications </MenuItem> */}
            <Item
              title="Notifications"
              to="/notifications"
              icon={<NotificationsRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
              isSubMenuItem = {true}
            />
          </SubMenu>
{/*           <MenuItem> Logout </MenuItem> */}
          <Item
              title="Logout"
              to="/logout"
              icon={<LogoutRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
        </Menu>

    </Box>
    
      </Sidebar>

    </Box>
    
  )

}
  


export default Prosidebar




/* menuItemStyles={{
  button: ({ level, active, disabled,hovered }) => {
    // only apply styles on first level elements of the tree
    if (level === 0)
      return {
        color: disabled ? '#cccccc' : '#007ACC',
        backgroundColor: active ? '#6870fa' : undefined,
        ':hover': { color: '#868dfb', },
      };
  },
}} */