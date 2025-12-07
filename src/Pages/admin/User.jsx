import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

// Icons (you might need to replace with different icon library)
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Heading2, ParagraphText } from "../../Components/Typography";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default function Users() {
  const [users, setusers] = useState([])
  const service = new AuthService()
  async function getAllUser() {
    try {
      const response = await service.getAllUsers()
      setusers(response)
      console.log("userss",response)
    } catch (error) {
      console.log("Errror" , error)
    }
    
  }
  useEffect(()=>{
    getAllUser()
  },[])
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className="px-6 py-4  border-gray-200 flex items-center">
        <div>
          <Heading2 text="Users" />
          <ParagraphText text="All user" />
        </div>

      </div>

      {/* Grey Background Box */}
      <div className=" rounded-lg ">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                 Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Email
                </th>
               
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((u, index) => (
                <tr key={u._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {index+1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {u.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {u.email }
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {u.city? u.city : "no city"}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {u.number ? u.number : "no number provided"}
                  </td>
                 
                 
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
  );
}
