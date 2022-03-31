import React, { useState } from 'react';
import { Container, Tooltip, IconButton, Drawer, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold, AiOutlineSearch, AiOutlineBell, AiFillPieChart, AiOutlineHome, AiOutlineTable, AiOutlineDollarCircle, AiOutlineUser, AiOutlineSolution, AiOutlineUserAdd } from 'react-icons/ai';
import './Navbar.scss';

function Navbar() {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <>
            <nav className='Navbar'>
                <Container>
                    <div className='flex justify-between'>
                        <div className='Collapse'>
                            <Tooltip title="Open Sidebar">
                                <IconButton onClick={handleDrawerOpen}>
                                    <AiOutlineMenuFold className='Icon' />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className="Search">
                            <input type="text" placeholder='Search' />
                            <AiOutlineSearch className='Icon' />
                        </div>
                        <div className="Notifications">
                            <div className="flex" style={{ marginTop: '10px' }}>
                                <Tooltip title="Open Notifications">
                                    <IconButton>
                                        <Badge badgeContent={4} color="primary" className='Badge'>
                                            <AiOutlineBell className='Icon' />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Open Profile">
                                    <IconButton>
                                        <Badge badgeContent={0} color="primary" className='Badge'>
                                            <AiOutlineUser className='Icon' />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav >
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
            >
                <div className='Sidebar'>
                    <div className="flex items-center justify-center my-4">
                        <AiFillPieChart className='logoIcon' />
                        <h3>React Admin Kit</h3>
                    </div>
                    <hr className='Horizontal' />
                    <ul className='List'>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <li className="Item active">
                                <AiOutlineHome className="Icon" />
                                <p>Dashboard</p>
                            </li>
                        </Link>
                        <Link to="/tables" style={{ textDecoration: 'none' }}>
                            <li className="Item">
                                <AiOutlineTable className="Icon" />
                                <p>Tables</p>
                            </li>
                        </Link>
                        <Link to="/billing" style={{ textDecoration: 'none' }}>
                            <li className="Item">
                                <AiOutlineDollarCircle className="Icon" />
                                <p>Billing</p>
                            </li>
                        </Link>
                        <Link to="/notifications" style={{ textDecoration: 'none' }}>
                            <li className="Item">
                                <AiOutlineBell className="Icon" />
                                <p>Notifications</p>
                            </li>
                        </Link>
                        <Link to="/profile" style={{ textDecoration: 'none' }}>

                            <li className="Item">
                                <AiOutlineUser className="Icon" />
                                <p>Profile</p>
                            </li>
                        </Link>
                        <Link to="/signin" style={{ textDecoration: 'none' }}>
                            <li className="Item">
                                <AiOutlineSolution className="Icon" />
                                <p>Sign In</p>
                            </li>
                        </Link>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <li className="Item">
                                <AiOutlineUserAdd className="Icon" />
                                <p>Sign Up</p>
                            </li>
                        </Link>

                    </ul>
                    <hr className='Horizontal' />
                    <button className="upgrade-button">Upgrade to pro</button>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar