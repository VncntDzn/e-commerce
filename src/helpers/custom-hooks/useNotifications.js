/** 
 * useNotifications - a custom hook for notifications for all components that requires notifications.
  */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { firestore } from 'firebase/firebaseConfig';

const useNotifications = () => {
    const uid = useSelector((state) => state.auth.uid);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // unsubscribe to onSnapshot
        return firestore
            .collection('orders')
            .orderBy('timestamp', 'desc')
            .where('uid', '==', uid)
            .onSnapshot((snapshot) => {
                let ordersArray = [];
                snapshot.forEach((doc) =>
                    ordersArray.push({ docID: doc.id, data: doc.data() })
                );
                setOrders(ordersArray);
            });
    }, [uid]);
    return { orders }
}

export default useNotifications