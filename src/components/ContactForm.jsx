import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
      const userId = import.meta.env.VITE_APP_USER_ID;

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
        toast("Message Sent Successfully !");

        resetForm();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

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
        }) => (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
              {errors.name && touched.name && (
                <div className="text-red-400 text-sm mt-1">{errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <div className="text-red-400 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
              {errors.message && touched.message && (
                <div className="text-red-400 text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>

            <div
              onClick={() => {
                if (
                  !formikSubmitting &&
                  !isSubmitting &&
                  !errors.name &&
                  !errors.email &&
                  !errors.message &&
                  values.name &&
                  values.email &&
                  values.message
                ) {
                  handleSubmit(values, {
                    setSubmitting: () => {},
                    resetForm: () => {},
                  });
                }
              }}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors transform text-center cursor-pointer ${
                !formikSubmitting &&
                !isSubmitting &&
                !errors.name &&
                !errors.email &&
                !errors.message &&
                values.name &&
                values.email &&
                values.message
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
