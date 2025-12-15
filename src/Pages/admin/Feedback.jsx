import React, { useEffect, useState } from "react";

import { Heading2, ParagraphText } from "../../Components/Typography";
import { FaStar } from "react-icons/fa";
import Loader from "../../Components/Loader";
import { FeedbackService } from "../../services/FeedbackService";

export default function Feedback() {
  const [Feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
  
  const service = new FeedbackService();
  async function getllFeedback() {
    try {
      const res = await service.getllFeedback();
      console.log(res);
      setFeedbacks(res);
      setLoading(false)
    } catch (error) {
      console.log("error ", error);
    }
  }
  useEffect(() => {
    getllFeedback();
  }, []);
   if (loading) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <Loader />
    </div>
  );
}

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className="px-6 py-4  border-gray-200 flex items-center">
        <div>
          <Heading2 text="Feedbacks" />
          <ParagraphText text="All Feedbacks" />
        </div>

        {/* <Link to="/addf" className="ml-auto">
          <Button text="Add f" />
        </Link> */}
      </div>

      {/* Grey Background Box */}
      <div className=" rounded-lg ">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  S.no
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Comment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Feedbacks.map((f, index) => (
                <tr key={f._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {f.guest?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: f.rating }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {f.comment}
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
