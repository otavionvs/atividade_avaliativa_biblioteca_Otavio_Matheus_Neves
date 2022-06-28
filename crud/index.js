// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMu5UXfPXajVxVpcJmkgcMDNtJsq_h6u0",
    authDomain: "shakespeare-library.firebaseapp.com",
    projectId: "shakespeare-library",
    storageBucket: "shakespeare-library.appspot.com",
    messagingSenderId: "358322667918",
    appId: "1:358322667918:web:68e0b437cdf6ffddf524df",
    measurementId: "G-KMW7TS2JCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        //Praticamente o mesmo que savedData = dado, porem realmente como copia.
        //tira referencia de memoria
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);

    });
    return lista;
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("404 - not found")
    }

}

async function remove(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deleted`
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}