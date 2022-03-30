import React, { useState } from 'react';
import { Container, Tooltip, IconButton, Drawer, Badge } from '@mui/material';
import { AiOutlineMenuFold, AiOutlineSearch, AiOutlineUser, AiOutlineBell } from 'react-icons/ai';
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
                <div>
                    This is Drawer
                </div>
            </Drawer>
        </>
    )
}

export default Navbar