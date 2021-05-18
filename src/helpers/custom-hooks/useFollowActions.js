import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useFollowActions = (docID) => {
    const [following, setFollowing] = useState([]);


    useEffect(() => {
        return firestore
            .collection('people')
            .doc(docID)
            .collection('following')
            .onSnapshot((snapshot) => {
                let documentIdArray = [];
                snapshot.forEach((doc) =>
                    documentIdArray.push({ docID: doc.id, data: doc.data() })
                );
                setFollowing(documentIdArray)
            })
    }, [docID]);
    return { following }
}
export default useFollowActions