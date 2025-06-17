import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const steps = [
  {
    icon: "lucide:search",
    title: "Navega y añade al carrito",
    description: "Compra en tu mercado favorito con inventario y precios en tiempo real.",
    color: "bg-choppi-orange/10",
    textColor: "text-choppi-orange",
    delay: 0.1,
  },
  {
    icon: "lucide:credit-card",
    title: "Paga desde cualquier lugar",
    description: "Pagos seguros con múltiples opciones nacionales e internacionales.",
    color: "bg-choppi-red-orange/10",
    textColor: "text-choppi-red-orange",
    delay: 0.2,
  },
  {
    icon: "lucide:map",
    title: "Espera tu pedido",
    description: "Sigue tu pedido con GPS en vivo y comunicación directa con tu Chopper a través de la app.",
    color: "bg-choppi-orange/10",
    textColor: "text-choppi-orange",
    delay: 0.3,
  },
  {
    icon: "lucide:package",
    title: "Recibe tu mercado",
    description: "Recibe tus compras en la puerta con verificación y garantía de calidad.",
    color: "bg-choppi-green/10",
    textColor: "text-choppi-green",
    delay: 0.4,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choppi hace que las compras de supermercado sean simples, eficientes y accesibles para todos, ya sea que compres para ti o para tu familia.
          </p>
          <div className="section-divider mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon icon={step.icon} className={`${step.textColor} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <Icon icon="lucide:chevron-right" className="text-gray-300 w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-choppi-orange/10 mb-6">
            <span className="px-4 py-1 text-sm font-medium text-choppi-orange">
              Simple y Rápido
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            De la selección a la entrega en minutos, no horas
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestros Choppers seleccionan meticulosamente los productos más frescos y los entregan directamente a tu puerta, ahorrándote tiempo y molestias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};