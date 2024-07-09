const initState = {
  db: [
    { id: 1, marque: "BMW" },
    { id: 2, marque: "DACIA" },
    { id: 3, marque: "AUDI" },
  ],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "Ajouter":
      return { db: [...state.db, action.payload] };
    case "Supprimer":
      return {
        db: state.db.filter((e) => {
          return e.id !== action.payload;
        }),
      };
    case "Modifier":
      return {};
    default:
      return state;
  }
  return state;
};
export default reducer;
