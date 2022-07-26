import Header from "../Components/Header";
import Form from "react-bootstrap/Form";
import { AnimatePresence } from "framer-motion";
import Modal from "../Components/Modal";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../Components/Feed";
import { db } from "../util/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
export default function Home({ posts,path}) {

  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <Feed  userID ={session?.user?.id}/>
      <AnimatePresence>
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(false)} type={modalType} />
        )}
      </AnimatePresence>
    

    </div>
  );
}


