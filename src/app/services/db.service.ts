import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc,getDocs,doc,getDoc} from "firebase/firestore"; 
import { AuthService } from './auth.service';
import { Snippet } from '../components/Model/Snippet';


@Injectable({
  providedIn: 'root',
})
export class DbService {

  private db : any;
  constructor(private authService:AuthService) {
    this.db = getFirestore();
  }

  async createSnippet(snippet:Snippet) {
  
    try {
       const docRef = await addDoc(collection(this.db, "snippets"), {
       ...snippet,
       by : this.authService.getUid()
     });
      console.log("Document written with ID: ", docRef.id);
      } catch (e) {
      console.error("Error adding document: ", e);
      alert("error while creating")
}
      }

      async getAllSnippets(){
        let result :any[]= [];
       const querySnapshot = await getDocs(collection(this.db, "snippets"));
       querySnapshot.forEach((doc) => {
       result.push({id : doc.id, ...doc.data()})
});
     return result;
      }

      async getSnippetById(docId:string){
     

        const docRef = doc(this.db, "snippets", docId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          return docSnap.data();
        } else {
            return{
              id:"1",
              code:"Not Found",
              title:"Not Found"
            }
        }
        
      }
}

