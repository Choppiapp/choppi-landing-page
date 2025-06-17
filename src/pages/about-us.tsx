import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Icon } from "@iconify/react";
import { Image } from '@heroui/react'
import LogoChoppiOrangeBackground from '../assets/logos/choppi-logo-orange-background.png';

export const AboutUs: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Sobre nosotros" 
        description="Conoce más sobre Choppi y nuestra misión de transformar la experiencia de compra de supermercado en Venezuela."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Choppi nació en 2022 con una misión clara: hacer que las compras de supermercado sean más fáciles, rápidas y convenientes para todos los venezolanos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Fundada por un equipo de emprendedores apasionados por la tecnología y la experiencia del cliente, Choppi surgió como respuesta a los desafíos que enfrentaban los consumidores al hacer sus compras de supermercado tradicionales.
              </p>
              <p className="text-lg text-gray-600">
                Desde entonces, hemos crecido para convertirnos en la plataforma líder de entrega de comestibles en Venezuela, conectando a miles de clientes con sus tiendas favoritas y ofreciendo un servicio excepcional a través de nuestra red de compradores dedicados.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              
              <Image 
                src={LogoChoppiOrangeBackground}
                alt="Equipo Choppi"
                width={500}
                className="w-full rounded-xl shadow-lg relative z-10 lg:w-4/5 mx-auto my-auto"
              />
            </motion.div>
          </div>
          
          <div className="mt-24">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En Choppi, nuestros valores fundamentales guían todo lo que hacemos, desde cómo desarrollamos nuestra plataforma hasta cómo interactuamos con nuestros clientes y socios.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "lucide:heart",
                  title: "Pasión por el Cliente",
                  description: "Ponemos a nuestros clientes en el centro de todo lo que hacemos, esforzándonos por superar sus expectativas en cada interacción.",
                  delay: 0.4
                },
                {
                  icon: "lucide:shield",
                  title: "Calidad y Frescura",
                  description: "Nos comprometemos a entregar productos de la más alta calidad, seleccionados con el mismo cuidado que usarías tú mismo.",
                  delay: 0.5
                },
                {
                  icon: "lucide:clock",
                  title: "Eficiencia",
                  description: "Valoramos tu tiempo y trabajamos constantemente para hacer que el proceso de compra sea lo más rápido y eficiente posible.",
                  delay: 0.6
                },
                {
                  icon: "lucide:users",
                  title: "Comunidad",
                  description: "Creemos en construir relaciones sólidas con nuestros clientes, compradores y socios minoristas para crear una comunidad próspera.",
                  delay: 0.7
                },
                {
                  icon: "lucide:lightbulb",
                  title: "Innovación",
                  description: "Buscamos constantemente nuevas formas de mejorar nuestra plataforma y servicios para adaptarnos a las necesidades cambiantes.",
                  delay: 0.8
                },
                {
                  icon: "lucide:leaf",
                  title: "Sostenibilidad",
                  description: "Nos esforzamos por operar de manera responsable, minimizando nuestro impacto ambiental y promoviendo prácticas sostenibles.",
                  delay: 0.9
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                >
                  <div className="bg-choppi-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon icon={value.icon} className="text-choppi-orange w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};