import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import { text } from 'ionicons/icons';
import { useParams } from 'react-router';
import axios from "../api/axios";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import PropTypes from 'prop-types';
// import './Login.css';

const Login: React.FC = () => {
  
  const history = useHistory();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    const loginData = {
        "email": email,
        "password": password
    }
    axios.post("/login", loginData)
        .then(res => {
            console.log(res);
            console.log(res.data.token);
            sessionStorage.setItem('token', res.data.token);

            //setToken(res.data.token);         
            history.push("/allpublishedevents");
            
        })
        .catch(error=>{
            setMessage("Auth failure! Please create an account");
            setIserror(true)
        })
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          {/* <IonTitle>Login</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonButton color="warning" onClick={handleLogin}>Login</IonButton>
          </form>

      </IonContent>
    </IonPage>
  );
};

export default Login;
