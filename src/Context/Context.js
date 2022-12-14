import React, { useState } from "react";

export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [add, setAdd] = useState(false);
    const [worker, setWorker] = useState(
        {
            id: "",
            username: "",
            password: "",
            picture: "",
        }
    )

    const [workers, setWorkers] = useState([]);

    let handleInput = (e) => {
        setWorker({
          ...worker,
          [e.target.name]: e.target.value,
        });
      };
      let handleRasm = (e) => {
        setWorker({
          ...worker,
          picture: URL.createObjectURL(e.target.files[0]),
        });
      };
      function clearInput(){
        setWorker({
            id: "",
            username: "",
            password: "",
            picture: "",
        })
      }
      function handleSend(e){
        e.preventDefault();
        if(worker.id === ""){
          setWorkers([...workers, {...worker, id: new Date().getTime()}]);
          
        }else{
          setWorkers(
            workers.map((item)=>(
              item.id === worker.id ? worker : item
            ))
          )
        }
        clearInput();
        setAdd(!add);
    }

    function deleteItem(item){
        setWorkers(workers.filter((elem)=>{return item.id !== elem.id}))
    }
    function editItem(item){
      setAdd(!add);
      setWorker({
        id: item.id,
        username: item.username,
        password: item.password,
      })
      clearInput();
    }
     return(
        <ContextData.Provider value={{editItem, deleteItem, setAdd, add, workers, worker, handleInput, handleRasm, handleSend}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;