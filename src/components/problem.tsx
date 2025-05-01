import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="choppi-section-header">PROBLEMA</p>
            <h2 className="section-title">Supermercado y tiempo: un desafío moderno</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 mb-4">
              Ir al supermercado es una tarea que consume valioso tiempo. Las largas filas, el tráfico y la necesidad de cargar las compras pueden demandar mucho tiempo para las personas que trabajan y tienen una vida ocupada.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Además, 8 millones de venezolanos en el extranjero no disponen de una solución rápida, segura y eficaz para enviar mercados a sus familiares en Venezuela.
            </p>
            
            <Button 
              as="a"
              href="#what-is-choppi"
              variant="flat"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              className="mt-4"
            >
              Conoce más
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/food?w=600&h=600&u=choppi5" 
                alt="Person shopping in supermarket" 
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};