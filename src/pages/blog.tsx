import React from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/page-header";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  image: string;
}

export const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "5 consejos para ahorrar tiempo en tus compras de supermercado",
      date: "10 de junio, 2023",
      author: "Ana Martínez",
      category: "Consejos",
      summary: "Descubre cómo optimizar tus compras de supermercado y ahorrar tiempo valioso con estos consejos prácticos que puedes implementar hoy mismo.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog1"
    },
    {
      title: "Los beneficios de comprar productos locales",
      date: "25 de mayo, 2023",
      author: "Carlos Rodríguez",
      category: "Alimentación",
      summary: "Explorar por qué comprar productos locales no solo beneficia a tu salud, sino también a la economía local y al medio ambiente.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog2"
    },
    {
      title: "Cómo planificar tus compras semanales de manera eficiente",
      date: "12 de mayo, 2023",
      author: "María González",
      category: "Organización",
      summary: "Aprende a planificar tus compras semanales para ahorrar dinero, reducir el desperdicio de alimentos y mantener tu despensa siempre organizada.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog3"
    },
    {
      title: "Recetas fáciles con ingredientes básicos de la despensa",
      date: "3 de mayo, 2023",
      author: "José Pérez",
      category: "Recetas",
      summary: "Descubre deliciosas recetas que puedes preparar con ingredientes básicos que probablemente ya tienes en tu despensa.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog4"
    },
    {
      title: "Guía para entender las etiquetas nutricionales",
      date: "20 de abril, 2023",
      author: "Laura Sánchez",
      category: "Nutrición",
      summary: "Una guía práctica para entender las etiquetas nutricionales y tomar decisiones más informadas al hacer tus compras.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog5"
    },
    {
      title: "Tendencias en compras de supermercado para 2023",
      date: "5 de abril, 2023",
      author: "Roberto Díaz",
      category: "Tendencias",
      summary: "Explora las tendencias emergentes en el comportamiento de compra de supermercado y cómo están cambiando la forma en que compramos alimentos.",
      image: "https://img.heroui.chat/image/food?w=400&h=250&u=choppi-blog6"
    }
  ];

  const categories = [
    "Todos", "Consejos", "Alimentación", "Organización", "Recetas", "Nutrición", "Tendencias"
  ];

  return (
    <>
      <PageHeader 
        title="Blog de Choppi" 
        description="Consejos, recetas y tendencias para mejorar tu experiencia de compra y alimentación."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="md:w-3/4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="border border-gray-100 h-full">
                      <CardBody className="p-0">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-choppi-orange/10 text-choppi-orange">
                              {post.category}
                            </span>
                            <span className="text-sm text-gray-500">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Por {post.author}</span>
                            <Button 
                              color="primary"
                              variant="flat"
                              radius="full"
                              size="sm"
                            >
                              Leer Más
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button 
                  color="primary"
                  variant="bordered"
                  radius="full"
                  size="lg"
                >
                  Cargar Más Artículos
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border border-gray-100 mb-8">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Buscar</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar artículos..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-choppi-orange/50"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Icon icon="lucide:search" className="text-gray-400 w-5 h-5" />
                    </button>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-gray-100 mb-8">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          index === 0 
                            ? 'bg-choppi-orange text-white' 
                            : 'hover:bg-choppi-orange/10 text-gray-600 hover:text-choppi-orange'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-gray-100">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Suscríbete</h3>
                  <p className="text-gray-600 mb-4">
                    Recibe nuestros últimos artículos y consejos directamente en tu bandeja de entrada.
                  </p>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-choppi-orange/50 mb-4"
                  />
                  <Button 
                    color="primary"
                    variant="solid"
                    radius="full"
                    fullWidth
                  >
                    Suscribirse
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};