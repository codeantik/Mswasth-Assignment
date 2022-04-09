import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from "react-loading";
import 'react-toastify/dist/ReactToastify.css';;

const App = () => {

  const [medicines, setMedicines] = useState([]);

  const handleNotify = (itemInfo) => {
    toast.info(`${itemInfo} was clicked!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const fetchData = async () => {
    const result = await axios(
      'https://dev.dashmed.in/sample-data'
    );
    setMedicines(result.data.data);
    console.log(result)
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="app-container">
      <ToastContainer />
      <header>mswasth assignment</header>
      <div className="card-container">
          {medicines.length > 0 ?
            medicines.map((medicine, index) => (
              <Card
                key={index}
                handleNotify={handleNotify}
                medName={medicine.medName}
                saltName={medicine.saltName}
                manufacturer={medicine.manufacturer}
                mrp={Math.floor(Math.random() * medicines.length * 10)}
              />
          )) : (
            <ReactLoading type="spinningBubbles" color="#00BFFF" height={100} width={100} />
          )}

      </div>
    </div>
  );
}

export default App;
