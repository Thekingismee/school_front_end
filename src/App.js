// // src/App.js
// import React, { Component } from "react";
// // J'ai ajouté Route et Switch à ton import existant
// import { Router, Route, Switch } from "react-router-dom";
// import { history } from "./redux/enhancers/middlewares/router";

// import "react-toastify/dist/ReactToastify.css";
// import Home from "./pages/Home";
// import Layout from "./containers/Layout";
// import Inscription from "./pages/Inscription";
// import LeGroupe from "./pages/LeGroupe";
// import NotreEtablissement from "./pages/NotreEtablissement";
// import Posts from "./pages/Posts";
// import ParcoursScolaire from "./pages/ParcoursScolaire";
// import VieScolaire from "./pages/VieScolaire";
// import Maternelle from "./pages/Maternelle";
// import College from "./pages/Collège";
// import Lycee from "./pages/Lycée";
// import Primaire from "./pages/Primaire";
// import Why from "./pages/Why";
// import ModalitesInscription from "./pages/ModalitesInscription";
// import RendezVous from "./pages/RendezVous";
// import JoinUs from "./pages/JoinUs";
// import TarifsFrais from "./pages/TarifsFrais";
// class App extends Component {
//     render() {
//         return (
//             <Router history={history}>
//                 <Layout>
//                     <Switch>
//                         {/*
//                            exact : assure que cette route ne correspond que si l'URL est exactement "/"
//                            Sans 'exact', Home s'afficherait aussi sur '/inscription'
//                         */}
//                         <Route exact path="/" component={Home} />

//                         <Route path="/posts" component={Posts} />
//                         <Route path="/ParcoursScolaire" component={ParcoursScolaire} />
//                         <Route path="/VieScolaire" component={VieScolaire} />
//                         <Route path="/inscription" component={Inscription} />
//                         <Route path="/LeGroupe" component={LeGroupe} />
//                         <Route path="/NotreEtablissement" component={NotreEtablissement} />
//                         <Route path="/Maternelle" component={Maternelle} />
//                         <Route path="/Collège" component={Collège} />
//                         <Route path="/Lycée" component={Lycée} />
//                         <Route path="/primaire" component={Primaire} />
//                         <Route path="/why" component={Why} />
//                         <Route path="/ModalitesInscription" component={ModalitesInscription} />
//                         <Route path="/rendez-vous" component={RendezVous} />
//                         <Route path="/join-us" component={JoinUs} />
//                         <Route path="/tarifs-et-frais" component={TarifsFrais} />

//                         {/* <Route path="/contact" component={Contact} /> */}
//                     </Switch>
//                 </Layout>
//             </Router>
//         );
//     }
// }

// export default App;

// src/App.js - VERSION CORRIGÉE (SANS COMMENTAIRES DANS LES ROUTES)
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./redux/enhancers/middlewares/router";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Layout from "./containers/Layout";
import Inscription from "./pages/Inscription";
import LeGroupe from "./pages/LeGroupe";
import NotreEtablissement from "./pages/NotreEtablissement";
import Posts from "./pages/Posts";
import ParcoursScolaire from "./pages/ParcoursScolaire";
import VieScolaire from "./pages/VieScolaire";
import Maternelle from "./pages/Maternelle";
import College from "./pages/Collège";
import Lycee from "./pages/Lycée";
import Primaire from "./pages/Primaire";
import Why from "./pages/Why";
import ModalitesInscription from "./pages/ModalitesInscription";
import RendezVous from "./pages/RendezVous";
import JoinUs from "./pages/JoinUs";
import TarifsFrais from "./pages/TarifsFrais";
import ActualiteDetail from "./components/Actualites/ActualiteDetail";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={Posts} />
                        <Route
                            path="/ParcoursScolaire"
                            component={ParcoursScolaire}
                        />
                        <Route path="/VieScolaire" component={VieScolaire} />
                        <Route path="/inscription" component={Inscription} />
                        <Route path="/LeGroupe" component={LeGroupe} />
                        <Route
                            path="/NotreEtablissement"
                            component={NotreEtablissement}
                        />
                        <Route path="/Maternelle" component={Maternelle} />
                        <Route path="/college" component={College} />
                        <Route path="/lycee" component={Lycee} />
                        <Route path="/primaire" component={Primaire} />
                        <Route path="/why" component={Why} />
                        <Route
                            path="/ModalitesInscription"
                            component={ModalitesInscription}
                        />
                        <Route path="/rendez-vous" component={RendezVous} />
                        <Route path="/join-us" component={JoinUs} />
                        <Route path="/actualites/:id" component={ActualiteDetail} />
                        <Route
                            path="/tarifs-et-frais"
                            component={TarifsFrais}
                        />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
