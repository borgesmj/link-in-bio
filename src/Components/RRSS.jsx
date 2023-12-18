import React from "react";
import Twitter from "../Icons/Twitter";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import WhatsApp from "../Icons/WhatsApp";

const RRSS = () => {
  const rrssLinks = [
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/Mborges/",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/mjbm19/",
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com/Migu3l_oN",
    },
    {
      icon: <WhatsApp />,
      link: "https://api.whatsapp.com/send?phone=573205092268",
    },
  ];
  return (
    <div className="h-[10%] py-2 mt-2 flex justify-around items-center fixed bottom-0 left-0 right-0 w-full md:w-1/2 lg:w-1/3 mx-auto my-4">
      {rrssLinks.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer" className="border-solid border-white border-[4px] rounded-full p-2 bg-[#61d1f3] hover:bg-white">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default RRSS;
