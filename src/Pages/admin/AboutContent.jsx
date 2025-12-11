import React, { useEffect, useState } from "react";
import { InfoService } from "../../services/infoService";
import { AdminCard, InfoCard } from "../../Components/Cards";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Heading2, ParagraphText } from "../../Components/Typography";
import { EditInfoModal } from "../../Components/Modal";

export default function AboutContent() {
  const [info, setInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const infoService = new InfoService();

  async function GetallInfo() {
    try {
      const res = await infoService.AllInfo();
      setInfo(res);
    } catch (error) {
      console.log("Info errorr", error);
    }
  }

  useEffect(() => {
    GetallInfo();
  }, []);

  const iconMap = {
    Mail: { icon: Mail, color: "from-blue-600 to-blue-700" },
    Phone: { icon: Phone, color: "from-green-600 to-emerald-700" },
    Location: { icon: MapPin, color: "from-purple-600 to-violet-700" },
    Clock: { icon: Clock, color: "from-amber-600 to-orange-700" },
  };

  // 👉 when user clicks edit
  const handleEdit = (data) => {
    setSelectedInfo(data); // load card data
    setOpenModal(true); // open modal
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className="px-6 py-4  border-gray-200 flex items-center">
        <div>
          <Heading2 text="Contact Information" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {info.map((m) => {
          const iconData = iconMap[m.icon];
          if (!iconData) return null;

          const IconComponent = iconData.icon;
          const linearColor = iconData.color;

          return (
            <AdminCard
              key={m._id}
              icon={<IconComponent className="w-6 h-6" />}
              title={m.title}
              description={m.description}
              contact={m.value}
              onClick={() => handleEdit(m)}
              color={linearColor}
            />
          );
        })}

        <EditInfoModal
          open={openModal}
          data={selectedInfo}
          onClose={() => setOpenModal(false)}
          onSave={async (updatedValues) => {
            await infoService.updateInfo(selectedInfo._id, updatedValues);
            setOpenModal(false);
            GetallInfo(); // refresh data
          }}
        />
      </div>
    </div>
  );
}
