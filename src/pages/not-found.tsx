import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const NotFound: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-choppi-orange/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="lucide:alert-circle" className="text-choppi-orange w-12 h-12" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Página No Encontrada</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                as={Link}
                to="/"
                color="primary"
                variant="solid"
                radius="full"
                size="lg"
                className="px-8"
              >
                Volver al Inicio
              </Button>
              <Button 
                as={Link}
                to="/centro-de-ayuda"
                color="primary"
                variant="flat"
                radius="full"
                size="lg"
                className="px-8"
              >
                Centro de Ayuda
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};