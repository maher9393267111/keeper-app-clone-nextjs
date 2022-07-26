import React from "react";
import { Row, Col } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getSession, signOut, useSession } from "next-auth/react";
import { auth, db } from "../util/firebase";
import { useRecoilState } from "recoil";

import { deleteDoc, doc } from "firebase/firestore";
import { handlePostState } from "../atoms/postAtom";

function Note(props) {
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const { data: session } = useSession();

  const deleteNote = async () => {
    await deleteDoc(doc(db, session?.user?.id, props.noteid));
    setHandlePost(true);
  };
  return (
    <Col xl={2} lg={3} md={6}>
      <div className="note-container">
        <div className="top-note">
          <h4 className="note-title">{props.titleNote}</h4>

          <HighlightOffIcon
            className="deleteButton"
            fontSize="large"
            onClick={deleteNote}
          />
        </div>

        <p className="note-content">{props.note}</p>
      </div>
    </Col>
  );
}

export default Note;
