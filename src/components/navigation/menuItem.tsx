import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { menuItem } from '../@types';
import Link from 'next/link';
import { Button } from '@mui/material';


export const MenuElement: React.FC<menuItem> = ({ name, link, submenu }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {
                !submenu ?
                    <Link href={link}>
                        <a>{name}</a>
                    </Link>
                    :
                    <div>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{color:"inherit"}}
                        >
                            {name}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <div className=' p-4 flex flex-col gap-y-4 min-w-3xs'>
                                {
                                    submenu.map((item, index) => (
                                        <Link href={item.link} key={index}>
                                            <a className=' text-sm'>{item.name}</a>
                                        </Link>
                                    ))
                                }
                            </div>

                        </Menu>
                    </div>

            }
            { }


        </div>
    );
}