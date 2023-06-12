// import { Alert, Snackbar } from '@mui/material'
// import React, { useEffect, useState } from 'react'

// export default function SnackBarComponent(props: any) {

//     console.log(props)

//     const [openSnackbar, setOpenSnackbar] = useState(false);

//     useEffect(() => {
//         if (props.apiResponse) {
//           setOpenSnackbar(true);
//         }
//       }, [props.apiResponse]);

//       const handleCloseSnackbar = () => {
//         setOpenSnackbar(false);
//       };


//     return (
//         <div>
//             <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}
//                 anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right'
//                 }}
//                 sx={{
//                     '& .MuiAlert-root': {
//                         borderRadius: '4px',
//                         backgroundColor: 'bs-teal',
//                         color: 'greenf'
//                     }
//                 }}
//             >
//                 <Alert onClose={handleCloseSnackbar} severity="success">
//                     {props.apiResponse}
//                 </Alert>
//             </Snackbar>
//         </div>
//     )
// }


import React, { createContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarContextProps {
  showSnackbar: (message: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => { },
});

export const SnackbarProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          '& .MuiAlert-root': {
            borderRadius: '4px',
            backgroundColor: 'bs-teal',
            color: 'greenf'
          }
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};




