import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PressRelease {
  title: string;
  date: string;
  summary: string;
  image: string;
}

export const Press: React.FC = () => {
  const pressReleases: PressRelease[] = [
    {
      title: "Choppi anuncia expansión a nuevas ciudades en Venezuela",
      date: "15 de mayo, 2023",
      summary: "Choppi, la plataforma líder de entrega de comestibles, anuncia su expansión a cinco nuevas ciudades en Venezuela, llevando su servicio innovador a más consumidores.",
      image: "https://img.heroui.chat/image/food?w=300&h=200&u=choppi-press1"
    },
    {
      title: "Choppi cierra ronda de financiación para acelerar crecimiento",
      date: "3 de marzo, 2023",
      summary: "La startup venezolana de entrega de comestibles asegura una importante ronda de financiación para impulsar su crecimiento y mejorar su plataforma tecnológica.",
      image: "https://img.heroui.chat/image/food?w=300&h=200&u=choppi-press2"
    },
    {
      title: "Choppi lanza programa de fidelización para clientes frecuentes",
      date: "20 de enero, 2023",
      summary: "La plataforma de entrega de comestibles introduce un nuevo programa de recompensas diseñado para premiar a los clientes leales con descuentos y beneficios exclusivos.",
      image: "https://img.heroui.chat/image/food?w=300&h=200&u=choppi-press3"
    }
  ];

  const mediaContacts = [
    {
      name: "María González",
      position: "Directora de Comunicaciones",
      email: "maria@choppi.com",
      phone: "+58 212 555 1234"
    },
    {
      name: "Carlos Rodríguez",
      position: "Relaciones Públicas",
      email: "carlos@choppi.com",
      phone: "+58 212 555 5678"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Sala de Prensa" 
        description="Mantente al día con las últimas noticias y anuncios de Choppi."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comunicados de Prensa</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((press, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="border border-gray-100 h-full">
                    <CardBody className="p-0">
                      <img 
                        src={press.image}
                        alt={press.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{press.date}</p>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{press.title}</h3>
                        <p className="text-gray-600 mb-4">{press.summary}</p>
                        <Button 
                          color="primary"
                          variant="flat"
                          radius="full"
                          size="sm"
                        >
                          Leer Más
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kit de Prensa</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-100">
                <CardBody className="p-6">
                  <div className="flex items-center">
                    <div className="bg-choppi-orange/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon icon="lucide:image" className="text-choppi-orange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Logotipos e Imágenes</h3>
                      <p className="text-gray-600 mb-4">Descarga nuestros logotipos oficiales e imágenes de marca en alta resolución.</p>
                      <Button 
                        color="primary"
                        variant="flat"
                        radius="full"
                        size="sm"
                      >
                        Descargar
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-gray-100">
                <CardBody className="p-6">
                  <div className="flex items-center">
                    <div className="bg-choppi-orange/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon icon="lucide:file-text" className="text-choppi-orange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Hoja Informativa</h3>
                      <p className="text-gray-600 mb-4">Información detallada sobre Choppi, nuestra historia, misión y datos clave.</p>
                      <Button 
                        color="primary"
                        variant="flat"
                        radius="full"
                        size="sm"
                      >
                        Descargar
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contactos para Medios</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaContacts.map((contact, index) => (
                <Card key={index} className="border border-gray-100">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{contact.name}</h3>
                    <p className="text-gray-600 mb-4">{contact.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon icon="lucide:mail" className="text-choppi-orange w-5 h-5 mr-2" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon icon="lucide:phone" className="text-choppi-orange w-5 h-5 mr-2" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};