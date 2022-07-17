import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { SettingsIcon, SigninIcon, SignoutIcon, UserIcon } from '../../icons';
import { LightTooltip } from '../../util';
import { useFireBaseAuth } from '../../../hooks';
import { AuthenticationContext } from '../../../contexts';
import { Button } from '@mui/material';
import Link from 'next/link';


export default function UserProfile() {
    const user = useContext(AuthenticationContext);

    const { dispatch } = useFireBaseAuth()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <div className=' flex  items-center gap-2'>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}><UserIcon className={"w-5 h-5"} /> </Avatar>
                </IconButton>
                
                {!user &&

                    <Link href="/auth/signin">
                        <a><Button>Login</Button></a>
                    </Link>

                }
                {user &&
                    <Button onClick={() => dispatch({ type: "SIGNOUT" })}>
                        Logout
                    </Button>
                }
            </div>

        </React.Fragment>
    );
}


const dropDownStyle = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
}