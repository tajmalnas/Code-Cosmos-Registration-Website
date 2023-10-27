import { useEffect, useState } from "react";
import { db } from "../FIrebaseDb/FirebaseConfig";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import * as XLSX from "xlsx";

const Secret = () => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const collectionRef = collection(firestore, "codecosmos"); 

      const querySnapshot = await getDocs(collectionRef);

      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });

      setData(dataArray);
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };


  const checkForData = async () => {
    if (email === '') {
      alert('Please enter email');
      return;
    }

    const docRef = doc(db, "codecosmos", email);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);
        setUserData(data);
      } else {
        console.log("No such document!");
        setUserData(null);
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  return (
    <div className="m-8 flex flex-col gap-4 justify-center items-center">
      <div>
        It is for us only :)
      </div>
      <div>
        <input placeholder="email" value={email} className="border border-black " onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={checkForData} className="bg-black text-white p-4">submit</button>
      {userData && (
        <div>
          <h2>User Data:</h2>
          <p>Name: {userData.name}</p>
          <p>College: {userData.college}</p>
          <p>Roll: {userData.roll}</p>
          <p>Email:{userData.email}</p>
        </div>
      )}
      <div>
      {/* Your component JSX */}
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
    </div>

  );
};

export default Secret;
