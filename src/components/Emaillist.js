import React from 'react';
import "../components/css/Emaillist.css"
import { IconButton} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Home() {
    return( 
         
        <div className="upper-middle">

           < div className="upper-left">

<CheckBoxOutlineBlankIcon className="icon" ></CheckBoxOutlineBlankIcon>

<ArrowDropDownIcon className="icon" />


<RefreshIcon className="icons"/>

<MoreVertIcon className="more"/>
        </div>

        <div className="upper-right">
            <p>1-50 of 434</p>
            <IconButton>
<ChevronLeftIcon></ChevronLeftIcon> 
            </IconButton>
            <IconButton>
<ChevronRightIcon></ChevronRightIcon>
                </IconButton>
        </div>

        </div>
    
   

    

        )
}

export default Home
