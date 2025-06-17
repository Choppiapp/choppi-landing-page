import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody } from "@heroui/react";

export const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "1. Información que Recopilamos",
      content: [
        "En Choppi, recopilamos varios tipos de información para proporcionar y mejorar nuestros servicios:",
        "- Información personal: nombre, dirección de correo electrónico, número de teléfono, dirección de entrega.",
        "- Información de pago: detalles de tarjetas de crédito/débito y otros métodos de pago.",
        "- Información de uso: cómo interactúas con nuestra aplicación, historial de pedidos, preferencias de compra.",
        "- Información del dispositivo: tipo de dispositivo, sistema operativo, identificadores únicos."
      ]
    },
    {
      title: "2. Cómo Utilizamos tu Información",
      content: [
        "Utilizamos la información recopilada para:",
        "- Procesar y entregar tus pedidos.",
        "- Comunicarnos contigo sobre tu cuenta y pedidos.",
        "- Personalizar tu experiencia y recomendarte productos.",
        "- Mejorar nuestros servicios y desarrollar nuevas características.",
        "- Prevenir fraudes y garantizar la seguridad de nuestra plataforma."
      ]
    },
    {
      title: "3. Compartición de Información",
      content: [
        "Podemos compartir tu información con:",
        "- Compradores: para entregar tus pedidos.",
        "- Socios comerciales: supermercados y tiendas que procesan tus pedidos.",
        "- Proveedores de servicios: que nos ayudan a operar nuestra plataforma.",
        "- Autoridades legales: cuando sea requerido por ley o para proteger nuestros derechos."
      ]
    },
    {
      title: "4. Tus Derechos",
      content: [
        "Tienes derecho a:",
        "- Acceder a tu información personal.",
        "- Corregir información inexacta.",
        "- Eliminar tu información (con ciertas limitaciones).",
        "- Oponerte al procesamiento de tu información.",
        "- Retirar tu consentimiento en cualquier momento.",
        "Para ejercer tu derecho a eliminar tus datos, puedes visitar nuestra página de <a href='/eliminar-cuenta' className='text-choppi-orange hover:underline'>Eliminación de Cuenta</a>."
      ]
    },
    {
      title: "5. Seguridad de Datos",
      content: [
        "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún sistema es completamente seguro, y no podemos garantizar la seguridad absoluta de tu información."
      ]
    },
    {
      title: "6. Cambios a esta Política",
      content: [
        "Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios. Te notificaremos sobre cualquier cambio material a través de nuestra aplicación o por correo electrónico."
      ]
    },
    {
      title: "7. Contacto",
      content: [
        "Si tienes preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, contáctanos en:",
        "Correo electrónico: privacy@choppi.com",
        "Dirección: Av. Francisco de Miranda, Caracas, Venezuela"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Política de Privacidad" 
        description="Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales."
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
                  Esta Política de Privacidad describe cómo Choppi ("nosotros", "nuestro" o "la Compañía") recopila, utiliza y comparte tu información personal cuando utilizas nuestra aplicación móvil, sitio web y servicios relacionados (colectivamente, los "Servicios").
                </p>
                
                <p className="text-gray-600 mb-6">
                  Al utilizar nuestros Servicios, aceptas las prácticas descritas en esta Política de Privacidad. Si no estás de acuerdo con esta Política, por favor no utilices nuestros Servicios.
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
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="text-gray-600 text-center">
                    Al utilizar Choppi, confirmas que has leído y entendido esta Política de Privacidad y aceptas la recopilación, uso y divulgación de tu información como se describe aquí.
                  </p>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};