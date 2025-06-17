import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button, Input, Checkbox, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FormFeedback } from "../components/form-feedback";

export const DeleteAccount: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [otherReason, setOtherReason] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    
    if (!reason) {
      newErrors.reason = "Por favor selecciona un motivo";
    }
    
    if (reason === "Otro motivo" && !otherReason.trim()) {
      newErrors.otherReason = "Por favor especifica el motivo";
    }
    
    if (!confirmed) {
      newErrors.confirmed = "Debes confirmar que entiendes las consecuencias";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        // Simulate random success/failure for demonstration
        const success = Math.random() > 0.2; // 80% success rate
        
        setLoading(false);
        
        if (success) {
          setSubmitted(true);
        } else {
          setSubmitError("Ha ocurrido un error al procesar tu solicitud. Por favor intenta nuevamente o contacta a soporte.");
        }
      }, 1500);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(e.target.value);
    if (errors.reason) {
      setErrors(prev => ({ ...prev, reason: "" }));
    }
  };

  const handleOtherReasonChange = (value: string) => {
    setOtherReason(value);
    if (errors.otherReason) {
      setErrors(prev => ({ ...prev, otherReason: "" }));
    }
  };

  const handleConfirmChange = (checked: boolean) => {
    setConfirmed(checked);
    if (errors.confirmed) {
      setErrors(prev => ({ ...prev, confirmed: "" }));
    }
  };

  const reasons = [
    "Ya no uso la aplicación",
    "Encontré un servicio mejor",
    "Problemas con el servicio",
    "Preocupaciones de privacidad",
    "Problemas técnicos",
    "Otro motivo"
  ];

  return (
    <>
      <PageHeader 
        title="Solicitud de Eliminación de Cuenta" 
        description="Solicita la eliminación de tu cuenta y datos personales de Choppi."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {!submitted ? (
              <Card className="border border-gray-100">
                <CardBody className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <Icon icon="lucide:alert-triangle" className="text-yellow-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-yellow-800">Información importante</h3>
                          <div className="mt-1 text-sm text-yellow-700">
                            <p>La eliminación de tu cuenta es permanente y no se puede deshacer. Esto eliminará:</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Tu perfil y datos personales</li>
                              <li>Tu historial de pedidos</li>
                              <li>Tus direcciones guardadas</li>
                              <li>Tus métodos de pago</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {submitError && (
                      <FormFeedback type="error" message={submitError} />
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        type="email"
                        label="Correo Electrónico"
                        placeholder="Ingresa el correo electrónico asociado a tu cuenta"
                        value={email}
                        onValueChange={handleEmailChange}
                        variant="bordered"
                        radius="lg"
                        isRequired
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                      />
                      
                      <div>
                        <label className={`block text-sm font-medium ${errors.reason ? 'text-danger' : 'text-gray-700'} mb-2`}>
                          ¿Por qué deseas eliminar tu cuenta?
                        </label>
                        <select
                          className={`w-full px-3 py-2 border ${errors.reason ? 'border-danger text-danger' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-choppi-orange/50`}
                          value={reason}
                          onChange={handleReasonChange}
                          required
                        >
                          <option value="" disabled>Selecciona un motivo</option>
                          {reasons.map((r, index) => (
                            <option key={index} value={r}>{r}</option>
                          ))}
                        </select>
                        {errors.reason && (
                          <p className="text-danger text-xs mt-1">{errors.reason}</p>
                        )}
                      </div>
                      
                      {reason === "Otro motivo" && (
                        <Textarea
                          label="Especifica el motivo"
                          placeholder="Por favor, cuéntanos por qué deseas eliminar tu cuenta..."
                          variant="bordered"
                          radius="lg"
                          minRows={3}
                          value={otherReason}
                          onValueChange={handleOtherReasonChange}
                          isInvalid={!!errors.otherReason}
                          errorMessage={errors.otherReason}
                        />
                      )}
                      
                      <div className={`bg-gray-50 p-4 rounded-lg ${errors.confirmed ? 'border border-danger' : ''}`}>
                        <Checkbox
                          isSelected={confirmed}
                          onValueChange={handleConfirmChange}
                          size="sm"
                          color={errors.confirmed ? "danger" : "primary"}
                        >
                          <span className="text-sm text-gray-700">
                            Entiendo que al eliminar mi cuenta, perderé todo mi historial y datos asociados, y esta acción no se puede deshacer.
                          </span>
                        </Checkbox>
                        {errors.confirmed && (
                          <p className="text-danger text-xs mt-1">{errors.confirmed}</p>
                        )}
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          type="submit"
                          color="danger"
                          variant="solid"
                          radius="full"
                          size="lg"
                          className="w-full"
                          isDisabled={loading}
                          isLoading={loading}
                        >
                          Solicitar Eliminación de Cuenta
                        </Button>
                      </div>
                    </form>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500">
                        Si tienes alguna pregunta antes de eliminar tu cuenta, por favor{" "}
                        <a href="/contacto" className="text-choppi-orange hover:underline">
                          contáctanos
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                </CardBody>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border border-gray-100">
                  <CardBody className="p-8 text-center">
                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon icon="lucide:check" className="text-green-500 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Solicitud Recibida</h2>
                    <p className="text-gray-600 mb-6">
                      Hemos recibido tu solicitud para eliminar tu cuenta. Procesaremos tu solicitud dentro de los próximos 30 días y te enviaremos una confirmación a <strong>{email}</strong> cuando el proceso haya sido completado.
                    </p>
                    <p className="text-gray-600 mb-8">
                      Durante este período, puedes cancelar tu solicitud contactando a nuestro equipo de soporte.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button 
                        as="a"
                        href="/"
                        color="primary"
                        variant="flat"
                        radius="full"
                      >
                        Volver al Inicio
                      </Button>
                      <Button 
                        as="a"
                        href="/centro-de-ayuda"
                        color="primary"
                        variant="light"
                        radius="full"
                      >
                        Centro de Ayuda
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div
            className="max-w-2xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-gray-100">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">¿Cuánto tiempo tarda en eliminarse mi cuenta?</h4>
                    <p className="text-gray-600 mt-1">
                      Procesamos las solicitudes de eliminación de cuenta dentro de los 30 días posteriores a la recepción. Te enviaremos una confirmación por correo electrónico cuando se complete el proceso.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">¿Puedo recuperar mi cuenta después de eliminarla?</h4>
                    <p className="text-gray-600 mt-1">
                      No, una vez que tu cuenta ha sido eliminada, no es posible recuperarla. Deberás crear una nueva cuenta si deseas utilizar nuestros servicios nuevamente.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">¿Qué sucede con mis datos después de eliminar mi cuenta?</h4>
                    <p className="text-gray-600 mt-1">
                      Eliminamos todos tus datos personales de nuestros sistemas activos. Sin embargo, podemos retener cierta información según lo requiera la ley o para fines legítimos, como se detalla en nuestra Política de Privacidad.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">¿Puedo cancelar mi solicitud de eliminación?</h4>
                    <p className="text-gray-600 mt-1">
                      Sí, puedes cancelar tu solicitud contactando a nuestro equipo de soporte antes de que se complete el proceso de eliminación.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};