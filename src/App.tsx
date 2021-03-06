import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateEvent from './pages/createEvent';
import EditEvent from './pages/editEvent';
import AllPublishedEvents from './pages/allPublishedEvents';
import PendingEvents from './pages/pendingEvents';
import UserProfile from './pages/userProfile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import AllPublishedEvents from './pages/allPublishedEvents';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            <Route exact path="/">
              <Redirect to="/register" />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/createevent">
              <CreateEvent />
            </Route>
            <Route exact path="/editevent">
              <EditEvent />
            </Route>
            <Route exact path="/allpublishedevents">
              <AllPublishedEvents />
            </Route>
            <Route exact path="/pendingevents">
              <PendingEvents />
            </Route>
            <Route exact path="/userprofile">
              <UserProfile />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
