import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonButton,
  IonNote,
  IonAlert
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, clipboardSharp, pencilOutline, person, personOutline, calendarNumberOutline, calendarClearOutline, mailOutline, mailSharp, clipboardOutline, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Register',
    url: '/register',
    iosIcon: clipboardOutline,
    mdIcon: clipboardOutline
  },
  {
    title: 'Login',
    url: '/login',
    iosIcon: person,
    mdIcon: person
  },
  {
    title: 'Create Event',
    url: '/createevent',
    iosIcon: clipboardSharp,
    mdIcon: clipboardSharp
  },
  {
    title: 'Edit Event',
    url: '/editevent',
    iosIcon: pencilOutline,
    mdIcon: pencilOutline
  },
  {
    title: 'Published Events',
    url: '/allpublishedevents',
    iosIcon: calendarNumberOutline,
    mdIcon: calendarNumberOutline
  },
  {
    title: 'Pending Events',
    url: '/pendingevents',
    iosIcon: calendarClearOutline,
    mdIcon: calendarClearOutline
  },
  {
    title: 'Profile',
    url: '/userprofile',
    iosIcon: personOutline,
    mdIcon: personOutline
  }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogout = () => {
    setMessage("User Logged out");
    setIserror(true);
    sessionStorage.removeItem('token');
    history.push("/login");
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
      <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Logout"}
                message={message}
                buttons={["Dismiss"]}
            />
        <IonList id="inbox-list">
          <IonListHeader>Events Pro</IonListHeader>
          <IonNote>Events Management System</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonButton color="warning" onClick={handleLogout}>Logout</IonButton>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
