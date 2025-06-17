import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FormFeedback } from "../components/form-feedback";

interface FaqCategory {
  title: string;
  icon: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const HelpCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [expandedQuestions, setExpandedQuestions] = React.useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    
    setIsSearching(true);
    setSearchStatus(null);
    
    // Simulate search API call
    setTimeout(() => {
      setIsSearching(false);
      
      // For demo purposes, show "no results" message
      setSearchStatus({
        type: "info" as any, // TypeScript workaround
        message: `No se encontraron resultados para "${searchQuery}". Por favor intenta con otros términos o navega por las categorías.`
      });
    }, 1500);
  };

  const faqCategories: FaqCategory[] = [
    {
      title: "Pedidos y Entregas",
      icon: "lucide:package",
      questions: [
        {
          question: "¿Cómo puedo realizar un pedido en Choppi?",
          answer: "Para realizar un pedido, descarga la aplicación Choppi desde App Store o Google Play, crea una cuenta, selecciona los productos que deseas y procede al pago. Un comprador se encargará de recoger tus productos y entregarlos en la dirección especificada."
        },
        {
          question: "¿Cuánto tiempo tarda en llegar mi pedido?",
          answer: "El tiempo de entrega varía según la distancia y la disponibilidad de compradores, pero generalmente los pedidos se entregan en un plazo de 30 a 60 minutos. Puedes seguir el estado de tu pedido en tiempo real a través de la aplicación."
        },
        {
          question: "¿Qué hago si falta un producto en mi pedido?",
          answer: "Si falta un producto en tu pedido, puedes reportarlo a través de la aplicación en la sección 'Ayuda con mi pedido' o contactar directamente con nuestro servicio de atención al cliente. Te reembolsaremos el importe del producto faltante."
        }
      ]
    },
    {
      title: "Pagos y Facturación",
      icon: "lucide:credit-card",
      questions: [
        {
          question: "¿Qué métodos de pago acepta Choppi?",
          answer: "Choppi acepta múltiples métodos de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias, y pagos móviles como Zelle. También ofrecemos la opción de pago en efectivo al momento de la entrega."
        },
        {
          question: "¿Cómo puedo solicitar una factura por mi compra?",
          answer: "Puedes solicitar una factura directamente desde la aplicación después de completar tu pedido. Ve a la sección 'Mis Pedidos', selecciona el pedido para el que necesitas la factura y haz clic en 'Solicitar Factura'. También puedes contactar con nuestro servicio de atención al cliente."
        }
      ]
    },
    {
      title: "Cuenta y Perfil",
      icon: "lucide:user",
      questions: [
        {
          question: "¿Cómo puedo cambiar mi dirección de entrega?",
          answer: "Para cambiar tu dirección de entrega, ve a la sección 'Mi Perfil' en la aplicación, selecciona 'Direcciones' y allí podrás editar tus direcciones existentes o añadir nuevas."
        },
        {
          question: "¿Cómo puedo actualizar mi información de pago?",
          answer: "Para actualizar tu información de pago, ve a la sección 'Mi Perfil' en la aplicación, selecciona 'Métodos de Pago' y allí podrás editar o añadir nuevos métodos de pago."
        }
      ]
    },
    {
      title: "Programa de Compradores",
      icon: "lucide:shopping-bag",
      questions: [
        {
          question: "¿Cómo puedo convertirme en comprador de Choppi?",
          answer: "Para convertirte en comprador de Choppi, visita la sección 'Conviértete en Comprador' en nuestra web o app, completa el formulario de solicitud y sigue el proceso de verificación. Una vez aprobado, recibirás una capacitación y podrás comenzar a recibir pedidos."
        },
        {
          question: "¿Cuáles son los requisitos para ser comprador?",
          answer: "Los requisitos incluyen ser mayor de 18 años, tener un smartphone compatible con nuestra aplicación, medios de transporte propios (moto, bicicleta o carro), documentación legal vigente y pasar nuestro proceso de verificación de antecedentes."
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Centro de Ayuda" 
        description="Encuentra respuestas a tus preguntas y obtén la asistencia que necesitas."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {searchStatus && (
              <FormFeedback type={searchStatus.type as "success" | "error"} message={searchStatus.message} />
            )}
            
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Busca respuestas a tus preguntas..."
                variant="bordered"
                radius="lg"
                size="lg"
                startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                isDisabled={isSearching}
                endContent={
                  isSearching && (
                    <div className="flex items-center">
                      <Icon icon="lucide:loader" className="animate-spin text-gray-400" />
                    </div>
                  )
                }
              />
            </form>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-gray-100 sticky top-24">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
                  <div className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <button
                        key={index}
                        className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          activeCategory === index 
                            ? 'bg-choppi-orange text-white' 
                            : 'hover:bg-choppi-orange/10 text-gray-600 hover:text-choppi-orange'
                        }`}
                        onClick={() => setActiveCategory(index)}
                      >
                        <Icon icon={category.icon} className="mr-2 w-5 h-5" />
                        {category.title}
                      </button>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon icon={faqCategories[activeCategory].icon} className="mr-3 w-6 h-6 text-choppi-orange" />
                {faqCategories[activeCategory].title}
              </h2>
              
              <div className="space-y-4">
                {faqCategories[activeCategory].questions.map((faq, questionIndex) => {
                  const key = `${activeCategory}-${questionIndex}`;
                  const isExpanded = expandedQuestions[key] || false;
                  
                  return (
                    <Card 
                      key={questionIndex} 
                      className="border border-gray-100"
                    >
                      <CardBody className="p-0">
                        <button
                          className="w-full text-left p-6 flex items-center justify-between"
                          onClick={() => toggleQuestion(activeCategory, questionIndex)}
                        >
                          <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                          <Icon 
                            icon={isExpanded ? "lucide:chevron-up" : "lucide:chevron-down"} 
                            className="text-gray-500 w-5 h-5 flex-shrink-0"
                          />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿No encuentras lo que buscas?</h3>
                <p className="text-gray-600 mb-6">
                  Si no has encontrado respuesta a tu pregunta, nuestro equipo de atención al cliente está listo para ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    color="primary"
                    variant="solid"
                    radius="full"
                    startContent={<Icon icon="lucide:message-circle" />}
                  >
                    Chat en Vivo
                  </Button>
                  <Button 
                    color="primary"
                    variant="flat"
                    radius="full"
                    as="a"
                    href="/contacto"
                    startContent={<Icon icon="lucide:mail" />}
                  >
                    Contactar Soporte
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};