import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button, Input, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FormFeedback } from "../components/form-feedback";

export const BecomeChopperPage: React.FC = () => {
  const benefits = [
    {
      icon: "lucide:clock",
      title: "Horario Flexible",
      description: "Trabaja cuando quieras. Tú decides tu disponibilidad y cuántos pedidos tomar."
    },
    {
      icon: "lucide:dollar-sign",
      title: "Ingresos Competitivos",
      description: "Gana dinero por cada pedido completado, más propinas y bonificaciones por rendimiento."
    },
    {
      icon: "lucide:map",
      title: "Trabaja en tu Zona",
      description: "Elige las áreas donde prefieres trabajar, cerca de tu hogar o en cualquier parte de la ciudad."
    },
    {
      icon: "lucide:trending-up",
      title: "Crecimiento Profesional",
      description: "Oportunidades de crecimiento dentro de nuestra plataforma y desarrollo de habilidades."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Aplica",
      description: "Completa el formulario de solicitud con tus datos personales y documentación requerida."
    },
    {
      number: "02",
      title: "Verificación",
      description: "Nuestro equipo revisará tu información y realizará las verificaciones necesarias."
    },
    {
      number: "03",
      title: "Capacitación",
      description: "Recibe capacitación sobre cómo usar la app de compradores y mejores prácticas."
    },
    {
      number: "04",
      title: "¡Comienza!",
      description: "Una vez aprobado, podrás empezar a recibir pedidos y ganar dinero inmediatamente."
    }
  ];

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    vehicleType: "",
    experience: ""
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

    if (!formData.phone.trim()) {
      newErrors.phone = "El número de teléfono es requerido";
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "El número de teléfono no es válido";
    }

    if (!formData.city.trim()) {
      newErrors.city = "La ciudad es requerida";
    }

    if (!formData.vehicleType.trim()) {
      newErrors.vehicleType = "El tipo de vehículo es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email" && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors(prev => ({ ...prev, email: "El correo electrónico no es válido" }));
      }
    } else if (name === "phone" && value.trim()) {
      if (!/^\+?[0-9]{8,15}$/.test(value.replace(/\s/g, ''))) {
        setErrors(prev => ({ ...prev, phone: "El número de teléfono no es válido" }));
      }
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
          message: "¡Tu solicitud ha sido enviada con éxito! Revisaremos tu información y te contactaremos pronto."
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          vehicleType: "",
          experience: ""
        });
      }, 1500);
    } else {
      setSubmitStatus({
        type: "error",
        message: "Por favor corrige los errores en el formulario antes de enviar."
      });
    }
  };

  return (
    <>
      <PageHeader
        title="Conviértete en Chopper"
        description="Únete a nuestro equipo de compradores y gana dinero haciendo entregas en tu tiempo libre."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-choppi-orange/10 mb-6">
                <span className="px-4 py-1 text-sm font-medium text-choppi-orange">
                  Oportunidad de Trabajo
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gana dinero entregando compras de supermercado
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Como Chopper, tendrás la libertad de trabajar cuando quieras, ganar ingresos competitivos y ser parte de una comunidad en crecimiento que está transformando la forma en que las personas compran comestibles.
              </p>

              <div className="space-y-6 mb-8">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-choppi-orange/10 rounded-full p-2">
                        <Icon icon={benefit.icon} className="text-choppi-orange w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                color="primary"
                size="lg"
                radius="full"
                variant="solid"
                className="px-8"
                href="#apply-form"
              >
                Aplicar Ahora
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

              <Image
                src="https://img.freepik.com/free-photo/female-food-delivery-worker-with-food-package_78492-3695.jpg?ga=GA1.1.1932774089.1747504218&w=740"
                alt="Comprador Choppi"
                className="w-full rounded-xl shadow-lg relative z-10"
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios de ser un Chopper</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Disfruta de la flexibilidad y las recompensas de trabajar con la plataforma líder de entrega de comestibles.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
              >
                <Card className="border border-gray-100 h-full">
                  <CardBody className="p-6">
                    <div className="bg-choppi-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={benefit.icon} className="text-choppi-orange w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mb-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Convertirse en comprador de Choppi es un proceso sencillo y rápido.
              </p>
              <div className="section-divider mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (0.1 * index) }}
                  className="relative"
                >
                  <Card className="border border-gray-100 h-full">
                    <CardBody className="p-6">
                      <div className="text-4xl font-bold text-choppi-orange/20 mb-4">{step.number}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardBody>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                      <Icon icon="lucide:arrow-right" className="text-choppi-orange w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            id="apply-form"
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Card className="border border-gray-100">
              <CardBody className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Aplica para ser Comprador</h2>

                {submitStatus && (
                  <FormFeedback type={submitStatus.type} message={submitStatus.message} />
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="name"
                      label="Nombre"
                      placeholder="Tu nombre completo"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      name="phone"
                      label="Teléfono"
                      placeholder="Tu número de teléfono"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone}
                    />
                    <Input
                      type="text"
                      name="city"
                      label="Ciudad"
                      placeholder="Ciudad donde quieres trabajar"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                      errorMessage={errors.city}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="vehicleType"
                      label="Tipo de Vehículo"
                      placeholder="Moto, bicicleta, carro, etc."
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.vehicleType}
                      onChange={handleChange}
                      isInvalid={!!errors.vehicleType}
                      errorMessage={errors.vehicleType}
                    />
                    <Input
                      type="text"
                      name="experience"
                      label="Experiencia Previa"
                      placeholder="¿Has trabajado en entregas antes?"
                      variant="bordered"
                      radius="lg"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      color="primary"
                      variant="solid"
                      radius="full"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
                    >
                      Enviar Solicitud
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};