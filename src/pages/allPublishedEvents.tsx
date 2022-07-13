import React,{ useState }from 'react';
import { IonContent, IonHeader, IonAccordionGroup, IonButtons, IonMenuButton, IonSearchbar, IonAccordion, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonThumbnail, IonImg, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonListHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab3.css';

const events = [
  { id: 1, name: "Event 1" },
  { id: 2, name: "Event 2" },
  { id: 3, name: "Event 3" },
  { id: 4, name: "Event 4" },
  { id: 5, name: "Event 5" },
]

const AllPublishedEvents: React.FC = () => {
  const [searchText, setSearchText] = useState('');
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
                  <IonItem key={event.id} slot="header" color="light">
                    <IonLabel>{event.name}</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonCard>
                      <IonCardHeader>
                        <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt='' />
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle>{event.name}</IonCardTitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
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
