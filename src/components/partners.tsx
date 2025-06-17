import React from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

export const Partners: React.FC = () => {
  // In a real implementation, these would be actual partner logos
  const partners = [
    { name: "Mercato Market", delay: 0.1, logo: "https://ugc.production.linktr.ee/c2e9e965-31e4-45f5-b064-95bbc06b5aae_IMG-8865.jpeg?io=true&size=avatar-v3_0" },
    { name: "Plaza's", delay: 0.2, logo: "https://vallearriba.elplazas.com/static/frontend/LogosCorp/luma-child/es_VE/images/logoPlazas.png" },
    { name: "Locatel", delay: 0.3, logo: "https://lh6.googleusercontent.com/proxy/ZVtmGmclcmTh_VlxXsdHmwOaYWBJXCznBvr2BfyATcgTs4NVnEpqF-Q_GKyZKWn8O50ilPjdtB2-rLT3WlzXLfQ2zObGMHPnoWADreVvpZhgx32zSu77-JY" },
    // { name: "Supermercado D", delay: 0.4 },
    // { name: "Supermercado E", delay: 0.5 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nuestros aliados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos hemos asociado con los mejores supermercados para ofrecerte la más amplia selección de productos.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 w-40 h-40 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: partner.delay }}
            >
              <div className="text-center">
                <Image
                  alt="HeroUI hero Image"
                  src={partner.logo}
                  className="mb-10 mx-auto"
                  width={170}
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
                />
               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};