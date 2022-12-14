import profile from "../icons/profile.svg";
import "./worker.css";
import { useContext, useState } from "react";
import { ContextData } from "../Context/Context";
import editIcon from "../icons/editing.png";
import deleteIcon from "../icons/delete.svg";

function Worker(){
    const {editItem, deleteItem, setAdd, add, worker, workers, handleInput, handleRasm, handleSend} = useContext(ContextData);
    const [search, setSearch] = useState("");
    return(
        <div className="WorkerPage">
            <div className="WorkerPageTop">
                <div className="PageDescription">
                    <p>Weekly sumup</p>
                    <p>Get summary of your weekly online transactions here.</p>
                </div>
                <div className="ProfileDiv">
                    <figure>
                        <img src={profile} alt="profile" />
                    </figure>
                </div>
            </div>
            <div className="MiddleWorkerPart">
                {add ? <div></div> : <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search" type="text"/>}
                <button className="ActiveButton" onClick={()=>setAdd(!add)}>{add ? "Workers" : "Add"}</button>
            </div>
            {add ?
                <div className="AddPage">
                    <div className="Form">
                        <form onSubmit={(e)=>handleSend(e)}>
                            <p>Username</p><input type="text" name="username" value={worker.username} placeholder="Enter your Username" onInput={(e)=>handleInput(e)}/>
                            <p>Password</p><input type="text" name="password" value={worker.password} placeholder="Enter your Password" onInput={(e)=>handleInput(e)}/>
                            <p>Image</p><input type="file" name="picture" placeholder="Image" onInput={(e)=>handleRasm(e)}/>
                            <button className="SubmitButton">Submit</button>
                        </form>
                    </div>
                </div> 
                :
                <div className="WorkerList">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>image</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Activ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            workers.filter((elem)=>{
                                if(elem.username === ""){
                                    return elem;
                                }else if(elem.username.toLowerCase().includes(search.toLowerCase()) || elem.id.toString().toLowerCase().includes(search.toLowerCase())){
                                    return elem;
                                }
                            }).map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td className="PictureTd">
                                        <figure>
                                            <img src={item.picture} alt="" />
                                        </figure>
                                    </td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td className="active">
                                        <figure onClick={()=>editItem(item)}>
                                            <img src={editIcon} alt="edit" />
                                        </figure>
                                        <figure onClick={()=>deleteItem(item)}>
                                            <img src={deleteIcon} alt="delete" />
                                        </figure>
                                    </td>
                                </tr>
                            ))
}
                    </tbody>
                </table>
            </div>
            }
            
        </div>
    )
}
export default Worker;