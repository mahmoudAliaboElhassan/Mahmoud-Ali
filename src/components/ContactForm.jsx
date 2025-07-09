import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
      const userId = import.meta.env.VITE_APP_USER_ID;

      // Check if environment variables are set
      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS configuration is missing");
      }

      // EmailJS template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: "Mahmoud Ali", // Replace with your name
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        toast.success("Message Sent Successfully!");
        resetForm();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");

      // You can also set specific field errors if needed
      if (error.message.includes("email")) {
        setFieldError("email", "There was an issue with your email address");
      }
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded-lg">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-600 text-white rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting: formikSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit: formikHandleSubmit,
          setFieldTouched,
        }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => {
                // Mark all fields as touched to show validation errors
                setFieldTouched("name", true);
                setFieldTouched("email", true);
                setFieldTouched("message", true);
              }}
              disabled={isSubmitting || formikSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors transform text-center ${
                isSubmitting || formikSubmitting
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 cursor-pointer"
              }`}
            >
              {isSubmitting || formikSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
