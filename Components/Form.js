import React, { useState } from "react";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { getSession, signOut, useSession } from "next-auth/react";
import { handlePostState } from "../atoms/postAtom";
import { Button } from "react-bootstrap";
import { auth, db } from "../util/firebase";
import { Auth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function Form() {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState("");
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const { data: session } = useSession();
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const uploadPost = async (e) => {
    e.preventDefault();

    const id = uuidv4();
    var noteContent = input;
    if (input.length > 300) {
      noteContent = input.slice(0, 300) + "...";
    } else {
      noteContent = input;
    }
    const data = {
      id: id,
      titleNote: title,
      note: noteContent,
    };

    await setDoc(doc(db, session?.user.id, id), {
      data,
    });
    setHandlePost(true);
    setModalOpen(false);
  };

  return (
    <form className="form-container">
      <textarea
        rows="1"
        placeholder="Note Title"
        className="form-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="4"
        placeholder="What do you want to keep (max 300 characters)"
        className="form-text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="">
        <Button
          type="submit"
          value="Submit"
          className="form-button"
          disabled={!input.trim() && !photo}
          onClick={uploadPost}
        >
          Save Note
        </Button>
      </div>
    </form>
  );
}

export default Form;
