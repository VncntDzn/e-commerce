/**
 * useFollowActions is a custom hook that gets the people that the user follows,'
 * @param {string} [docID] - document ID that requires to access the followed users.
  */
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