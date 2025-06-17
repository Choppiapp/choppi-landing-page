import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FormFeedback } from "../components/form-feedback";

export const PartnerWithUs: React.FC = () => {
  const benefits = [
    {
      icon: "lucide:users",
      title: "Amplía tu Alcance",
      description: "Llega a miles de nuevos clientes a través de nuestra plataforma en crecimiento."
    },
    {
      icon: "lucide:trending-up",
      title: "Aumenta tus Ventas",
      description: "Incrementa tus ingresos con ventas adicionales a través de nuestro canal digital."
    },
    {
      icon: "lucide:truck",
      title: "Logística Simplificada",
      description: "Nuestra red de compradores se encarga de recoger y entregar los productos a los clientes."
    },
    {
      icon: "lucide:bar-chart",
      title: "Analítica Detallada",
      description: "Accede a informes detallados sobre ventas, productos populares y comportamiento del cliente."
    }
  ];

  const partnerTypes = [
    {
      title: "Supermercados",
      description: "Ideal para cadenas de supermercados y tiendas de comestibles que buscan expandir su presencia digital.",
      icon: "lucide:shopping-cart"
    },
    {
      title: "Tiendas Especializadas",
      description: "Para tiendas de productos orgánicos, delicatessen, panaderías y otras tiendas especializadas.",
      icon: "lucide:store"
    },
    {
      title: "Mercados Locales",
      description: "Conecta a productores locales y mercados con consumidores que valoran productos frescos y artesanales.",
      icon: "lucide:home"
    }
  ];

  const [formData, setFormData] = React.useState({
    businessName: "",
    businessType: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "El nombre del negocio es requerido";
    }

    if (!formData.businessType.trim()) {
      newErrors.businessType = "El tipo de negocio es requerido";
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = "El nombre de contacto es requerido";
    }

    if (!formData.position.trim()) {
      newErrors.position = "El cargo es requerido";
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

    if (!formData.address.trim()) {
      newErrors.address = "La dirección del negocio es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          message: "¡Tu solicitud de asociación ha sido recibida! Nuestro equipo revisará tu información y se pondrá en contacto contigo pronto."
        });

        // Reset form after successful submission
        setFormData({
          businessName: "",
          businessType: "",
          contactName: "",
          position: "",
          email: "",
          phone: "",
          address: "",
          additionalInfo: ""
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
        title="Conviertete en Aliado"
        description="Haz crecer tu negocio y llega a ún segmento de clientes que nunca habías tenido."
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
                  Oportunidad de Negocio
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lleva tu negocio al siguiente nivel con Choppi
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Asociarte con Choppi te permite expandir tu alcance, aumentar tus ventas y ofrecer una experiencia de compra conveniente a tus clientes, todo sin la necesidad de invertir en tu propia infraestructura de entrega.
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
                href="#partner-form"
              >
                Conviértete en Socio
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

              <img
                src="https://img.heroui.chat/image/food?w=600&h=400&u=choppi-partner"
                alt="Socio Choppi"
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios para Socios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre cómo una asociación con Choppi puede transformar tu negocio.
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

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quién Puede Asociarse?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos con una variedad de negocios para ofrecer la mejor selección a nuestros clientes.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (0.1 * index) }}
              >
                <Card className="border border-gray-100 h-full">
                  <CardBody className="p-6 text-center">
                    <div className="bg-choppi-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon icon={type.icon} className="text-choppi-orange w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            id="partner-form"
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <Card className="border border-gray-100">
              <CardBody className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Solicitud de Asociación</h2>

                {submitStatus && (
                  <FormFeedback type={submitStatus.type} message={submitStatus.message} />
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="businessName"
                      label="Nombre del Negocio"
                      placeholder="Nombre de tu empresa"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.businessName}
                      onChange={handleInputChange}
                      isInvalid={!!errors.businessName}
                      errorMessage={errors.businessName}
                    />
                    <Input
                      type="text"
                      name="businessType"
                      label="Tipo de Negocio"
                      placeholder="Supermercado, tienda especializada, etc."
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.businessType}
                      onChange={handleInputChange}
                      isInvalid={!!errors.businessType}
                      errorMessage={errors.businessType}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="contactName"
                      label="Nombre de Contacto"
                      placeholder="Persona de contacto"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.contactName}
                      onChange={handleInputChange}
                      isInvalid={!!errors.contactName}
                      errorMessage={errors.contactName}
                    />
                    <Input
                      type="text"
                      name="position"
                      label="Cargo"
                      placeholder="Tu posición en la empresa"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.position}
                      onChange={handleInputChange}
                      isInvalid={!!errors.position}
                      errorMessage={errors.position}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="email"
                      name="email"
                      label="Correo Electrónico"
                      placeholder="correo@empresa.com"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.email}
                      errorMessage={errors.email}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      label="Teléfono"
                      placeholder="Número de contacto"
                      variant="bordered"
                      radius="lg"
                      isRequired
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone}
                    />
                  </div>

                  <Input
                    type="text"
                    name="address"
                    label="Dirección del Negocio"
                    placeholder="Dirección completa"
                    variant="bordered"
                    radius="lg"
                    isRequired
                    value={formData.address}
                    onChange={handleInputChange}
                    isInvalid={!!errors.address}
                    errorMessage={errors.address}
                  />

                  <Textarea
                    name="additionalInfo"
                    label="Información Adicional"
                    placeholder="Cuéntanos más sobre tu negocio y por qué te gustaría asociarte con Choppi..."
                    variant="bordered"
                    radius="lg"
                    minRows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />

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