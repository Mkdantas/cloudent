'use server'
import { db } from "./db/firebaseConfig"
import { DocumentData, collection, doc, getDocs, addDoc } from "firebase/firestore";

export const getData = async (collectionName:string) => {
    try{
        const dataRef = collection(db, collectionName)
        const querySnapshot = await getDocs(dataRef)
        let snapData: DocumentData[] = [];
        querySnapshot.forEach((doc) => snapData.push(doc.data()))
        
        return snapData
    } catch(err:any){
        return err.code
    }
   
}

export const addPacient = async (data: pacientProfile) => {
    try{
        const result = await addDoc(collection(db, "Pacients"), data)

        return result.id
    } catch(err:any) {
        return err.code
    }
}