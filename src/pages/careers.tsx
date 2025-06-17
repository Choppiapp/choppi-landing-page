import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const Careers: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      title: "Desarrollador Frontend",
      department: "Tecnología",
      location: "Caracas, Venezuela",
      type: "Tiempo Completo",
      description: "Estamos buscando un desarrollador frontend experimentado para unirse a nuestro equipo y ayudar a mejorar nuestra plataforma web y aplicaciones móviles."
    },
    {
      title: "Gerente de Operaciones",
      department: "Operaciones",
      location: "Caracas, Venezuela",
      type: "Tiempo Completo",
      description: "Buscamos un gerente de operaciones para supervisar nuestras operaciones diarias y garantizar un servicio eficiente y de alta calidad."
    },
    {
      title: "Especialista en Marketing Digital",
      department: "Marketing",
      location: "Remoto",
      type: "Tiempo Completo",
      description: "Únete a nuestro equipo de marketing para desarrollar y ejecutar estrategias digitales que impulsen el crecimiento de Choppi."
    },
    {
      title: "Coordinador de Compradores",
      department: "Operaciones",
      location: "Caracas, Venezuela",
      type: "Tiempo Completo",
      description: "Coordina y gestiona nuestro equipo de compradores para garantizar entregas puntuales y un servicio excepcional."
    }
  ];

  const benefits = [
    {
      icon: "lucide:trending-up",
      title: "Crecimiento Profesional",
      description: "Oportunidades de desarrollo y crecimiento en una empresa en expansión."
    },
    {
      icon: "lucide:clock",
      title: "Horario Flexible",
      description: "Equilibrio entre vida laboral y personal con horarios adaptables."
    },
    {
      icon: "lucide:users",
      title: "Equipo Dinámico",
      description: "Trabaja con profesionales apasionados y talentosos."
    },
    {
      icon: "lucide:award",
      title: "Reconocimiento",
      description: "Valoramos y reconocemos el esfuerzo y los logros de nuestro equipo."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Carreras en Choppi" 
        description="Únete a nuestro equipo y ayúdanos a transformar la experiencia de compra de supermercado en Venezuela."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Trabajar en Choppi?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En Choppi, estamos construyendo el futuro del comercio minorista de alimentos. Únete a nosotros y sé parte de una empresa innovadora con un gran impacto en la vida cotidiana de las personas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-choppi-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon icon={benefit.icon} className="text-choppi-orange w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Posiciones Abiertas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora nuestras oportunidades actuales y encuentra el rol perfecto para ti.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (0.1 * index) }}
              >
                <Card className="border border-gray-100">
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button 
                          color="primary"
                          variant="solid"
                          radius="full"
                          className="min-w-[120px]"
                        >
                          Aplicar
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No ves una posición adecuada para ti?</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Siempre estamos buscando personas talentosas para unirse a nuestro equipo. Envíanos tu currículum y te tendremos en cuenta para futuras oportunidades.
              </p>
              <Button 
                color="primary"
                variant="flat"
                radius="full"
                size="lg"
              >
                Enviar Currículum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};