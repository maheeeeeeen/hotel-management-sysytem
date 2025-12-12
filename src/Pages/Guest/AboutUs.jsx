import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaStar, FaAward, FaUsers, FaHotel } from "react-icons/fa";
import { MdOutlineHotelClass } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2, ParagraphText } from "../../Components/Typography";
import img1 from "../../assets/hotelSlider1.jpg";
import img2 from "../../assets/hotelSlider2.jpg";
import img3 from "../../assets/hotelSlider3.jpg";
import { AboutService } from "../../services/AboutService";
import { InfoCard, InfoCard2 } from "../../Components/Cards";
import { InfoService } from "../../services/infoService";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function AboutUs() {
   const [images, setimages] = useState([]);
   const imageservice = new AboutService();
 
  



  const [content, setContent] = useState([]);
  const service = new AboutService();
  const [info, setInfo] = useState([]);
  const infoService = new InfoService();
   async function getAlImages() {
     try {
       const response = await imageservice.getAllGallery();
       setimages(response);
       console.log("images", response);
     } catch (error) {
       console.log(error);
     }
   }
  async function GetAllContent() {
    try {
      const res = await service.GetAllContent();
      console.log("About info", res);
      // console.log("CoreValuessss ", res.coreValues.title);
      setContent(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetallInfo() {
    try {
      const res = await infoService.AllInfo();
      setInfo(res);
    } catch (error) {
      console.log("Info errorr", error);
    }
  }
  useEffect(() => {
    GetAllContent();
    GetallInfo();
    getAlImages()
  }, []);

  const iconMap = {
    Mail: {
      icon: Mail,
      color: "from-blue-600 to-blue-700", // Trust & communication
    },
    Phone: {
      icon: Phone,
      color: "from-green-600 to-emerald-700", // Growth & connection
    },
    Location: {
      icon: MapPin,
      color: "from-purple-600 to-violet-700", // Creativity & uniqueness
    },
    Clock: {
      icon: Clock,
      color: "from-amber-600 to-orange-700", // Energy & urgency
    },
  };
  return (
    <div className="bg-gray-50">
      <TopHeroSection backgroundImage={img1}>
        <div className="text-center">
          <Heading1 text="About Us" />
          <ParagraphText
            className="text-white font-bold"
            text="Where luxury meets comfort, and every moment becomes a cherished
            memory"
          />
        </div>
      </TopHeroSection>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Luxury Star Hotel
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nestled in the heart of the city, Luxury Star Hotel has been
              synonymous with unparalleled hospitality and sophistication since
              2013. Our commitment to excellence has made us the preferred
              choice for discerning travelers worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {info.map((m) => {
              const iconData = iconMap[m.icon];

              if (!iconData) return null; // prevents crash if api sends invalid icon

              const IconComponent = iconData.icon;
              const linearColor = iconData.color;

              return (
                <InfoCard
                  key={m._id}
                  icon={<IconComponent className="w-6 h-6" />}
                  title={m.title}
                  description={m.description}
                  contact={m.value}
                  color={linearColor}
                />
              );
            })}
          </div>
          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group"
              >
                <img
                  src={image.ImageUrl}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Premier Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <TiTick className="text-green-500 text-xl shrink-0" />
                  <span className="text-gray-700">{feature.amenities}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.map(
                (value, index) =>
                  value.coreValues && ( // render only if coreValues exists
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {value.coreValues.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.coreValues.description}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
