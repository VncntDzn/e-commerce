import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const usePeople = (email) => {
    const [documentArray, setDocumentID] = useState([]);

    useEffect(() => {
        return firestore
            .collection('people')
            .where('email', '==', email)
            .onSnapshot((snapshot) => {
                let documentIdArray = [];
                snapshot.forEach((doc) =>
                    documentIdArray.push({ docID: doc.id, data: doc.data() })
                );
                setDocumentID(documentIdArray)

            })
    }, [email]);
    return { documentArray }
}
export default usePeople