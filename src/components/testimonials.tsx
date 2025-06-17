import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "María Rodríguez",
    role: "Madre Ocupada",
    quote: "Choppi ha sido un cambio radical para nuestra familia. Puedo ordenar las compras mientras estoy en el trabajo y tenerlas entregadas para cuando llegue a casa. ¡La calidad siempre es excelente!",
    avatar: "https://img.heroui.chat/image/avatar?w=80&h=80&u=1",
    rating: 5,
    delay: 0.1,
  },
  {
    name: "Carlos Méndez",
    role: "Joven Profesional",
    quote: "Me encanta cómo puedo comparar precios entre diferentes supermercados. La app es súper intuitiva y la entrega siempre es puntual. Choppi se ha convertido en mi opción preferida para las compras.",
    avatar: "https://img.heroui.chat/image/avatar?w=80&h=80&u=2",
    rating: 5,
    delay: 0.2,
  },
  {
    name: "Ana Gutiérrez",
    role: "Estudiante",
    quote: "Como estudiante con un horario ajustado, Choppi me ahorra muchísimo tiempo. Los compradores son amables y siempre eligen los productos más frescos. ¡Altamente recomendado!",
    avatar: "https://img.heroui.chat/image/avatar?w=80&h=80&u=3",
    rating: 4,
    delay: 0.3,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No solo confíes en nuestra palabra. Esto es lo que la gente está diciendo sobre su experiencia con Choppi.
          </p>
          <div className="section-divider mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <Card className="border border-gray-100 h-full">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i}
                        icon="lucide:star" 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} icon="lucide:star" className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
              "¡Choppi ha transformado la forma en que hago mis compras!"
            </p>
            <p className="text-gray-600 mb-4">
              Con más de 10,000 clientes satisfechos y una calificación de 4.8/5 en las tiendas de aplicaciones, Choppi se está convirtiendo rápidamente en la forma preferida de hacer compras de supermercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};