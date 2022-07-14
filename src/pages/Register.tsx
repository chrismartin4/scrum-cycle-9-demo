import { IonButtons, IonButton, IonContent, IonHeader,IonAlert, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import { image, text } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState }from 'react';
import { useRef } from 'react';
import axios from "../api/axios";
//import axios from "../api/axiostoken";
// import './Register.css';

const Register: React.FC = () => {
  const [iserror, setIserror] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullname, setFullname] = useState<string>();
  const [role, setRole] = useState<string>();
  //const [file, setFile] = useState<File>("");
  const { name } = useParams<{ name: string; }>();
  const [selectedFile, setSelectedFile] = React.useState(null);
 /*  const onFileChange = (fileChangeEvent: any) => {
    values.current.file = fileChangeEvent.target.files[0];
  }; */
  //const [logo, setImage] = useState<File | null>(null);
  const handleFileSelect = (event:any) => {
    console.log( event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event:any) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("profile_photo", selectedFile!);
    formData.append("email", email!);
    formData.append("role", role!);
    formData.append("password", password!);
    formData.append("full_name", fullname!);
    axios.post("/register", formData)
        .then(res => {
            console.log(res);
            

            //setToken(res.data.token);         
            //history.push("/allpublishedevents");
            setMessage(res.data.message);
            setIsSuccess(true)
        })
        .catch(error=>{
            //setMessage("Auth failure! Please create an account");
            //setIserror(true)
            setMessage(error.response.data.msg);
            setIserror(true);
            console.log(error);
        })
  };const handleDismiss = () => {
    setIsSuccess(false);
  

  };
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
      <IonAlert
                isOpen={isSuccess}
                onDidDismiss={() =>  handleDismiss() }
                cssClass="my-custom-class"
                header={"Success"}
                message={message}
                buttons={["Dismiss"]}
            />
      <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)
                }
                cssClass="my-custom-class"
                header={"Error"}
                message={message}
                buttons={["Dismiss"]}
            />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding" onSubmit={handleSubmit}>
          {/* <IonTitle>Register</IonTitle> */}
          <IonItem>
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput type="text" value={fullname} placeholder="Enter Full Name" onIonChange={e => setFullname(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Profile Photo</IonLabel>
            {/* <input type="file" onChange={(ev) => onFileChange(ev)}></input> */}
            <br></br>
            <br></br>
            <input type="file" onChange={handleFileSelect}/>
            <br></br>
            {/* <IonInput></IonInput> */}
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Role</IonLabel>
            <IonInput type="text" value={role} placeholder="Enter Role" onIonChange={e => setRole(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonButton color="warning" type="submit">Register</IonButton>
          {/* <IonButton expand="block" onclick="openMenu()">Open Menu</IonButton> */}
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
