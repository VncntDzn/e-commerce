import { useEffect, useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useFetchPosts = ({ compareTo = 'author', compareFrom }) => {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

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
                setFilteredPosts(postsArray);
            }) : firestore
                .collection('products')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    let postsArray = [];
                    snapshot.forEach((doc) =>
                        postsArray.push({ docID: doc.id, data: doc.data() })
                    );
                    setFilteredPosts(postsArray);
                    setAllPosts(postsArray)
                })
    }, [compareTo, compareFrom]);
    return { filteredPosts, allPosts }
}
export default useFetchPosts