import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "lucide:shopping-cart",
    title: "Múltiples supermercados",
    description: "Compra en todas tus locales favoritos en un solo lugar con inventario en tiempo real.",
    color: "text-choppi-orange",
    delay: 0.1,
  },
  {
    icon: "lucide:clock",
    title: "Entrega rápida",
    description: "Recibe tus compras en la puerta de tu casa en menos de 60 minutos.",
    color: "text-choppi-red-orange",
    delay: 0.2,
  },
  {
    icon: "lucide:tag",
    title: "Encuentra los mejores precios",
    description: "Compara precios entre mercados y siempre obtén las mejores ofertas disponibles.",
    color: "text-choppi-orange",
    delay: 0.3,
  },
  {
    icon: "lucide:map-pin",
    title: "Seguimiento en vivo",
    description: "Rastrea tu pedido en tiempo real y comunícate directamente con tu Chopper.",
    color: "text-choppi-red-orange",
    delay: 0.4,
  },
  {
    icon: "lucide:shield-check",
    title: "Calidad garantizada",
    description: "Todos nuestros Choppers son entrenados por nosotros, recibirás productos frescos, o te devolvemos tu dinero, sin preguntas.",
    color: "text-choppi-green",
    delay: 0.5,
  },
  {
    icon: "lucide:credit-card",
    title: "Pagos seguros",
    description: "Múltiples opciones de pago con checkout seguro e historial de transacciones.",
    color: "text-choppi-green",
    delay: 0.6,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Choppi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos revolucionando las compras de supermercado con una experiencia perfecta desde la selección hasta la entrega.
          </p>
          <div className="section-divider mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Card className="border border-gray-100 h-full">
                <CardBody className="p-6">
                  <div className="feature-icon w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon icon={feature.icon} className={`${feature.color} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};