import React,{ useState }from 'react';
import { IonContent, IonHeader, IonAccordionGroup, IonSearchbar, IonButtons, IonMenuButton, IonAccordion, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Tab3.css';
import { useIonViewWillEnter } from '@ionic/react';
import axios from "../api/axiostoken";

const events = [
  { id: 1, name: "Event 1" },
  { id: 2, name: "Event 2" },
  { id: 3, name: "Event 3" },
  { id: 4, name: "Event 4" },
  { id: 5, name: "Event 5" },
]

const PendingEvents: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [events, setEvents] = useState<any[]>([]);
  useIonViewWillEnter(() => {
    console.log('load some data from a service');
    axios.get("events/pending")
        .then(res => {
            console.log(res.data.events);
            setEvents(res.data.events);
        })
        .catch(error=>{
           console.log("test");
        })
    },[])
    const handleApprove = (ev:any) => {
      const id=ev.event.Event_id;
      
      axios.patch("/events/"+id)
          .then(res => {
              console.log(res);     
              //history.push("/allpublishedevents");
              
          })
          .catch(error=>{
            console.log(error);  
          })
    };
    const handleDeny = (ev:any) => {
      const id=ev.event.Event_id;
      axios.delete("/events/"+id)
          .then(res => {
              console.log(res);     
              //history.push("/allpublishedevents");
              
          })
          .catch(error=>{
            console.log(error);  
          })
    };
    ;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pending Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          {/* <IonTitle>Upcoming Events</IonTitle> */}
          <IonCardContent>
                  Search for events that are currently pending below:
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
                        <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=''/>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle>{event.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                      {event.desc}
                      </IonCardContent>
                      <IonButton color="success" onClick={()=> handleApprove({event})}>Approve</IonButton>
                      <IonButton color="danger" onClick={()=> handleDeny({event})}>Deny</IonButton>
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


export default PendingEvents;
