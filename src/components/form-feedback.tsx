import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface FormFeedbackProps {
  type: "success" | "error";
  message: string;
}

export const FormFeedback: React.FC<FormFeedbackProps> = ({ type, message }) => {
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const borderColor = type === "success" ? "border-green-100" : "border-red-100";
  const iconColor = type === "success" ? "text-green-500" : "text-red-500";
  const icon = type === "success" ? "lucide:check-circle" : "lucide:alert-circle";

  return (
    <motion.div
      className={`${bgColor} ${borderColor} border rounded-lg p-4 mb-6`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start">
        <Icon icon={icon} className={`${iconColor} w-5 h-5 mt-0.5 mr-3 flex-shrink-0`} />
        <div className={`${textColor}`}>
          {message}
        </div>
      </div>
    </motion.div>
  );
};