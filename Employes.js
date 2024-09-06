class Employes {
  static #tabEmployes = [];

  static createEmploye({ nom, prenom, email, poste, dateEmbauche, statut }) {
    const employe = { nom, prenom, email, poste, dateEmbauche, statut };
    Employes.#tabEmployes.push(employe);
    return employe;
  }

  static getEmploye(nom) {
    return Employes.#tabEmployes.find(emp => emp.nom === nom) || null;
  }

  static editEmploye(nom, updatedData) {
    const employeIndex = Employes.#tabEmployes.findIndex(emp => emp.nom === nom);
    if (employeIndex !== -1) {
      Employes.#tabEmployes[employeIndex] = { ...Employes.#tabEmployes[employeIndex], ...updatedData };
      return Employes.#tabEmployes[employeIndex];
    }
    return null;
  }

  static deleteEmploye(nom) {
    const employeIndex = Employes.#tabEmployes.findIndex(emp => emp.nom === nom);
    if (employeIndex !== -1) {
      return Employes.#tabEmployes.splice(employeIndex, 1)[0];
    }
    return null;
  }
}

export { Employes };
