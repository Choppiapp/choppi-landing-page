import React from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import AppImage from '../assets/app.png';


export const AppShowcase: React.FC = () => {
  return (
    <section id="app" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">

              <div className="relative">
                <img
                  src={AppImage}
                  alt="Interfaz de la App Choppi"
                  className="w-full rounded-2xl shadow-xl border border-gray-100 app-screenshot mt-16"
                />

                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="bg-choppi-orange rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon icon="lucide:shopping-bag" className="text-white w-8 h-8" />
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="bg-choppi-green rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon icon="lucide:truck" className="text-white w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 lg:pl-16 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-choppi-orange/10 mb-6">
              <span className="px-4 py-1 text-sm font-medium text-choppi-orange">
                Aplicación Móvil
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Compra con la app más inteligente e intuitiva del país
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choppi hace que las compras de supermercado sean más sencillas, podrás cambiar productos no disponibles en tiempo real mientras tu Chopper esté en el mercado, y recibir el pedido tal como lo quieres.
            </p>

            <div className="space-y-6 mb-16">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-choppi-orange/10 rounded-full p-2">
                    <Icon icon="lucide:check" className="text-choppi-orange w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Interfaz amigable</h3>
                  <p className="text-gray-600">Diseño intuitivo que hace que encontrar y ordenar productos sea rápido y fácil.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-choppi-orange/10 rounded-full p-2">
                    <Icon icon="lucide:check" className="text-choppi-orange w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Actualizaciones en tiempo real</h3>
                  <p className="text-gray-600">Podrás monitorear tu pedido en vivo y realizar cambios de productos no disponibles.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-choppi-orange/10 rounded-full p-2">
                    <Icon icon="lucide:check" className="text-choppi-orange w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Experiencia personalizada</h3>
                  <p className="text-gray-600">Guarda favoritos, crea listas de compras y recibe recomendaciones basadas en tus preferencias.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-10 justify-center">
              <Image
                alt="HeroUI hero Image"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                style={{ cursor: 'pointer' }}
                className="w-xs"
                width={150}
                onClick={() => window.open("https://apps.apple.com", "_blank")}
              />

              <Image
                alt="HeroUI hero Image"
                src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png"
                style={{ cursor: 'pointer' }}
                className="w-xs"
                width={170}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};