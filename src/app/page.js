"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Code, Smartphone, ChevronDown, Menu, CheckCircle, DollarSign, Clock, Zap } from 'lucide-react';
import Modal from '../app/components/Modal';
import Image from 'next/image';
export default function TrustpointConsultingLandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setName('');
        setEmail('');
        setMessage('');
        setModalMessage("Thank you for reaching out. We'll be in touch soon to schedule your free consultation!");
        setIsSuccess(true);
      } else {
        console.error('Form submission failed');
        setModalMessage('Oops! Something went wrong. Please try again later.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('Oops! Something went wrong. Please try again later.');
      setIsSuccess(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white text-navy-blue relative overflow-hidden">
      <Head>
        <title>Trustpoint Consulting | AI Chatbots & AI Agents for your sales & customer service departments</title>
        <meta name="description" content="AI chatbots and AI agents built on models trained on your data to automate routine tasks such as booking appointments, processing orders, and handling FAQs for you. Money-back guarantee, no questions asked." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="Trustpoint Consulting Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <div className="text-2xl font-bold">Trustpoint Consulting</div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-navy-blue p-4' : 'hidden'}`}>
            <a href="#offer" className="block md:inline hover:text-light-blue transition-colors py-2">Offer</a>
            <a href="#benefits" className="block md:inline hover:text-light-blue transition-colors py-2">Benefits</a>
            <a href="#faq" className="block md:inline hover:text-light-blue transition-colors py-2">FAQs</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20 md:mb-40 min-h-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">Large Language Models &lt; Large Profit Models </h1>
          <div className="mb-8"></div>
          <p className="text-xl md:text-3xl text-light-blue mb-8 italic">AI sales & customer service chatbots built on models trained on <span className="underline">your</span> data. Fast, custom, secure implementations. Unconditional, money-back guarantee.</p>
          <a href="https://calendly.com/danny-c-gleason/30min" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Get your free consultation
            {/* <ArrowRight className="ml-2" /> */}
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={48} className="text-navy-blue" />
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-12 text-center">
              Trusted by
            </h2>
            <div className="flex justify-center">
              <div className="w-48 h-48 relative">
                <a href="https://www.dayos.ai" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/dayos-transparent.png"
                    alt="Dayos Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40 py-20 bg-gradient-to-b from-white to-gray-100"
          id="offer"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-12 text-center">AI built for <span className="underline">ROI</span></h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl font-bold text-navy-blue mb-8">We Promise Results:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2 relative group">
                        Increase qualified lead bookings, reduce cost per interaction (CPI)
                        <span className="absolute top-0 right-0 text-sm text-gray-500 cursor-help rounded-full border border-gray-500 w-5 h-5 flex items-center justify-center">i</span>
                        <span className="invisible group-hover:visible absolute z-10 bg-white border border-gray-200 rounded p-2 text-sm text-gray-700 shadow-lg w-64 left-1/2 transform -translate-x-1/2 mt-2">
                          CPI provides a quantitative measure of the average cost incurred for each customer interaction. This metric is valuable for customer success teams as it helps evaluate the efficiency and effectiveness of a customer success operation.
                        </span>
                      </span>
                      <p className="text-gray-700">Our AI chatbots and agents are trained on your company data to qualify & book qualified leads, provide tailored self-service support, and therefore frees up your people to focus on closing deals and delighting customers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Risk-Free Guarantee</span>
                      <p className="text-gray-700">Our monthly fee is fully refundable or cancelable anytime if you&apos;re unsatisfied. We&apos;re confident in delivering results for your business you&apos;ll love.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-navy-blue mb-8">Our Solution:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Smartphone className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Custom-built AI Chatbot & AI Agents</span>
                      <p className="text-gray-700">We build and implement AI chatbots trained on your data within your tech stack, and ensure secure, encrypted data handling. We can also host LLMs in your cloud to keep data in-house.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Your Data, More Impactful Chat Experiences</span>
                      <p className="text-gray-700">Our AI chatbots and agents are trained on your company&apos;s knowledge and products, which deliver relevant, impactful experiences that drive results that directly effect your bottom line.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <a href="https://calendly.com/danny-c-gleason/30min" className="inline-block bg-navy-blue text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-light-blue transition-colors duration-300 transform hover:scale-105">
                Get your free consultation
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="benefits"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <DollarSign className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Risk-Free, Money-Back Guarantee</h3>
              <p className="text-navy-blue">Our monthly fee is fully refundable or cancelable anytime if you&apos;re unsatisfied. We&apos;re confident we&apos;ll deliver results for your business you&apos;ll love.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <Clock className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Custom-built AI Chatbot & AI Agents</h3>
              <p className="text-navy-blue">Get a custom AI chatbot integrated with your CRM, trained on your company&apos;s knowledge to boost qualified lead bookings and reduce cost per interaction (CPI).</p> 
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <Code className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Technical Training & Support</h3>
              <p className="text-navy-blue">We can train your team to maintain the AI chatbot or provide ongoing support and feature enhancements.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="faq"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do you handle data privacy?",
                answer: "Data privacy and security is a top priority for us. We utilize standard encryption protocols (TLS/SSL) for data transfers and rely on reputable cloud services like AWS, Vercel, or Heroku for data-at-rest encryption (typically AES-256). While these providers handle much of the underlying security, we implement best practices for access controls and database security within their platforms. For enhanced data protection, we offer the option to host LLM models on your own infrastructure, keeping sensitive data in-house. We're transparent about our use of third-party tools and their security implications, and we're committed to continuously improving our security measures as we grow. For clients with specific security requirements, we collaborate closely with your IT team to implement tailored solutions."
              },
              {
                question: "What kind data can you use to train the AI chatbot & AI agents?",
                answer: "We can use any data you have in your existing systems, structured and unstructured data. This includes text-based documents (emails, chat logs, etc.), PDFs, and tabular data. Audio / video data is also possible to ingest via transcription."
              },
              {
                question: "How quickly can you have the AI chatbot & AI agents ready?",
                answer: "This depends on your requirements. For simple use cases, we can have the AI chatbot & AI agents ready for your production environment as little as 2-3 weeks. For more complex use cases, it could take longer."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We offer both training for your technical team to support the AI chatbot & AI agents, and / or we can offer ongoing technical support and feature enhancements for you."
              },
              {
                question: "What are the costs?",
                answer: "We offer a free, no-obligation consultation to discuss your needs and provide a custom quote. Our fees are competitive and we offer a risk-free, money-back guarantee."
              }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md border border-light-blue text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-navy-blue">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-navy-blue transition-transform duration-300 ${openFAQ === index ? 'transform rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="bg-white p-4 rounded-b-lg border-t border-light-blue">
                    <p className="text-navy-blue">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="https://calendly.com/danny-c-gleason/30min" className="inline-block bg-navy-blue text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-light-blue transition-colors duration-300 transform hover:scale-105">
              Get your free consultation
            </a>
          </div>
        </motion.section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        isSuccess={isSuccess}
      />
      
      <footer className="bg-navy-blue text-white py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Trustpoint Consulting. All rights reserved.</p>
          <p className="mt-2"></p>
        </div>
      </footer>
    </div>
  );
}