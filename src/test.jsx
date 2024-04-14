import React, { useState } from "react";
import trashIcon from './assets/trash.svg';

function TestS() {
  // this variable will be used inside (map) later to decide which style will be rendered
  let [count] = useState(0);

  const TABLE_HEAD = ["Name","Age","Seniority","Tools"];
  const users = [
    {
      name: "John",
      age: 23,
      seniority: "Junior",
      eligible: true
    },
    {
      name: "Marie",
      age: 60,
      seniority: "SemiSenior",
      eligible: true
    },
    {
      name: "David",
      age: 30,
      seniority: "Junior",
      eligible: true
    },
    {
      name: "Sarah",
      age: 20,
      seniority: "Senior",
      eligible: true
    }
  ];

  return (
    <div className="bg-cyan-900 flex justify-center items-center h-screen">
          <table className="shadow-2xl font-mono border-2 border-cyan-200 w-9/12">
            <thead className="text-white">
            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
            {
                TABLE_HEAD.map((title, id)=>{
                    return(<th className="py-3 bg-cyan-800">{title}</th>)
                })
              }  
            </tr>
            </thead>
            <tbody className="text-cyan-900">
            {
                users.map((user,id)=>{
                    const _bg_ = id%2==0?"bg-cyan-200":"bg-cyan-400";
                    return(
                        <tr className={`${_bg_} cursor-pointer duration-300`}>
                            <td className="py-3 px-6 text-left">{user.name}</td>
                            <td className="py-3 px-6 text-right">{user.age}</td>
                            <td className="py-3 px-6 ">{user.seniority}</td>
                            <td className="py-3 px-6">
                                <img src={trashIcon} alt="trashIcon"/>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
          </table>
    </div>

  )
}

export default TestS;