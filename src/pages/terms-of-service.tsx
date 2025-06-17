import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody } from "@heroui/react";

export const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: "1. Aceptación de los Términos",
      content: [
        "Al acceder o utilizar los servicios de Choppi, incluyendo nuestra aplicación móvil y sitio web (colectivamente, los \"Servicios\"), aceptas estar legalmente vinculado por estos Términos de Servicio. Si no estás de acuerdo con estos términos, no debes acceder o utilizar nuestros Servicios."
      ]
    },
    {
      title: "2. Descripción del Servicio",
      content: [
        "Choppi es una plataforma que conecta a los usuarios con supermercados y tiendas locales, permitiéndoles comprar productos y recibir entregas a domicilio a través de nuestra red de compradores independientes.",
        "No somos propietarios ni operamos los supermercados o tiendas, ni empleamos directamente a los compradores. Actuamos como intermediarios facilitando la conexión entre usuarios, tiendas y compradores."
      ]
    },
    {
      title: "3. Registro de Cuenta",
      content: [
        "Para utilizar nuestros Servicios, debes crear una cuenta proporcionando información precisa y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y aceptas notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.",
        "Debes tener al menos 18 años para crear una cuenta y utilizar nuestros Servicios."
      ]
    },
    {
      title: "4. Pedidos y Pagos",
      content: [
        "Al realizar un pedido a través de Choppi, aceptas pagar todos los cargos aplicables, incluyendo el precio de los productos, tarifas de entrega, propinas y cualquier impuesto aplicable.",
        "Los precios de los productos pueden diferir de los precios en tienda y están sujetos a cambios sin previo aviso.",
        "Si un producto no está disponible, el comprador puede contactarte para discutir sustituciones o el producto puede ser omitido de tu pedido con el correspondiente ajuste en el precio."
      ]
    },
    {
      title: "5. Política de Cancelación y Reembolsos",
      content: [
        "Puedes cancelar un pedido sin cargo hasta que el comprador comience a comprar tus productos. Después de ese punto, pueden aplicarse cargos de cancelación.",
        "Si no estás satisfecho con tu pedido (productos dañados, incorrectos o de mala calidad), contáctanos dentro de las 24 horas siguientes a la entrega para solicitar un reembolso o crédito."
      ]
    },
    {
      title: "6. Conducta del Usuario",
      content: [
        "Al utilizar nuestros Servicios, aceptas:",
        "- No utilizar los Servicios para fines ilegales o no autorizados.",
        "- No interferir con el funcionamiento de los Servicios.",
        "- No acosar, abusar o dañar a otro usuario, comprador o personal de la tienda.",
        "- No proporcionar información falsa o engañosa.",
        "Nos reservamos el derecho de suspender o terminar tu cuenta si violas estos términos."
      ]
    },
    {
      title: "7. Limitación de Responsabilidad",
      content: [
        "Choppi no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de ganancias, datos, uso o cualquier otro daño intangible, resultante de tu uso o incapacidad para usar los Servicios.",
        "Nuestra responsabilidad total ante ti por cualquier reclamo relacionado con los Servicios no excederá el monto que hayas pagado a Choppi en los seis meses anteriores al evento que dio lugar al reclamo."
      ]
    },
    {
      title: "8. Modificaciones a los Términos",
      content: [
        "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Te notificaremos sobre cambios materiales a través de nuestra aplicación o por correo electrónico. El uso continuado de los Servicios después de dichos cambios constituye tu aceptación de los nuevos términos."
      ]
    },
    {
      title: "9. Ley Aplicable",
      content: [
        "Estos Términos se regirán e interpretarán de acuerdo con las leyes de Venezuela, sin dar efecto a ningún principio de conflicto de leyes."
      ]
    },
    {
      title: "10. Contacto",
      content: [
        "Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:",
        "Correo electrónico: legal@choppi.com",
        "Dirección: Av. Francisco de Miranda, Caracas, Venezuela"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Términos de Servicio" 
        description="Condiciones que rigen el uso de la plataforma Choppi."
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
                  Estos Términos de Servicio ("Términos") constituyen un acuerdo legalmente vinculante entre tú y Choppi, que rige tu uso de nuestra aplicación móvil, sitio web y servicios relacionados.
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
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-gray-600 text-center">
                    Al utilizar Choppi, confirmas que has leído, entendido y aceptado estar sujeto a estos Términos de Servicio.
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