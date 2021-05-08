import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useFetchPosts = ({ compareTo = 'author', compareFrom }) => {
    const [allPosts, setAllPosts] = useState([]);
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        return compareFrom ? firestore
            .collection('products')
            .orderBy('timestamp', 'desc')
            .where(compareTo, '==', compareFrom)
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
                    setAuthors(postsArray)
                })
    }, [compareTo, compareFrom]);
    return { allPosts, authors }
}
export default useFetchPosts