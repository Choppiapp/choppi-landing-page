import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';

export const WhyNow: React.FC = () => {
  const reasons = [
    {
      icon: "lucide:trending-up",
      title: "TAM",
      description: "El mercado total disponible para Choppi incluye a más de 8 millones de venezolanos en el extranjero y la población local que busca optimizar su tiempo."
    },
    {
      icon: "lucide:smartphone",
      title: "SAM",
      description: "Nuestro mercado accesible incluye usuarios con smartphones y acceso a internet, que representan más del 70% de la población urbana en Venezuela."
    },
    {
      icon: "lucide:target",
      title: "Lo que esperamos obtener",
      description: "Proyectamos capturar inicialmente un 5% del mercado, con un crecimiento sostenido del 15% mensual durante el primer año de operaciones."
    }
  ];

  return (
    <section id="why-now" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="choppi-section-header">OPORTUNIDAD DE MERCADO</p>
          <h2 className="section-title">Basado en el mercado venezolano</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <Icon icon={reason.icon} className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                as="a"
                href="#investor-cta"
                variant="flat"
                color="primary"
                endContent={<Icon icon="lucide:arrow-down" />}
                className="mt-4"
              >
                Contáctanos
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/dashboard?w=600&h=500&u=choppi4" 
                alt="Market Analysis" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};