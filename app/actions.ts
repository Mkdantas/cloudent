'use server'
import { db } from "./db/firebaseConfig"
import { DocumentData, collection, getDocs } from "firebase/firestore";

export const getData = async (collectionName:string) => {
    const dataRef = collection(db, collectionName)
    const querySnapshot = await getDocs(dataRef)
    let snapData: DocumentData[] = [];
    querySnapshot.forEach(data => snapData.push(data.data()))
    
    return snapData
}