import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';

export const WhatIsChoppi: React.FC = () => {
  return (
    <section id="what-is-choppi" className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=500&u=choppi2" 
                alt="Choppi Mobile App" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="choppi-section-header">SOLUCIÓN</p>
            <h2 className="section-title">Choppi: Tu aliado para ahorrar tiempo</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 mb-4">
              Con Choppi, no solo recibes tu mercado en casa. Optimizamos tus compras, ahorrándote tiempo y esfuerzo.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Además, para los venezolanos en el extranjero, Choppi es el puente que te permite enviar alimentos a tus seres queridos de forma fácil, segura y con la tranquilidad de que recibirán productos de calidad.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="feature-icon-wrapper">
                  <Icon icon="lucide:check-circle" className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Curaduría experta</h3>
                  <p className="text-gray-600">Seleccionamos los mejores productos para ti.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="feature-icon-wrapper">
                  <Icon icon="lucide:lightbulb" className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Compras inteligente</h3>
                  <p className="text-gray-600">Podrás comparar precios entre mercados en tiempo real y encontrarás la totalidad de productos que necesitas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="feature-icon-wrapper">
                  <Icon icon="lucide:heart" className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Conexión emocional</h3>
                  <p className="text-gray-600">Acercamos a los venezolanos en el extranjero a sus familiares entregando insumos de calidad.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};