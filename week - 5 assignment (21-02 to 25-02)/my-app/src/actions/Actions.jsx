export const addEntry=(entry)=>{
    return {type:"ADD_ENTRY",
    entry:entry}
}

export const delEntry=(id)=>{
    return {type:"DEL_ENTRY",
    id:id}
}

export const deleteAll=(id)=>{
    return {type:"DEL_ALL",
    id:id}
}

// export const updateEntry = (id) => {
//     return {
//       type: "UPDATE_ENTRY",
//       id:id
//     };
//   };

// export const edit = (id) => {
//     return {
//       type: "EDIT",
//       id: id,
//     };
//   };
//   export const editval = (id, itemval, calorieval) => {
//     return {
//       type: "EDITVAL",
//       id: id,
//       itemval: itemval,
//       calorieval: calorieval,
//     };
//   };
