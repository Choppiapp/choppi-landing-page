import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string[];
  avatar: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, avatar, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="card-shadow h-full">
        <CardBody className="p-6">
          <div className="flex flex-col items-center text-center mb-4">
            <Avatar
              src={avatar}
              className="w-24 h-24 mb-4"
              isBordered
              color="primary"
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-primary font-medium">{role}</p>
          </div>
          <ul className="space-y-2">
            {bio.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Team: React.FC = () => {
  const team = [
    {
      name: "Enderson Veloz",
      role: "CEO & Co-Founder",
      bio: [
        "10+ years in retail operations",
        "Former regional manager at major supermarket chain",
        "MBA with focus on digital transformation",
        "Expert in LATAM market dynamics"
      ],
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
    },
    {
      name: "Luis Hernandez",
      role: "CTO & Co-Founder",
      bio: [
        "Full-stack developer with 8+ years experience",
        "Previously led engineering at fintech startup",
        "Specialized in mobile app development",
        "Expert in payment systems integration"
      ],
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
    }
  ];

  return (
    <section id="team" className="bg-choppi-gray section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Led by experienced entrepreneurs with deep expertise in retail operations and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              avatar={member.avatar}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};