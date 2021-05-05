import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useFetchPosts = () => {
    const [allPosts, setAllPosts] = useState(0);

    useEffect(() => {

        return firestore
            .collection('products')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                let postsArray = [];
                snapshot.forEach((doc) =>
                    postsArray.push({ docID: doc.id, data: doc.data() })
                );
                setAllPosts(postsArray);
            });
    }, []);
    return { allPosts }
}
export default useFetchPosts