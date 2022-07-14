import React,{ useState }from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonSearchbar, IonCardHeader, IonCardTitle, IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
// import { image, text } from 'ionicons/icons';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './userProfile.css';

const eventsList = [
  { Event_id: 10, created_at: "Thu, 30 Jun 2022 12:56:22 GMT", desc: "Annual food festival with all of Jamaica's finest culinary treats", end_date: "Sat, 25 Jun 2022 17:50:00 GMT", flyer: "party.png", start_date: "Thu, 23 Jun 2022 12:50:00 GMT", status: "Published", title: "Food & Drink Festival", uid: 7, venue:"Kingston Kitchen", website_url: "foodfes.com"},
  { Event_id: 11, created_at: "Thu, 30 Jun 2022 12:58:32 GMT", desc: "Jamaica's first rum festival", end_date: "Wed, 15 Jun 2022 15:56:00 GMT", flyer: "hm-hero.png", start_date: "Tue, 14 Jun 2022 12:56:00 GMT", status: "Published", title: "Rum Market", uid: 7, venue:"Appleton Estate", website_url: "rummarket.com"},
  { Event_id: 12, created_at: "Thu, 30 Jun 2022 14:25:25 GMT", desc: "A run set by BNC for charity", end_date: "Thu, 30 Jun 2022 16:24:00 GMT", flyer: "runmarathon.png", start_date: "Thu, 30 Jun 2022 14:24:00 GMT", status: "Pending", title: "BNC Run", uid: 10, venue:"Kingston", website_url: "bncrun.com"}
] 

const UserProfile: React.FC = () => {

//   const { name } = useParams<{ name: string; }>();
  const [searchText, setSearchText] = useState('');
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
                    <img className="userimg" src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)" alt="" />
                </div>
            </div>
        </div>
        <div className="card-body">
        <div className="user-meta ion-text-center">
            <h3 className="username">John Brown</h3>
            <h5 className="useremail">johnbrown@example.com</h5>
            <h6 className="userrole">Role: Regular User</h6>
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
          {eventsList.map((event) => (
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