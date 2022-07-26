import { motion } from "framer-motion";
import Backdrop from "./Backdrop.js";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import Form from "./Form";


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};



function Modal({ handleClose, type }) {
  const { data: session } = useSession();

  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className ="modal-motion"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          
          <div className="modal-header">
            <h4 className="modal-title">Create a note</h4>
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon className="closeButton" />
            </IconButton>
          </div>

          <div className="modal-profile">
            <div className="profile-container">
              <Avatar src={session?.user?.image} className="modal-profile-img" />
              <h6>{session?.user?.name}</h6>
            </div>

            <Form />
          </div>
        </motion.div>
      )}
     
    </Backdrop>
  );
}

export default Modal;
