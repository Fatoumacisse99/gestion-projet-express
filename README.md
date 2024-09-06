# Gestion de Projet - Application de Gestion des Employés et des Tâches

## Introduction

Cette application permet de gérer les employés, les tâches et leurs assignations dans un contexte de gestion de projet. Elle est construite en JavaScript en utilisant Node.js avec le framework Express pour fournir une API RESTful pour les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les employés et les tâches, ainsi que la gestion des assignations entre eux.

## diagramme de classe UML

![Diagramme de Classe](assets/images/diagramme_class.png)

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

1. **Node.js** : Version 14 ou supérieure.

   - Vous pouvez télécharger Node.js depuis [nodejs.org](https://nodejs.org/).
   - Vérifiez l'installation avec :
     ```bash
     node -v
     ```

2. **npm** (Node Package Manager) : Inclus avec Node.js.

   - Vérifiez l'installation avec :
     ```bash
     npm -v
     ```

3. **Git** (optionnel, mais recommandé pour le versionnement).
   - Vous pouvez télécharger Git depuis [git-scm.com](https://git-scm.com/).
   - Vérifiez l'installation avec :
     ```bash
     git --version
     ```

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
```
