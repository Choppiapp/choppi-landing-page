import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button } from "@heroui/react";

export const CookiesPolicy: React.FC = () => {
  const sections = [
    {
      title: "1. ¿Qué son las Cookies?",
      content: [
        "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, teléfono móvil o tablet) cuando visitas un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio."
      ]
    },
    {
      title: "2. Tipos de Cookies que Utilizamos",
      content: [
        "Utilizamos los siguientes tipos de cookies en nuestro sitio web y aplicación:",
        "- Cookies esenciales: Necesarias para el funcionamiento básico del sitio web y la aplicación.",
        "- Cookies de preferencias: Permiten recordar información que cambia la forma en que se comporta o se ve el sitio.",
        "- Cookies estadísticas: Nos ayudan a entender cómo los visitantes interactúan con el sitio.",
        "- Cookies de marketing: Utilizadas para rastrear a los visitantes en los sitios web con el objetivo de mostrar anuncios relevantes."
      ]
    },
    {
      title: "3. Cookies de Terceros",
      content: [
        "También permitimos que terceros coloquen cookies en tu dispositivo cuando visitas nuestro sitio web o utilizas nuestra aplicación. Estos terceros incluyen proveedores de servicios de análisis, redes publicitarias y redes sociales.",
        "Estos terceros pueden utilizar cookies, balizas web y tecnologías similares para recopilar o recibir información de nuestro sitio web y de otros lugares de Internet, que pueden ser utilizadas para proporcionar servicios de medición, personalizar anuncios o reconocer tus dispositivos."
      ]
    },
    {
      title: "4. Control de Cookies",
      content: [
        "Puedes controlar y gestionar las cookies de varias maneras. Ten en cuenta que eliminar o bloquear las cookies puede afectar tu experiencia de usuario y es posible que no puedas acceder a ciertas partes de nuestro sitio web o aplicación.",
        "- Configuración del navegador: Puedes modificar la configuración de tu navegador para bloquear o eliminar cookies.",
        "- Herramientas de terceros: Existen herramientas en línea que te permiten gestionar las cookies de terceros.",
        "- Configuración de la aplicación: En nuestra aplicación, puedes ajustar tus preferencias de privacidad en la sección de configuración."
      ]
    },
    {
      title: "5. Cambios en nuestra Política de Cookies",
      content: [
        "Podemos actualizar nuestra Política de Cookies periódicamente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios. Te recomendamos revisar esta política regularmente para estar informado sobre cómo utilizamos las cookies."
      ]
    },
    {
      title: "6. Contacto",
      content: [
        "Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en:",
        "Correo electrónico: privacy@choppi.com",
        "Dirección: Av. Francisco de Miranda, Caracas, Venezuela"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Política de Cookies" 
        description="Información sobre cómo utilizamos las cookies y tecnologías similares en nuestro sitio web y aplicación."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-gray-100 mb-8">
              <CardBody className="p-8">
                <p className="text-gray-600 mb-6">
                  <strong>Última actualización:</strong> 1 de junio de 2023
                </p>
                
                <p className="text-gray-600 mb-6">
                  Esta Política de Cookies explica cómo Choppi ("nosotros", "nuestro" o "la Compañía") utiliza cookies y tecnologías similares para reconocerte cuando visitas nuestro sitio web o utilizas nuestra aplicación. Explica qué son estas tecnologías y por qué las usamos, así como tus derechos para controlarlas.
                </p>
                
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                ))}
                
                <motion.div
                  className="mt-12 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferencias de Cookies</h3>
                    <p className="text-gray-600 mb-6">
                      Puedes ajustar tus preferencias de cookies en cualquier momento utilizando nuestro panel de configuración.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button 
                        color="primary"
                        variant="solid"
                        radius="full"
                      >
                        Aceptar Todas las Cookies
                      </Button>
                      <Button 
                        color="primary"
                        variant="flat"
                        radius="full"
                      >
                        Configurar Preferencias
                      </Button>
                      <Button 
                        color="default"
                        variant="light"
                        radius="full"
                      >
                        Rechazar No Esenciales
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};