import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  limit,
  orderBy,
  query,
  getDoc,
  doc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/firebase";
import { MOTHERBOARD, PROCESSOR, RAM_MEMORY } from "./constants";

const collectionMBParts = collection(db, MOTHERBOARD);
const collectionCPUParts = collection(db, PROCESSOR);
const collectionRAMParts = collection(db, RAM_MEMORY);

export const addPart = async (e, file, item, setLoading, setError, type) => {
  e.preventDefault();
  if (!item) return;
  if (!item.title) return setError("O título é obrigatório.");

  setLoading(true);

  if (file) await handleUploadFileAndSave(file, item, type);
  else saveNewPart("", item, type);
  setLoading(false);
};

export const saveNewPart = async (posterURL = "", item, type) => {
  const payload = {
    ...item,
    createdAt: Timestamp.fromDate(new Date()),
    posterURL,
  };

  try {
    // validar o tipo de part
    if (type === RAM_MEMORY) {
      const collectionRAMParts = collection(db, RAM_MEMORY);
      // eslint-disable-next-line no-unused-vars
      const docRef = await addDoc(collectionRAMParts, payload);
    } else if (type === MOTHERBOARD) {
      const collectionMBParts = collection(db, MOTHERBOARD);
      // eslint-disable-next-line no-unused-vars
      const docRef = await addDoc(collectionMBParts, payload);
    } else if (type === PROCESSOR) {
      const collectionCPUParts = collection(db, PROCESSOR);
      // eslint-disable-next-line no-unused-vars
      const docRef = await addDoc(collectionCPUParts, payload);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const handleUploadFileAndSave = async (file, book, type) => {
  const metadata = {
    contentType: "image/jpeg",
  };

  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = await uploadBytesResumable(storageRef, file, metadata);

  uploadTask.task.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (error) => {
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          console.log("User doesn't have permission to access the object");
          break;
        case "storage/canceled":
          console.log("User canceled the upload");
          break;
        case "storage/unknown":
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
        default:
          break;
      }
    },
    () => {
      getDownloadURL(uploadTask.task.snapshot.ref).then((downloadURL) => {
        saveNewPart(downloadURL, book, type);
      });
    }
  );
};

export const getAllParts = async (type) => {
  try {
    let qPages = [];

    if (type === MOTHERBOARD) {
      qPages = query(
        collectionMBParts,
        orderBy("createdAt", "desc"),
        limit(30)
      );
    } else if (type === RAM_MEMORY) {
      qPages = query(
        collectionRAMParts,
        orderBy("createdAt", "desc"),
        limit(30)
      );
    } else if (type === PROCESSOR) {
      qPages = query(
        collectionCPUParts,
        orderBy("createdAt", "desc"),
        limit(30)
      );
    }

    const docBooks = await getDocs(qPages);
    const partsList = [];
    docBooks.forEach((item) => {
      partsList.push({ ...item.data(), id: item.id });
    });

    return partsList;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPartById = async (id, type) => {
  const docRef = doc(db, type, id);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists) {
      return { ...docSnap.data(), id: docSnap.id };
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePartById = async (id, type) => {
  try {
    if (type === MOTHERBOARD) {
      const docRef = doc(db, MOTHERBOARD, id);
      const docSnap = await deleteDoc(docRef);
      if (docSnap.exists) {
        return { ...docSnap.data(), id: docSnap.id };
      }
    } else if (type === RAM_MEMORY) {
      const docRef = doc(db, RAM_MEMORY, id);
      const docSnap = await deleteDoc(docRef);
      if (docSnap.exists) {
        return { ...docSnap.data(), id: docSnap.id };
      }
    } else if (type === PROCESSOR) {
      const docRef = doc(db, PROCESSOR, id);
      const docSnap = await deleteDoc(docRef);
      if (docSnap.exists) {
        return { ...docSnap.data(), id: docSnap.id };
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getPartByCustomFields = async (list) => {
  const q = query(collectionCPUParts, where("socket", "in", list));
  const docSnap = await getDocs(q);

  const resultList = [];
  try {
    if (!docSnap.empty) {
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        resultList.push({ ...doc.data(), id: doc.id });
      });

      return resultList;
    }
  } catch (error) {
    console.log(error.message);
  }
};
