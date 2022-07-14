import React,{ useState }from 'react';
import { useEffect }from 'react';
import { useRef}from 'react';
import { useHistory } from "react-router-dom";
import { IonButtons, IonButton, IonContent,IonAlert, IonHeader, IonMenuButton, IonSearchbar, IonCardHeader, IonCardTitle, IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
// import { image, text } from 'ionicons/icons';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './userProfile.css';
import { useIonViewWillEnter } from '@ionic/react';
import { useIonViewDidEnter } from '@ionic/react';
import EditEvent from './editEvent';
import axios from "../api/axiostoken";

const eventsList = [
  { Event_id: 10, created_at: "Thu, 30 Jun 2022 12:56:22 GMT", desc: "Annual food festival with all of Jamaica's finest culinary treats", end_date: "Sat, 25 Jun 2022 17:50:00 GMT", flyer: "party.png", start_date: "Thu, 23 Jun 2022 12:50:00 GMT", status: "Published", title: "Food & Drink Festival", uid: 7, venue:"Kingston Kitchen", website_url: "foodfes.com"},
  { Event_id: 11, created_at: "Thu, 30 Jun 2022 12:58:32 GMT", desc: "Jamaica's first rum festival", end_date: "Wed, 15 Jun 2022 15:56:00 GMT", flyer: "hm-hero.png", start_date: "Tue, 14 Jun 2022 12:56:00 GMT", status: "Published", title: "Rum Market", uid: 7, venue:"Appleton Estate", website_url: "rummarket.com"},
  { Event_id: 12, created_at: "Thu, 30 Jun 2022 14:25:25 GMT", desc: "A run set by BNC for charity", end_date: "Thu, 30 Jun 2022 16:24:00 GMT", flyer: "runmarathon.png", start_date: "Thu, 30 Jun 2022 14:24:00 GMT", status: "Pending", title: "BNC Run", uid: 10, venue:"Kingston", website_url: "bncrun.com"}
] 

const UserProfile: React.FC = () => {
  const history = useHistory();
  const defaultprofile = {
    email: "johnbrown@example.com", 
    full_name: "John Brown", 
    profile_photo: "download_2.png", 
    role: "Regular", 
    user_id: 7
  }
//   const { name } = useParams<{ name: string; }>();
  const [searchText, setSearchText] = useState('');
  const [profile, setProfile] = useState(defaultprofile);
  const [iserror, setIserror] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const profileRef = useRef(defaultprofile)
  
  //const [events, setEvents] = useState<any[]>([]);
  const [events, setEvents] = useState(eventsList);
  useIonViewWillEnter(() => {
    console.log('Profile');
    const GetProfile = async () => {
      try {
          const resp = await axios.get("/profile");

          profileRef.current=resp.data.profile;
          setProfile(resp.data.profile,);
          console.log(profileRef.current)
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };
  
  GetProfile();
  
  const GetUserEvents = async () => {
    try {
        const res = await axios.get("events/user/"+profileRef.current.user_id);
          console.log(res.data.allev);
          setEvents(res.data.allev);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
//GetUserEvents();
setTimeout(GetUserEvents, 100);
    },[]);
    const handleDelete = (ev:any) => {
      const id=ev.event.Event_id;
      axios.delete("/events/"+id)
          .then(res => {
              console.log(res);     
              //history.push("/allpublishedevents");
              setMessage(res.data.msg);
              setIsSuccess(true)
              
          })
          .catch(error=>{
            console.log(error);
            history.push("/login")  
          })
    };
    const handleUpdate = (ev:any) => {
      const id=ev.event.Event_id;
      axios.put("/events/"+id)
          .then(res => {
              console.log(res);     
              //history.push("/allpublishedevents");
              
          })
          .catch(error=>{
            console.log(error);  
          })
    };
    const handleDismiss = () => {
      setIsSuccess(false);
      window.location.reload();

    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>User Profile</IonTitle>
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
        {/* <div className="ion-padding">
        The world is your oyster.
        <p>If you get lost, the <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">docs</a> will be your guide.</p>
        </div> */}
        
        <div className="card">
            <div className="header">
                <div className="profilepic">
                    <img className="userimg" src={'assets/uploads/'+profile.profile_photo} alt={profile.profile_photo} />
                </div>
            </div>
        </div>
        <div className="card-body">
        <div className="user-meta ion-text-center">
            <h3 className="username">{profile.full_name}</h3>
            <h5 className="useremail">{profile.email}</h5>
            <h6 className="userrole">Role: {profile.role} User</h6>
        </div>
        {/* <IonButton expand="full" color="primary">http://rogerfederer.com</IonButton>
        <IonButton expand="full" color="secondary">@RogerFederer on Twitter</IonButton>
        <IonButton expand="full" color="secondary">View profile at ATP</IonButton> */}
        </div>
        <IonList>
          {/* <IonTitle>Upcoming Events</IonTitle> */}
          <IonCardContent>
                  Your Events:
          </IonCardContent>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          {events.map((event) => (
            <IonItem>
              <IonAccordionGroup expand="inset">
                <IonAccordion toggleIconSlot="end">
                  <IonItem key={event.Event_id} slot="header" color="light">
                    <IonLabel>{event.title}</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonCard>
                      <IonCardHeader>
                        <img src={'assets/uploads/'+event.flyer} className="center" alt={event.flyer}></img>
                        <br></br>
                        <IonCardTitle>{event.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                      {event.desc} <br></br><br></br>
                      <b>Venue:</b> {event.venue} <br></br>
                      <b>Starts at:</b> {event.start_date} <br></br>
                      <b>Ends at:</b> {event.end_date} <br></br>
                      <b>Website:</b> {event.website_url} <br></br>
                      <b>Event Status:</b> {event.status} <br></br>
                      <b>Created at:</b> {event.created_at} by {event.uid} <br></br>
                      </IonCardContent>
                      <IonButton onClick={()=> handleUpdate({event})}>Update</IonButton>
                      <IonButton color="danger" onClick={()=> handleDelete({event})}>Delete</IonButton>
                    </IonCard>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonItem>
          ))}
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;