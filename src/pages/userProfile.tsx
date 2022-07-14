import React,{ useState }from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonSearchbar, IonCardHeader, IonCardTitle, IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
// import { image, text } from 'ionicons/icons';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './userProfile.css';
import { useIonViewWillEnter } from '@ionic/react';
import axios from "../api/axiostoken";

const events = [
    { id: 1, name: "Event 1" },
    { id: 2, name: "Event 2" },
    { id: 3, name: "Event 3" },
    { id: 4, name: "Event 4" },
    { id: 5, name: "Event 5" },
  ]
const defaultprofile = {
  email: "johnbrown@example.com", 
  full_name: "John Brown", 
  profile_photo: "download_2.png", 
  role: "Regular", 
  user_id: 7
}
const UserProfile: React.FC = () => {

//   const { name } = useParams<{ name: string; }>();
  const [searchText, setSearchText] = useState('');
  const [profile, setProfile] = useState(defaultprofile);
  const [events, setEvents] = useState<any[]>([]);
  useIonViewWillEnter(() => {
    console.log('load some data from a service');
    axios.get("/profile")
        .then(res => {
            console.log(res);
            setProfile(res.data.profile);      
            //history.push("/allpublishedevents");
            
        })
        .catch(error=>{
           console.log("test");
        })
    axios.get("events/user/"+profile.user_id)
        .then(res => {
          console.log(res.data.allev);
          setEvents(res.data.allev);      
            //history.push("/allpublishedevents");
            
        })
        .catch(error=>{
           console.log("test");
        })
    },[]);
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
                  <IonItem key={event.id} slot="header" color="light">
                    <IonLabel>{event.title}</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonCard>
                      <IonCardHeader>
                        <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=''/>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle>{event.name}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                      </IonCardContent>
                      <IonButton>Update</IonButton>
                      <IonButton color="danger">Delete</IonButton>
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