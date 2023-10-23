import { useState } from 'react';
// import { collection, addDoc } from "firebase";
import imagebgastro from '../assets/imageastro_auto_x2-transformed.jpg';
import "./codecosmos.css";
import { db } from '../FIrebaseDb/FirebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import codecheflogo from '../assets/pccoecodecheflogo.png';

const CodeCosmos = () => {
  // console.log(db);
    const [show, setShow] = useState(false);
    const [first, setFirst] = useState(true);
    const [final, setFinal] = useState(false);

    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [roll, setRoll] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [division, setDivision] = useState('');
    const [codeforces, setCodeforces] = useState('');


    const gotoFirstForm=(e)=>{
        e.preventDefault();
        setFirst(true);
    }

    const gotosecondForm=(e)=>{
        e.preventDefault();
        if(name==='' || college==='' || roll==='' || contact==='' || email===''){
            alert('Please Fill All The Details');
            return;
        }
        setFirst(false);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        if(year==='' || branch==='' || division==='' || codeforces===''){
            alert('Please Fill All The Details');
            return;
        }
        const data={
            name,
            college,
            roll,
            contact,
            email,
            year,
            branch,
            division,
            codeforces
        }
        addData();
        console.log(data);
        alert('Form Submitted Successfully! click on button to join whatsapp group');
        setFinal(true);
    }

    const addData = async () => {
      try {
        const collectionRef = collection(db, "codecosmos"); 
        const docRef = doc(collectionRef, email);
    
        const docData = {
          name,
          college,
          roll,
          contact,
          email,
          year,
          branch,
          division,
          codeforces
        };
    
        await setDoc(docRef, docData); 
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };

    if(final){
        return(
          <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
            <img
              className="absolute -z-10 h-full w-full object-cover object-center"
              src={imagebgastro}
              alt=""
            />
            <img src={codecheflogo} className='absolute h-32 w-32  z-1 top-1 left-4'/>
            <img src={'https://cdn.codechef.com/images/cc-logo.svg'} className='h-40 w-40 absolute z-1 -top-4 right-4'/>

            <div className="text-black">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-emerald-700-800 font-bold">Code Cosmos</h1>
                <h2 className="text-2xl text-emerald-700-800 font-semibold text-center mt-4">
                  You are Successfully registered
                </h2>
                <br/>
                <h2 className='text-xl text-center text-balck font-medium'>Join WhatsApp Group By clicking Below Button</h2>
                <a href='https://chat.whatsapp.com/LhG8oY2ynTsC8E1jmqVOC9' target="_blank" rel="noreferrer" className='font-semibold text-2xl left-4 bg-white/90 rounded-lg p-2 text-black w-64 text-center shadow-md shadow-black mt-4'>WhatsApp</a>
              </div>
            </div>
            <a href="https://www.codechef.com/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-16 font-semibold text-lg left-4 text-neutral-200'>ChodeChef PCCOE Handles</a>
            <a href="https://www.instagram.com/codechefpccoe/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-4 font-semibold text-md left-4 bg-pink-700/70 rounded-lg p-2 text-white shadow-md shadow-black '>CodeChef-Instagram</a>
            <a href="https://www.linkedin.com/company/codechef-pccoe-chapter/mycompany/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-4 font-semibold text-md right-4 bg-blue-700/70 rounded-lg p-2 text-white shadow-md shadow-black'>CodeChef-Linkedin</a>
          </div>
        )
    }

    if(!show){
        return(
        <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
            <img className="absolute -z-10 bg-gradient-to-r from-purple-900 to-purple-800 object-cover object-center  h-screen w-screen" src={imagebgastro} alt="" />
            <img src={codecheflogo} className='h-32 w-32 absolute z-1 top-2 left-4'/>
            <img src={'https://cdn.codechef.com/images/cc-logo.svg'} className='h-40 w-40 absolute z-1 -top-4 right-4'/>

            <div >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-neutral-900 font-bold text-center">CODE COSMOS</h1>
                    <h2 className="text-2xl text-neutral-800 font-bold text-center mt-4">The Interstellar Adventure Awaits You!</h2>
                    <button className='bg-white p-6 rounded-3xl text-black font-bold text-lg mt-4 shadow-xl shadow-black  hover:bg-fuchsia-800 hover:text-white' onClick={()=>setShow(true)}>Click Here For Registrtion</button>
                </div>
            </div>
            <a href="https://www.codechef.com/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-16 font-semibold text-lg left-4 text-neutral-200'>ChodeChef PCCOE Handles</a>
            <a href="https://www.instagram.com/codechefpccoe/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-4 font-semibold text-md left-4 bg-pink-700/70 rounded-lg p-2 text-white shadow-md shadow-black '>CodeChef-Instagram</a>
            <a href="https://www.linkedin.com/company/codechef-pccoe-chapter/mycompany/" target="_blank" rel="noreferrer" className='absolute z-1 bottom-4 font-semibold text-md right-4 bg-blue-700/70 rounded-lg p-2 text-white shadow-md shadow-black'>CodeChef-Linkedin</a>
        </div> 
        )
    }    
  return (
    <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
    <img src={codecheflogo} className='absolute h-32 w-32  z-1 top-1 left-4'/>
    <img src={'https://cdn.codechef.com/images/cc-logo.svg'} className='h-40 w-40 absolute z-1 -top-4 right-4'/>

      <img className=" absolute -z-10 bg-gradient-to-r from-purple-900 to-purple-800 object-cover object-center h-screen w-screen" src={imagebgastro} alt="" />
        <div className="box">
          <span className="borderLine"></span>
          {first && <form>
            <h2>Register</h2>
            <div className="inputBox">
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required="required"/>
              <span>Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={college} required="required" onChange={(e)=>setCollege(e.target.value)} />
              <span>College</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={roll} required="required" onChange={(e)=>setRoll(e.target.value)} />
              <span>Roll Number</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} required="required"/>
              <span>Contact Number</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"/>
              <span>College Email Id</span>
              <i></i>
            </div>
            <input type="submit" value="Next" onClick={(e)=>gotosecondForm(e)}/>
          </form>}

          {!first && <form>
            <h2>Register</h2>
            <div className="inputBox">
              <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} required="required"/>
              <span>Year(FY,SY)</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={branch} onChange={(e)=>setBranch(e.target.value)} required="required"/>
              <span>Branch(CS,IT,ENTC,MECH)</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={division} onChange={(e)=>setDivision(e.target.value)} required="required"/>
              <span>Division</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" value={codeforces} onChange={(e)=>setCodeforces(e.target.value)} required="required"/>
              <span>Codeforces Profile Link</span>
              <i></i>
            </div>
            <div className='flex flex-col mt-4 justify-around md:flex-row md:mt-8'>
                <input type="submit" value="Back" onClick={(e)=>gotoFirstForm(e)}/>
                <input type="submit" value="Register" onClick={(e)=>submitForm(e)} />
            </div>
          </form>
          }
        </div>
      </div>
  );
};

export default CodeCosmos;
