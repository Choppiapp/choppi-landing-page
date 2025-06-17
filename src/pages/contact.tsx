import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FormFeedback } from "../components/form-feedback";

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Correo Electrónico",
      info: "info@choppi.com",
      action: "Enviar Email",
      link: "mailto:info@choppi.com"
    },
    {
      icon: "lucide:phone",
      title: "Teléfono",
      info: "+58 212 555 1234",
      action: "Llamar",
      link: "tel:+582125551234"
    },
    {
      icon: "lucide:map-pin",
      title: "Oficina Principal",
      info: "Av. Francisco de Miranda, Caracas, Venezuela",
      action: "Ver en Mapa",
      link: "#"
    }
  ];

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Clear submit status when user makes changes
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus({
          type: "success",
          message: "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto."
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 1500);
    } else {
      // Show error message if validation fails
      setSubmitStatus({
        type: "error",
        message: "Por favor corrige los errores en el formulario antes de enviar."
      });
    }
  };

  // Validate email on blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "email" && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors(prev => ({ ...prev, email: "El correo electrónico no es válido" }));
      }
    }
  };

  return (
    <>
      <PageHeader 
        title="Contáctanos" 
        description="Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier consulta o asistencia."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="border border-gray-100 h-full">
                  <CardBody className="p-6 text-center">
                    <div className="bg-choppi-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon icon={item.icon} className="text-choppi-orange w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.info}</p>
                    <Button 
                      color="primary"
                      variant="flat"
                      radius="full"
                      size="sm"
                      as="a"
                      href={item.link}
                    >
                      {item.action}
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
              <p className="text-lg text-gray-600 mb-8">
                Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              {submitStatus && (
                <FormFeedback type={submitStatus.type} message={submitStatus.message} />
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    label="Nombre"
                    placeholder="Tu nombre"
                    variant="bordered"
                    radius="lg"
                    isRequired
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                  />
                  <Input
                    type="email"
                    name="email"
                    label="Correo Electrónico"
                    placeholder="tu@email.com"
                    variant="bordered"
                    radius="lg"
                    isRequired
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                  />
                </div>
                
                <Input
                  type="text"
                  name="subject"
                  label="Asunto"
                  placeholder="Asunto de tu mensaje"
                  variant="bordered"
                  radius="lg"
                  isRequired
                  value={formData.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                  errorMessage={errors.subject}
                />
                
                <Textarea
                  name="message"
                  label="Mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  variant="bordered"
                  radius="lg"
                  minRows={5}
                  isRequired
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  errorMessage={errors.message}
                />
                
                <Button 
                  type="submit"
                  color="primary"
                  variant="solid"
                  radius="full"
                  size="lg"
                  className="px-8"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                >
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-[400px] lg:h-auto"
            >
              <div className="absolute inset-0 bg-gray-200 rounded-xl overflow-hidden">
                {/* Aquí iría un mapa real, pero usaremos una imagen placeholder */}
                <img 
                  src="https://img.heroui.chat/image/places?w=800&h=600&u=caracas-map"
                  alt="Mapa de ubicación"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes preguntas frecuentes?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Visita nuestro Centro de Ayuda para encontrar respuestas rápidas a las preguntas más comunes.
              </p>
              <Button 
                color="primary"
                variant="flat"
                radius="full"
                size="lg"
                as="a"
                href="/centro-de-ayuda"
              >
                Centro de Ayuda
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};