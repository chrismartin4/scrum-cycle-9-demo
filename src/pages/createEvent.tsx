import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList, IonDatetime, IonTextarea } from '@ionic/react';
import { image, text } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
// import './createEvent.css';

const CreateEvent: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Create Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          {/* <IonTitle>Create Event</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Event Title</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Start Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">End Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Venue</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Flyer</IonLabel>
            {/* <input type="file" onChange={(ev) => onFileChange(ev)}></input> */}
            <br></br>
            <br></br>
            <input type="file"></input>
            <br></br>
            {/* <IonInput></IonInput> */}
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Website URL</IonLabel>
            <IonInput type="url"></IonInput>
          </IonItem>
          <IonButton color="warning">Create Event</IonButton>
          {/* <IonButton expand="block" onclick="openMenu()">Open Menu</IonButton> */}
        </form>
      </IonContent>
    </IonPage>
  );
};

export default CreateEvent;