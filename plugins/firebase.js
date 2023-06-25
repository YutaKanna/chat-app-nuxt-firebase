import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC9KQCgi-58hgv0B4CSe78qH7-YBctTL7M",
    authDomain: "chat-app-88130.firebaseapp.com",
    projectId: "chat-app-88130",
    storageBucket: "chat-app-88130.appspot.com",
    messagingSenderId: "151695994580",
    appId: "1:151695994580:web:dfff6e92a65d9d3f179541"
};

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore }
