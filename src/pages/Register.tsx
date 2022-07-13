import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import { image, text } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
// import './Register.css';

const Register: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {/* <IonTitle>Register</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Profile Photo</IonLabel>
            {/* <input type="file" onChange={(ev) => onFileChange(ev)}></input> */}
            <br></br>
            <br></br>
            <input type="file"></input>
            <br></br>
            {/* <IonInput></IonInput> */}
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Role</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton color="warning">Register</IonButton>
          {/* <IonButton expand="block" onclick="openMenu()">Open Menu</IonButton> */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
