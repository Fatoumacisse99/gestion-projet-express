class Taches {
  static #tabTaches = [];

  static createTask({ nom, description, dateDebut, dateFin, statut, priorite }) {
    const tache = { nom, description, dateDebut, dateFin, statut, priorite };
    Taches.#tabTaches.push(tache);
    return tache;
  }

  static getTask(nom) {
    return Taches.#tabTaches.find(tsk => tsk.nom === nom) || null;
  }

  static editTask(nom, updatedData) {
    const tacheIndex = Taches.#tabTaches.findIndex(tsk => tsk.nom === nom);
    if (tacheIndex !== -1) {
      Taches.#tabTaches[tacheIndex] = { ...Taches.#tabTaches[tacheIndex], ...updatedData };
      return Taches.#tabTaches[tacheIndex];
    }
    return null;
  }

  static deleteTask(nom) {
    const tacheIndex = Taches.#tabTaches.findIndex(tsk => tsk.nom === nom);
    if (tacheIndex !== -1) {
      return Taches.#tabTaches.splice(tacheIndex, 1)[0];
    }
    return null;
  }
}

export { Taches };
