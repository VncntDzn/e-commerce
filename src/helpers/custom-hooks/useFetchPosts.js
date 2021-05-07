import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useFetchPosts = (param) => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        return param ? firestore
            .collection('products')
            .orderBy('timestamp', 'desc')
            .where('author', '==', param)
            .onSnapshot((snapshot) => {
                let postsArray = [];
                snapshot.forEach((doc) =>
                    postsArray.push({ docID: doc.id, data: doc.data() })
                );
                setAllPosts(postsArray);
            }) : firestore
                .collection('products')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    let postsArray = [];
                    snapshot.forEach((doc) =>
                        postsArray.push({ docID: doc.id, data: doc.data() })
                    );
                    setAllPosts(postsArray);
                })
    }, [param]);
    return { allPosts }
}
export default useFetchPosts