import React,{useState} from 'react'
import { collection, doc, addDoc, updateDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/config';

export const useFireStore = () => {
    const [firedata, setstate] = useState({loading:false,  data: null, errormsg:null })
    async function dispatch(action) {
        const {type, payload}=action
        setstate({loading:true,  data: null, errormsg:null });
        switch (type) {
            case "ADD_DOC":
                try {
                    const docRef = await addDoc(collection(db, payload.collection), payload.data);
                    setstate({  loading:false,data: docRef, errormsg:null })
                } catch (err) {
                    setstate({  loading:false, data: null, errormsg: err.message })
                }; break;
            case "SET_DOC":
                try {
                    const docRef = doc(db, payload.collection, payload.doc_id);
                    await updateDoc(docRef, payload.data);
                    setstate({  loading:false, data: docRef, errormsg:null })
                } catch (err) {
                    setstate({  loading:false, data: null, errormsg: err.message })
                }; break;

            case "GET_ALL":
                try {
                    const querySnapshot = await getDocs(collection(db, payload.collection));
                    
                } catch (err) {
                    setstate({  loading:false, data: null, errormsg: err.message })
                }; break;
            case "FILTER":
                try{
                    const q = query(collection(db, payload.collection), where(payload.filter[0], payload.filter[1], payload.filter[2]));
                    const querySnapshot = await getDocs(q);
                    setstate({  loading:false, data: querySnapshot.docs, errormsg:null }) 
                }catch(err){
                    setstate({  loading:false, data: null, errormsg: err.message })
                }

            default:
                throw new Error('undefined action type!')
        }
    }
    return {firedata,dispatch}
}

