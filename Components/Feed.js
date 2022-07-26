import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Snapshot, useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import { getSession, useSession } from "next-auth/react";
import { getDocs } from "firebase/firestore";
import { Row, Col } from "react-bootstrap";
import Note from "./Note";


function Feed({ userID }) {
  const { data: session } = useSession();
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPost, setUseSSRPost] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    if (userID) {
    async function fetchData() {
      const allpost = []
      const querySnapshot = await getDocs(collection(getFirestore(), userID));
      querySnapshot.forEach((doc) => {
        allpost.push(doc.data());       

      });

      setRealtimePosts(allpost);
    
      setHandlePost(false);
      setUseSSRPost(false);
      
    }

    fetchData();
  }
  }, [userID,handlePost]);

  return (
    <Row className="feed">
      {realtimePosts.map((post) => (
        Object.values(post).map((note) => (
          <Note key={note.id} titleNote={note.titleNote} note={note.note} noteid={note.id} />
          ))
      ))}
    </Row>
  );
}

export default Feed;
