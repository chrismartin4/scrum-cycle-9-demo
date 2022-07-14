import React,{ useState }from 'react';
import { IonContent, IonHeader, IonAccordionGroup, IonButtons, IonMenuButton, IonSearchbar, IonAccordion, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonThumbnail, IonImg, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonListHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useIonViewWillEnter } from '@ionic/react';
import axios from "../api/axiostoken";

// import './Tab3.css';

/* const defaultevents = [
  { id: 1, title: "Event 1" },
  { id: 2, title: "Event 2" },
  { id: 3, title: "Event 3" },
  { id: 4, title: "Event 4" },
  { id: 5, title: "Event 5" },
] */

const AllPublishedEvents: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [events, setEvents] = useState<any[]>([]);
  useIonViewWillEnter(() => {
    console.log('load some data from a service');
    axios.get("/events")
        .then(res => {
            console.log(res.data.allev);
            setEvents(res.data.allev);
            //console.log(res.data.token);
            //sessionStorage.setItem('token', res.data.token);

            //setToken(res.data.token);         
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
          <IonTitle>Published Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Published Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="All Events" /> */}

        <IonList>
          {/* <IonTitle>Upcoming Events</IonTitle> */}
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
                        {/* <img src="../uploads/download_1.jpg" alt={event.title} /> */}
                        <img src="C:\Users\user\Desktop\NCB\cycle 8\scrum-cycle-9-demo\public\assets\uploads\download_1.jpg" alt={event.title} />
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle>{event.title}</IonCardTitle>
                      </IonCardHeader>

                      <IonCardContent>
                      {event.desc}
                      </IonCardContent>
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

export default AllPublishedEvents;
