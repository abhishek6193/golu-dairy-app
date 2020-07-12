import React from 'react'
import { Link } from 'react-router-dom'
import './MobileFooterNav.css'

import { Grid, Typography, Box } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const MobileFooterNav = () => {
    const [open, setOpen] = React.useState(false)
    const [expand, setExpand] = React.useState(false)
    const anchorRef = React.useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <Box className={expand ? "expandIcon slideIconDown" : "expandIcon slideIconUp"}>
                {expand ? <ExpandLessIcon fontSize="large" onClick={() => setExpand(!expand)}/> : <ExpandMoreIcon fontSize="large" onClick={() => setExpand(!expand)}/>}
            </Box>
            <Grid container alignItems="center" className={expand ? "mobileFooterContainer hideMobileFooter" : "mobileFooterContainer showMobileFooter"}>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><HomeOutlinedIcon /></Link>
                    <Typography variant="caption" display="block">Home</Typography>
                </Grid>
                <Grid item xs={4} style={{bottom: "30px", position: "relative"}}>
                    <div className="orderNowButton">
                        <button className="bottom-nav-notification dv-gift ">
                            <span>
                                <AddShoppingCartIcon fontSize="large" />
                                <div><Typography variant="caption" display="block">Order Now</Typography></div>
                            </span>
                        </button>
                    </div>
                </Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <MoreVertSharpIcon ref={anchorRef} onClick={handleToggle} />
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <Link to="/farms" style={{textDecoration: 'none', color: 'black'}}><MenuItem onClick={handleClose}><ListAltIcon fontSize="small"/>&nbsp;Our Farms</MenuItem></Link>
                                            <Link to="/about" style={{textDecoration: 'none', color: 'black'}}><MenuItem onClick={handleClose}><ListAltIcon fontSize="small"/>&nbsp;About Us</MenuItem></Link>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                    <Typography variant="caption" display="block">More</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MobileFooterNav
