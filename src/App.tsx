import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonRow,
  IonText
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { barbellOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";

import { initialize } from "./data";

import { Weight, Photos, Measurements } from "./pages";

const App: React.FC = () => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ padding: "0 16px" }}>
              <IonRow className="ion-justify-content-start ion-align-items-center">
                <IonText>Shape Reboot</IonText>
              </IonRow>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/weight" component={Weight} exact={true} />
              <Route path="/measurements" component={Measurements} exact={true} />
              <Route path="/photos" component={Photos} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/weight" />} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="weight" href="/weight">
                <IonLabel>Weights</IonLabel>
              </IonTabButton>

              <IonTabButton tab="measurements" href="/Measurements">
                <IonLabel>Measurements</IonLabel>
              </IonTabButton>

              <IonTabButton tab="photos" href="/photos">
                <IonLabel>Photos</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
