import React,{useState} from "react";
import "./App.css";
import Content from "./components/Layout/Content";
import Header from "./components/Layout/Header";
import FoundItemsPage from "./components/Pages/FoundItems/FoundItemsPage";
import LostItemsPage from "./components/Pages/LostItems/LostItemsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LostForm from "./components/Forms/LostForm";
import FoundForm from "./components/Forms/FoundForm";
import AuthForm from "./components/Forms/AuthForm";


function App() {
  const [lostFormShown,setLostFormShown]=useState(false);

  const showLostFormHandler = ()=>{
    setLostFormShown(true);
  }

  const hideLostFormHandler =()=>{
    setLostFormShown(false);
  }

  const [foundFormShown,setFoundFormShown]=useState(false);

  const showFoundFormHandler = ()=>{
    setFoundFormShown(true);
  }

  const hideFoundFormHandler =()=>{
    setFoundFormShown(false);
  }
  
  const [authFormShown, setAuthFormShown]=useState(false);

  const showAuthFormHandler = ()=>{
    setAuthFormShown(true);
  }

  const hideAuthFormHandler = ()=>{
    setAuthFormShown(false);
  }

  const things = [
    {
      id: "e1",
      name: "Speaker",
      color: "black",
      date: new Date(2022, 1, 1),
      location: "Ground",
    },

    {
      id: "e2",
      name: "Bag",
      color: "Blue",
      date: new Date(2022, 1, 3),
      location: "Library",
    },

    {
      id: "e3",
      name: "Smart Watch",
      color: "Green",
      date: new Date(2022, 1, 7),
      location: "DSA lab",
    },

    {
      id: "e4",
      name: "Bottle",
      color: "Silver",
      date: new Date(2022, 1, 5),
      location: "playground",
      
    },
    {
      id: "e5",
      name: "Gloves",
      color: "Black",
      date: new Date(2022, 1, 12),
      location: "Playground",
    },
    {
      id: "e6",
      name: "Data Cable",
      color: "Blue",
      date: new Date(2022, 1, 12),
      location: "Auditorium",
    },
    {
      id: "e7",
      name: "Umbrella",
      color: "Black",
      date: new Date(2022, 1, 12),
      location: "Parking",
    },
    {
      id: "e8",
      name: "Bottle",
      color: "Silver",
      date: new Date(2022, 1, 12),
      location: "IT-05",
    },
    {
      id: "e9",
      name: "Wallet",
      color: "Brown",
      date: new Date(2022, 1, 12),
      location: "Canteen",
    },
    {
      id: "e10",
      name: "Smart Watch",
      color: "Green",
      date: new Date(2022, 1, 12),
      location: "Near L.C.",
    },
    {
      id: "e11",
      name: "Charger",
      color: "Black",
      date: new Date(2022, 1, 12),
      location: "Computer Lab",
    },
    {
      id: "e12",
      name: "Earphone",
      color: "Black",
      date: new Date(2022, 1, 12),
      location: "Hostel Gate",
    },

  ];

  return (
    // <Router>
      <div>
        <Header onShowAuthForm={showAuthFormHandler}></Header>
        {authFormShown && <AuthForm onClose={hideAuthFormHandler}/>}
        {lostFormShown &&  <LostForm onClose={hideLostFormHandler}/>}
        {foundFormShown &&  <FoundForm onClose={hideFoundFormHandler} />}
        <Routes>
          <Route path="/" element={<Content onShowLostForm={showLostFormHandler} onShowFoundForm={showFoundFormHandler} things={things}/>}></Route>
          <Route
            path="/founditems"
            element={<FoundItemsPage items={things} />}
          ></Route>
          <Route path="/lostitems" element={<LostItemsPage items={things} />} />
        </Routes>        
      </div>
  //  </Router>
  );
}

export default App;
