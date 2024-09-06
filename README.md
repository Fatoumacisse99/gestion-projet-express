# Gestion de Projet - Application de Gestion des Employés et des Tâches

## Introduction

Cette application permet de gérer les employés, les tâches et leurs assignations dans un contexte de gestion de projet. Elle est construite en JavaScript en utilisant Node.js avec le framework Express pour fournir une API RESTful pour les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les employés et les tâches, ainsi que la gestion des assignations entre eux.

## diagramme de classe UML

![Diagramme de Classe](assets/images/diagramme_class.png)

## Structure du Projet

Le projet est divisé en plusieurs fichiers principaux :

- **`Employes.js`** : Définit la classe `Employes` pour gérer les employés.
- **`Taches.js`** : Définit la classe `Taches` pour gérer les tâches.
- **`Assignation.js`** : Définit la classe `Assignation` pour gérer les assignations de tâches aux employés.
- **`index.js`** : Configure le serveur Express et expose les routes API pour tester les fonctionnalités.

## Installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/Fatoumacisse99/gestion-projet-express.git
   cd gestion-projet-express
   ```
## installation des dependances 
```bash
npm install
```
## execution
```bash
npm start