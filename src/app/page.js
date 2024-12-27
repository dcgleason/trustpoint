"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Code, 
  Smartphone, 
  ChevronDown, 
  Menu, 
  CheckCircle, 
  Shield, 
  Clock, 
  Zap,
  Award,
  Users,
  Lock
} from 'lucide-react';
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
        setModalMessage("Thank you for reaching out. We'll be in touch soon to discuss your ServiceNow needs.");
        setIsSuccess(true);
      } else {
        console.error('Form submission failed');
        setModalMessage('Something went wrong. Please try again or contact us directly.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('Something went wrong. Please try again or contact us directly.');
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
        <title>TrustPoint Consulting Group | Premier ServiceNow Solutions for Federal Agencies</title>
        <meta name="description" content="Specialized ServiceNow consulting and implementation services for government agencies. Expert ITSM, Security Operations, and GRC solutions that meet federal compliance standards." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  
      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/tpc-transparent.png"
              alt="TrustPoint Consulting Group Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <div className="text-2xl font-bold">TrustPoint Consulting Group</div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-navy-blue p-4' : 'hidden'}`}>
            <a href="#services" className="block md:inline hover:text-light-blue transition-colors py-2">Services</a>
            <a href="#expertise" className="block md:inline hover:text-light-blue transition-colors py-2">Expertise</a>
            <a href="#faq" className="block md:inline hover:text-light-blue transition-colors py-2">FAQs</a>
            <a href="#contact" className="block md:inline hover:text-light-blue transition-colors py-2">Contact</a>
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
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">
            Elite ServiceNow Solutions for Federal Agencies
          </h1>
          <div className="mb-8"></div>
          <p className="text-xl md:text-3xl text-light-blue mb-8 italic">
            Delivering secure, compliant, and efficient ServiceNow implementations with certified experts who understand government requirements.
          </p>
          <a href="https://calendly.com/danny-c-gleason/30min" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Schedule a Consultation
            <ArrowRight className="ml-2" />
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
              Why Choose TrustPoint
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="text-light-blue w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Federal Compliance Expertise</h3>
                <p>Deep understanding of FedRAMP, FISMA, and NIST requirements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="text-light-blue w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Certified ServiceNow Experts</h3>
                <p>In-house team of certified professionals with government experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Lock className="text-light-blue w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Security-First Approach</h3>
                <p>Rigorous security protocols aligned with federal standards</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40 py-20 bg-gradient-to-b from-white to-gray-100"
          id="services"
        >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-12 text-center">Comprehensive ServiceNow Solutions</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold text-navy-blue mb-8">Core Services:</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">IT Service Management (ITSM)</span>
                    <p className="text-gray-700">Transform your agency&apos;s service delivery with our comprehensive ITSM implementation services. We specialize in incident management, problem management, change management, and service catalog design that align with federal requirements and best practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">Security Operations & GRC</span>
                    <p className="text-gray-700">Enhance your security posture with our integrated Security Operations and Governance, Risk, and Compliance solutions. We implement robust frameworks that meet strict federal security standards while streamlining operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">Platform Management</span>
                    <p className="text-gray-700">Ensure optimal performance with our comprehensive platform maintenance services, including upgrades, optimization, and continuous monitoring tailored to government environments.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-navy-blue mb-8">Our Commitment:</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Shield className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">Federal Compliance Excellence</span>
                    <p className="text-gray-700">Our implementations strictly adhere to FedRAMP, FISMA, and NIST guidelines, ensuring your ServiceNow instance meets all federal security requirements and compliance standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">Expert Team</span>
                    <p className="text-gray-700">Work with our in-house team of certified ServiceNow professionals who bring extensive government sector experience and technical expertise to every project.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <div>
                    <span className="text-xl font-semibold block mb-2">Quality Assurance</span>
                    <p className="text-gray-700">Benefit from our rigorous quality control processes and commitment to excellence in every aspect of your ServiceNow implementation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a href="https://calendly.com/danny-c-gleason/30min" className="inline-block bg-navy-blue text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-light-blue transition-colors duration-300 transform hover:scale-105">
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-20 md:mb-40"
        id="expertise"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Our Value Proposition</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
            <Lock className="text-light-blue mb-4 w-12 h-12" />
            <h3 className="text-2xl font-semibold text-navy-blue mb-4">Security-First Implementation</h3>
            <p className="text-navy-blue">Our implementations prioritize security at every level, ensuring your ServiceNow instance meets the strictest federal compliance requirements while maintaining optimal performance and usability.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
            <Clock className="text-light-blue mb-4 w-12 h-12" />
            <h3 className="text-2xl font-semibold text-navy-blue mb-4">Rapid Time-to-Value</h3>
            <p className="text-navy-blue">Experience accelerated implementation timelines without compromising quality. Our proven methodology and experienced team ensure efficient delivery while meeting all federal requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
            <Code className="text-light-blue mb-4 w-12 h-12" />
            <h3 className="text-2xl font-semibold text-navy-blue mb-4">Technical Excellence</h3>
            <p className="text-navy-blue">Benefit from our team&apos;s deep technical expertise in ServiceNow implementation, customization, and optimization specifically tailored for government agencies.</p>
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
              question: "What sets TrustPoint apart in government ServiceNow implementations?",
              answer: "TrustPoint Consulting Group specializes exclusively in federal ServiceNow implementations with an in-house team of certified experts who understand government compliance requirements. Our security-first approach and deep understanding of federal IT environments ensure successful implementations that meet all necessary standards and requirements."
            },
            {
              question: "How do you ensure compliance with federal security standards?",
              answer: "We maintain comprehensive knowledge of FedRAMP, FISMA, NIST, and other federal compliance frameworks. Our implementation processes include built-in compliance checks, security controls, and documentation to ensure your ServiceNow instance meets or exceeds all federal security requirements."
            },
            {
              question: "What is your implementation methodology?",
              answer: "Our implementation approach combines ServiceNow best practices with government-specific requirements. We follow a structured methodology that includes thorough requirements gathering, security-focused design, staged implementation, comprehensive testing, and detailed documentation. Throughout the process, we maintain clear communication and regular progress updates."
            },
            {
              question: "Do you provide post-implementation support?",
              answer: "Yes, we offer comprehensive post-implementation support including platform maintenance, optimization services, security updates, and ongoing technical support. Our support models are flexible and can be tailored to your agency's specific needs and requirements."
            },
            {
              question: "How do you handle remote implementations?",
              answer: "Based in Middlebury, CT, we have extensive experience delivering successful remote implementations for government agencies nationwide. We utilize secure collaboration tools and maintain regular communication through approved channels to ensure project success while meeting all security requirements."
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
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-20 md:mb-40 bg-gray-50 py-16"
        id="contact"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Start Your ServiceNow Transformation</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8">Schedule a consultation to discuss how TrustPoint Consulting Group can help optimize your agency&apos;s ServiceNow implementation.</p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="mb-4">Book a time to discuss your ServiceNow needs and learn how we can help.</p>
                <a 
                  href="https://calendly.com/danny-c-gleason/30min" 
                  className="inline-block bg-navy-blue text-white py-3 px-6 rounded-full hover:bg-light-blue transition-colors"
                >
                  Schedule Now
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                <p className="mb-4">Reach out to discuss your specific requirements or questions.</p>
                <a 
                  href="mailto:info@trustpointconsulting.com" 
                  className="inline-block bg-navy-blue text-white py-3 px-6 rounded-full hover:bg-light-blue transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <p className="mb-2">TrustPoint Consulting Group LLC</p>
              <p className="mb-2">Middlebury, CT</p>
              <p className="text-sm text-gray-600">Supporting federal agencies nationwide through secure remote delivery</p>
            </div>
          </div>
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-xl mb-4">TrustPoint Consulting Group</h4>
              <p className="text-sm">Delivering excellence in ServiceNow solutions for federal agencies</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Contact</h4>
              <p className="text-sm">Middlebury, CT</p>
              <a href="mailto:info@trustpointconsulting.com" className="text-sm hover:text-light-blue">info@trustpointconsulting.com</a>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-light-blue">Services</a></li>
                <li><a href="#expertise" className="hover:text-light-blue">Expertise</a></li>
                <li><a href="#faq" className="hover:text-light-blue">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TrustPoint Consulting Group LLC. All rights reserved.</p>
            <p className="text-sm mt-2">ServiceNow and the ServiceNow logo are trademarks and registered trademarks of ServiceNow, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}