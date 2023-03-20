import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import ShuffleSharpIcon from '@mui/icons-material/ShuffleSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import { Grid, Slider } from '@mui/material';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img className='footer_albumLogo' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/If_I_Can_Dream_Cover.jpg/220px-If_I_Can_Dream_Cover.jpg' alt=''/>
                <div className='footer_songInfo'>
                    <h4>If I Can Dream </h4>
                    <p>Elvis Presley</p>
                </div>
            </div>
            <div className='footer_center'>
                <ShuffleSharpIcon className='footer_green'/>
                <SkipPreviousSharpIcon className='footer_icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
                <SkipNextSharpIcon className='footer_icon'/>
                <RepeatSharpIcon className='footer_green'/>
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay/>
                    </Grid>
                    <Grid item>
                        <VolumeDown/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continuous-slider'/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
