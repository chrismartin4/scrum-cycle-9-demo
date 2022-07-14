import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList, IonDatetime, IonTextarea } from '@ionic/react';
import { image, text } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState }from 'react';
import axios from "../api/axiostoken";
// import './editEvent.css';

const handleUpdate= (ev:any) => {
  const id=ev.event.Event_id;
  const [title, setTitle] = useState<string>();
  const [start_date, setStart_date] = useState<string>();
  const [end_date, setEnd_date] = useState<string>();
  const [venue, setVenue] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [website_url, setUrl] = useState<string>();
  //const [file, setFile] = useState<File>("");
  const { name } = useParams<{ name: string; }>();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileSelect = (event:any) => {
    console.log( event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event:any) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("flyer", selectedFile!);
    formData.append("title", title!);
    formData.append("venue", venue!);
    formData.append("start_date", start_date!);
    formData.append("end_date", end_date!);
    formData.append("website_url", website_url!);
    formData.append("desc", desc!);
    axios.put("/events/"+id, formData)
        .then(res => {
            console.log(res);
        })
        .catch(error=>{
            //setMessage("Auth failure! Please create an account");
            //setIserror(true)
            console.log(error);
        })
  };
  return (
        <form className="ion-padding" onSubmit={handleSubmit}>
          {/* <IonTitle>Edit Event</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Event Title</IonLabel>
            <IonInput type="text" value={title} placeholder="Enter Event Title" onIonChange={e => setTitle(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Start Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime value={start_date}  onIonChange={e => setStart_date(e.detail.value!)}></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">End Date</IonLabel>
            <br></br>
            <br></br>
            <IonDatetime value={end_date}  onIonChange={e => setEnd_date(e.detail.value!)}></IonDatetime>
            <br></br>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea  value={desc} placeholder="Enter Description" onIonChange={e => setDesc(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Venue</IonLabel>
            <IonInput type="text" value={venue} placeholder="Enter Venue" onIonChange={e => setVenue(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Flyer</IonLabel>
            {/* <input type="file" onChange={(ev) => onFileChange(ev)}></input> */}
            <br></br>
            <br></br>
            <input type="file"  onChange={handleFileSelect}></input>
            <br></br>
            {/* <IonInput></IonInput> */}
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Website URL</IonLabel>
            <IonInput type="url" value={website_url} placeholder="Enter URL" onIonChange={e => setUrl(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonButton color="warning" type="submit">Edit Event</IonButton>
          {/* <IonButton expand="block" onclick="openMenu()">Open Menu</IonButton> */}
        </form>
  );
};

