import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export async function getDocById(collection, id):Promise<any> {
    try {
        const snap = await getDoc(doc(db, collection, id))
        if (snap.exists()) {
            return snap.data()
        }
    }catch(err){
        return null
    }
}