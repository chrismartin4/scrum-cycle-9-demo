import React,{ useState }from 'react';
import { IonContent, IonHeader, IonAccordionGroup, IonSearchbar, IonButtons,IonAlert, IonMenuButton, IonAccordion, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Tab3.css';
import { useIonViewWillEnter } from '@ionic/react';
import axios from "../api/axiostoken";

const eventsList = [
  { Event_id: 10, created_at: "Thu, 30 Jun 2022 12:56:22 GMT", desc: "Annual food festival with all of Jamaica's finest culinary treats", end_date: "Sat, 25 Jun 2022 17:50:00 GMT", flyer: "party.png", start_date: "Thu, 23 Jun 2022 12:50:00 GMT", status: "Published", title: "Food & Drink Festival", uid: 7, venue:"Kingston Kitchen", website_url: "foodfes.com"},
  { Event_id: 11, created_at: "Thu, 30 Jun 2022 12:58:32 GMT", desc: "Jamaica's first rum festival", end_date: "Wed, 15 Jun 2022 15:56:00 GMT", flyer: "hm-hero.png", start_date: "Tue, 14 Jun 2022 12:56:00 GMT", status: "Published", title: "Rum Market", uid: 7, venue:"Appleton Estate", website_url: "rummarket.com"},
  { Event_id: 12, created_at: "Thu, 30 Jun 2022 14:25:25 GMT", desc: "A run set by BNC for charity", end_date: "Thu, 30 Jun 2022 16:24:00 GMT", flyer: "runmarathon.png", start_date: "Thu, 30 Jun 2022 14:24:00 GMT", status: "Pending", title: "BNC Run", uid: 10, venue:"Kingston", website_url: "bncrun.com"}
] 
const PendingEvents: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [events, setEvents] = useState<any[]>([]);
  const [iserror, setIserror] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  useIonViewWillEnter(() => {
    console.log('load some data from a service');
    axios.get("events/pending")
        .then(res => {
            console.log(res.data.events);
            setEvents(res.data.events);
    
        })
        .catch(error=>{
          console.log(error.response.data);
          setMessage(error.response.data.msg);
          setIserror(true)
        })
    },[])
    const handleApprove = (ev:any) => {
      const id=ev.event.Event_id;
      
      axios.patch("/events/"+id)
          .then(res => {
              console.log(res.data.msg);     
              //history.push("/allpublishedevents");
              setMessage(res.data.msg);
              setIsSuccess(true)
          })
          .catch(error=>{
            console.log(error);
          setMessage(error.response.data.msg);
          setIserror(true);
          })
    };
    const handleDeny = (ev:any) => {
      const id=ev.event.Event_id;
      axios.delete("/events/"+id)
          .then(res => {
              console.log(res);     
              //history.push("/allpublishedevents");
              setMessage(res.data.msg);
              setIsSuccess(true)
          })
          .catch(error=>{
            console.log(error.response.data.msg);
          setMessage(error.response.data.msg);
          setIserror(true)  
          })
    };
    const handleDismiss = () => {
      setIsSuccess(false);
      window.location.reload();

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
