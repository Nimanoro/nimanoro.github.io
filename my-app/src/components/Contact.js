import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = "service_7idzuno";
  const TEMPLATE_ID = "template_lucwnl3";
  const PUBLIC_KEY = "1y6yb9KMKX5PrXa3Z";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "I'll get back to you soon.",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-28 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gray-900 p-10 rounded-xl shadow-xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-green-400 text-sm font-semibold tracking-widest mb-1">
                LOCATION
              </h2>
              <p className="text-lg text-gray-300">Vancouver, BC</p>
            </div>
            <div>
              <h2 className="text-green-400 text-sm font-semibold tracking-widest mb-1">
                EMAIL
              </h2>
              <p className="text-indigo-400 text-lg">Nimanorouzy@gmail.com</p>
            </div>
            <div>
              <h2 className="text-green-400 text-sm font-semibold tracking-widest mb-2">
                SOCIAL
              </h2>
              <div className="flex gap-4">
                <SocialIcon url="https://linkedin.com/in/nima-norouzi-28b63a237/" bgColor="#4ade80" />
                <SocialIcon url="https://github.com/Nimanoro" bgColor="#4ade80" />
                <SocialIcon url="mailto:nimanourozy@gmail.com" bgColor="#4ade80" />
                <SocialIcon url="https://instagram.com/nima_.norouzi" bgColor="#4ade80" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleOnSubmit}
          name="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gray-900 p-10 rounded-xl shadow-xl flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mb-4">
            Have a project, collaboration, or just a thought? Send me a message.
          </p>

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 text-white rounded px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white rounded px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-800 text-white rounded px-4 py-3 border border-gray-700 resize-none focus:ring-2 focus:ring-green-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

