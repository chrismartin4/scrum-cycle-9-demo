import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList, IonDatetime, IonTextarea } from '@ionic/react';
import { image, text } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
// import './editEvent.css';

const EditEvent: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Edit Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          {/* <IonTitle>Edit Event</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Event Title</IonLabel>
            <IonInput value={"Event 1"}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Start Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime value={"2022-07-20T12:00"}></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">End Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime value={"2022-07-20T14:30"}></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea value={"Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Venue</IonLabel>
            <IonInput value={"Kingston, Jamaica"}></IonInput>
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
            <IonInput type="url" value={"example.example.com"}></IonInput>
          </IonItem>
          <IonButton color="warning">Edit Event</IonButton>
          {/* <IonButton expand="block" onclick="openMenu()">Open Menu</IonButton> */}
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditEvent;