// import React from 'react'
// // import "../components/css/Emaillist.css"
// import StarRateIcon from '@mui/icons-material/StarRate';
// import { useSelector } from 'react-redux';
// import { selectsendMessageIsOpen } from '../features/mailSlice';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import "../components/css/Emailthirdpart.css"
// import Compose from "./Compose"
// const Emailthirdpart = ({title, subject, massage, time}) => {

//   const isMessageopen = useSelector(selectsendMessageIsOpen)
//   console.log(isMessageopen)

//   return (<>
//     <div className='emailbody'>

//     <div  className="emailbody-left">
//   <DragIndicatorIcon className="body-icons" />
//     <CheckBoxOutlineBlankIcon className="body-icon"/>
//     <StarRateIcon className="body-icon"/>
//      <h5>{title}</h5>

//     </div>
//     <div  className="emailbody-middle">
//         <p>
//             <b>{subject} -</b>{massage}
//         </p>
//     </div>
//     <div  className="emailbody-right">
//         <p>
//             {time}
//         </p>

//     </div>

// </div>
// {
// isMessageopen && <Compose/>
// }
// </>
//   )
// }

// export default Emailthirdpart

import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import "../components/css/Emailthirdpart.css"

const Emailthirdpart = ({title, subject, massage, time}) => {

  
  return (<>
   
    <div className='emailbody'>

    <div  className="emailbody-left">
  <DragIndicatorIcon className="body-icons" />
    <CheckBoxOutlineBlankIcon className="body-icon"/>
    <StarRateIcon className="body-icon"/>
     <h5>{title}</h5>

    </div>
    <div  className="emailbody-middle">
        <p>
            <b>{subject} -</b>{massage}
        </p>
    </div>
    <div  className="emailbody-right">
        <p>
            {time}
        </p>

    </div>

</div>

</>
  )
}

export default Emailthirdpart