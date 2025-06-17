import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ChoppiLogoShort from '../assets/logos/choppi-logo-short.svg';

export const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-16 pb-24 md:pt-12 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="Logo Choppi"
              src={ChoppiLogoShort}
              className="mb-10 mx-auto"
              width={170}
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tus compras entregadas <span className="text-choppi-orange">frescas y rápidas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Compra fácilmente en tu supermercado favorito, añade tus productos al carrito y recibe tus compras entregadas por nuestros Choppers dedicados, ya sea para ti o para enviar a tus familiares, ¡incluso desde el extranjero!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="choppi-button"
                color="primary"
                size="lg"
                radius="full"
                variant="solid"
                onPress={() => {
                  // Detectar el sistema operativo
                  const userAgent = navigator.userAgent || navigator.vendor;
                  let storeUrl = "https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share"; // URL por defecto (ej: Play Store web o tu Play Store link)
              
                  // Detectar iOS (iPhone, iPad, iPod)
                  // La comprobación !window.MSStream es para evitar falsos positivos en IE/Edge viejos
                  if (/iPad|iPhone|iPod/.test(userAgent)) {
                    storeUrl = "https://apps.apple.com"; // **REEMPLAZA con la URL de tu app en la App Store**
                  }
                  // Detectar Android
                  else if (/Android/.test(userAgent)) {
                    storeUrl = "https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share"; // **REEMPLAZA con la URL de tu app en la Play Store**
                  }
                  // Si no es ni iOS ni Android (ej: escritorio Windows, Linux, etc.), se usará la storeUrl por defecto (Play Store web link es común)
              
                  // Abrir la URL en una nueva pestaña
                  window.open(storeUrl, "_blank");
                }}
              >
                <Icon icon="lucide:shopping-bag" className="mr-2" width={20} />
                Empieza a comprar
              </Button>
              <Button
                className="choppi-button"
                color="secondary"
                size="lg"
                radius="full"
                variant="bordered"
                onPress={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon icon="lucide:info" className="mr-2" width={20} />
                Cómo funciona
              </Button>
            </div>

            {/* <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${i}`}
                    alt="Avatar de usuario"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} icon="lucide:star" className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Confiado por más de 10,000 clientes satisfechos</p>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 app-screenshot">
                <img
                  src="https://img.freepik.com/free-photo/close-up-hand-holding-organic-tangerine_23-2149295018.jpg?ga=GA1.1.1932774089.1747504218&semt=ais_hybrid&w=740"
                  alt="Captura de pantalla de la app Choppi"
                  className="w-full h-[45rem] object-cover"
                />

                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg flex items-center">
                  <Icon icon="lucide:clock" className="text-choppi-orange mr-2" />
                  <span className="font-medium">Entrega en 45 min</span>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg flex items-center">
                  <Icon icon="lucide:shopping-cart" className="text-choppi-orange mr-2" />
                  <span className="font-medium">10+ Cadenas de Supermercados</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};