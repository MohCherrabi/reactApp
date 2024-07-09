const insState = {
  db: [
    {
      id:1,
      name: "Tv",
      src: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      dis: "Disponible",
    },
    {
      id:2,
      name: "PC",
      src: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      dis: "Disponible",
    },
    {
      id:3,
      name: "IBAD",
      src: 'https://i.ibb.co/bLB646Z/red-beanie.png',
      dis: "Non disponible",
    },
  ],
};
const reducer = (state = insState, action) => {
  switch (action.type) {
    case "ADD":
      return { db: [...state.db, action.payload] }
    case "DELETE":
      return {db:[...state.db.filter((el)=>el.name.toLocaleLowerCase() !== action.payload.toLocaleLowerCase())]}
    case "UPDATE":
      const index = state.db.findIndex((el)=> el.id === action.payload.id);
      state.db[index].name = action.payload.name;
      state.db[index].src = action.payload.src;
      state.db[index].dis = action.payload.dis;
      return {db:[...state.db]}
    default:
      return state;
  }
};
export default reducer;
