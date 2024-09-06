import express from "express";
import bodyParser from "body-parser";
import { Employes } from "./Employes.js";
import { Taches } from "./Taches.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/app", (req, res) => {
  // Création des employés
  const e1 = Employes.createEmploye({
    nom: "Gaye",
    prenom: "Aichetou",
    email: "aicha@gmail.com",
    poste: "Dev Web",
    dateEmbauche: "10-12-2024",
    statut: "CDD",
  });

  const e2 = Employes.createEmploye({
    nom: "Cissé",
    prenom: "Fatima",
    email: "fatima@gmail.com",
    poste: "DevOps",
    dateEmbauche: "10-11-2024",
    statut: "CDI",
  });

  const e3 = Employes.createEmploye({
    nom: "Sem",
    prenom: "Thillo",
    email: "thillo@gmail.com",
    poste: "Dev front",
    dateEmbauche: "10-11-2025",
    statut: "CDD",
  });

  // Création des tâches
  const t1 = Taches.createTask({
    nom: "Integration de la maquette",
    description: "Integrer la maquette améliorée",
    dateDebut: "01-02-2023",
    dateFin: "01-02-2025",
    statut: "A faire",
    priorite: "Elevée",
  });

  const t2 = Taches.createTask({
    nom: "Rédiger le rapport mensuel",
    description: "Informer le client de l'avancement du projet",
    dateDebut: "11-12-2023",
    dateFin: "11-12-2026",
    statut: "En cours",
    priorite: "Elevée",
  });

  const t3 = Taches.createTask({
    nom: "Modification de la maquette",
    description:
      "Améliorer le UI, rendre responsive, ajouter une espace de connexion",
    dateDebut: "12-06-2023",
    dateFin: "12-12-2026",
    statut: "A faire",
    priorite: "Basse",
  });

  // Assignation des tâches
  Assignation.assignTask({ employe: e1, tache: t3, dateAssignation: new Date() });
  Assignation.assignTask({ employe: e2, tache: t2, dateAssignation: new Date() });

  // Récupération des données
  const assignation = Assignation.getTab();
  const resulFiltre = Assignation.getTasksByEmployee(e1);
  Assignation.assignTask({ employe: e2, tache: t1, dateAssignation: new Date() });
  const testEcrase = Assignation.getTab();

  // Envoi des réponses
  res.status(200).json({ assignation, testEcrase, resulFiltre });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
