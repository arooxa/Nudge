import React, { useState, useEffect, useRef } from "react";
import {
  ModalBackground,
  ModalBottom,
  ModalContainer,
  ModalExit,
  ModalBody,
  ModalTitle,
  ModalUpload,
  ModalTextEntry,
  ModalImageContainer,
  ImagePreview,
} from "./common";
import { db, storage } from "../../firebase-config";
import { useAuth } from "../../contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import FolderIcon from "../../images/icons/folder_icon_transparent.png";
import CloseIcon from "../../images/icons/CloseIcon.svg";

function Modal({ closeModal, day }) {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [weight, setWeight] = useState("Weight");
  const [loading, setLoading] = useState(false);
  const weightRef = useRef();
  const { currentUser } = useAuth();

  const handleChange = async (e) => {
    if (e.target.files[0] && e.target.files) {
      setImage(e.target.files[0]);
      let fileR = new window.FileReader();
      fileR.onload = function (e) {
        setPreviewImage(e.target.result);
        setIsUploaded(true);
      };
      fileR.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    if (image === null) {
      setLoading(false);
      return;
    }
    const weightValue = weightRef.current.value;
    const storageRef = ref(storage, `images/${currentUser.uid}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDoc(doc(db, currentUser.uid, day.format("YYYY-MMM-DD")), {
            image: downloadURL,
            weight: weightValue,
          });
        });
      }
    );
    closeModal();
    setLoading(false);
  };

  useEffect(async () => {
    const docRef = doc(db, `${currentUser.uid}/${day.format("YYYY-MMM-DD")}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPreviewImage(docSnap.data().image);
      setWeight(docSnap.data().weight);
      setIsUploaded(true);
    } else {
      setWeight("Weight");
    }
  }, []);

  return (
    <React.Fragment>
      <ModalBackground>
        <ModalContainer>
          <ModalTitle>{day.format("MMM DD, YYYY")}</ModalTitle>
          <ModalBody>
            <ModalImageContainer type="file">
              {!isUploaded ? (
                <>
                  <label htmlFor="upload-input">
                    <img
                      src={FolderIcon}
                      alt="placeholder"
                      draggable={"false"}
                      style={{ width: 100, height: 100 }}
                    />
                  </label>
                  <p>Click to upload image</p>
                  <input
                    id="upload-input"
                    type="file"
                    accepts=".jpg,.jpeg,.gif,.png"
                    onClick={handleChange}
                  />
                </>
              ) : (
                <ImagePreview>
                  <img
                    className="close-icon"
                    src={CloseIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImage(null);
                      setPreviewImage(null);
                    }}
                  />
                  <img
                    id="uploaded-image"
                    src={previewImage}
                    draggable={false}
                    alt="uploaded-img"
                  />
                </ImagePreview>
              )}
            </ModalImageContainer>
            <ModalTextEntry
              type="text"
              ref={weightRef}
              placeholder={`${weight} (lbs)`}
              required
            />
          </ModalBody>
          <ModalBottom>
            <ModalExit type="button" onClick={closeModal}>
              Exit
            </ModalExit>
            <ModalUpload
              type="submit"
              onClick={handleUpload}
              disabled={loading}
            >
              Upload
            </ModalUpload>
          </ModalBottom>
        </ModalContainer>
      </ModalBackground>
    </React.Fragment>
  );
}

export default Modal;

