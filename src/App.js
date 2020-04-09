import React, {useState} from 'react';
import './App.css';
import LoginModal from './LoginModal/LoginModal';
import Header from './Header/Header';
import Home from './Home/Home';
import ListView from './ListView/ListView';
import DetailView from './DetailView/DetailView';
import PreferencesForm from './PreferencesForm/PreferencesForm';
import CreateUser from './CreateUser/CreateUser';
import CustomListView from './CustomListView/CustomListView'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LoginProvider} from './LoginContext';


function App() {

  const [modal, setModal] = useState({
    showModal: false
})

const closeModalHandler = (event) => {
  if (event.target.className.includes('Background')) {
      setModal(
         {showModal: false}
      )}}

const closeModalOnSubmit = () => setModal({showModal: false});

const openModal = () => {
setModal(
  {showModal: true}
)}

let loginModal = null

if (modal.showModal) {
loginModal = (<LoginModal closeModalHandler={closeModalHandler}
                          closeModalOnSubmit={closeModalOnSubmit} />)
}

return (
  <Router>
    <LoginProvider>
      <div className="App">
        { loginModal }
        <Header openModal={openModal}/>
        <Route
              path='/' exact
              render={(props) => <Home {...props} openModal={openModal} />}
            />
        <Route path="/start" exact component={PreferencesForm} />
        <Route path="/custom-recipes" exact component={CustomListView} />
        <Route path="/register" exact component={CreateUser} />
        <Route path="/recipes" exact component={ListView} />
        <Route path="/recipes/:id" exact component={DetailView} />
      </div>
    </LoginProvider>
  </Router>
);
}

export default App;
