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
  Lock,
  FileText,
  Briefcase,
  Globe,
  MessageCircle
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
      <meta name="description" content="Specialized ServiceNow consulting and implementation services for government agencies. Expert ITSM, Security Operations, and IRM solutions that meet federal compliance standards." />
      <meta name="keywords" content="ServiceNow, Federal Consulting, ITSM, GRC, Security Operations, Government IT Solutions, FedRAMP" />
      <link rel="canonical" href="https://trustpointconsulting.co" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content="TrustPoint Consulting Group | Premier ServiceNow Solutions" />
      <meta property="og:description" content="Specialized ServiceNow consulting and implementation services for government agencies." />
      <meta property="og:url" content="https://trustpointconsulting.co" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TrustPoint Consulting Group" />
      <meta name="twitter:description" content="Specialized ServiceNow consulting for federal agencies." />
      
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <nav className="bg-navy-blue text-white py-4 relative z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/tpc-transparent.png"
            alt="TrustPoint Consulting Group Logo"
            width={60}
            height={60}
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
          <a href="#what-we-do" className="block md:inline hover:text-light-blue transition-colors py-2">What we do</a>
          <a href="#specialization" className="block md:inline hover:text-light-blue transition-colors py-2">Specialization</a>
          {/* <a href="#values" className="block md:inline hover:text-light-blue transition-colors py-2">Values</a> */}
          <a href="#contact" className="block md:inline hover:text-light-blue transition-colors py-2">Contact</a>
        </div>
      </div>
    </nav>

    <main className="container mx-auto px-4 py-8 relative z-10">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-20 md:mb-32 min-h-[70vh] flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-6 tracking-tight max-w-4xl">
          Domain Experts Delivering Federal ServiceNow Excellence
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
          We combine deep federal expertise with ServiceNow solutions to modernize and strengthen mission-critical operations across government agencies.
        </p>
        <a href="#contact" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
          Partner With Us
          <ArrowRight className="ml-2" />
        </a>
      </motion.header>

      <motion.section 
        id="what-we-do"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 bg-gray-50 rounded-lg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-navy-blue mb-8">WHAT WE DO</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our philosophy is to lead with a people-first approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-light-blue mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-4">Implementation</h4>
              <p className="text-gray-600">Each customer is unique and so is our approach. We tailor each implementation based on the desired business outcomes and organizational needs.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-light-blue mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-4">Optimization</h4>
              <p className="text-gray-600">With every release of ServiceNow® comes new functionality and improvements</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FileText className="w-12 h-12 text-light-blue mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-4">Upgrade Support</h4>
              <p className="text-gray-600">With the version compliance requirements from ServiceNow® upgrading can seem daunting</p>
            </div>
          </div>
        </div>
      </motion.section>


       

        <motion.section
      id="values"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-navy-blue mb-12">OUR CORE VALUES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-12 h-12 mx-auto text-light-blue mb-4" />
            <h3 className="font-semibold text-xl mb-2">Integrity</h3>
            <p className="text-gray-700">We work to build trust through transparent communication, on-time delivery, and unwavering ethical standards.</p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 mx-auto text-light-blue mb-4" />
            <h3 className="font-semibold text-xl mb-2">Pursuit of Excellence</h3>
            <p className="text-gray-700">We&apos;ve mastered government requirements and compliance standards to deliver superior solutions.</p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 mx-auto text-light-blue mb-4" />
            <h3 className="font-semibold text-xl mb-2">People-First Approach</h3>
            <p className="text-gray-700">We focus on your organization&apos;s needs to deliver ServiceNow solutions that enhance productivity and user satisfaction.</p>
          </div>
        </div>
      </div>
    </motion.section>


    <motion.section
        id="specialization"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-20 bg-white"
        >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-navy-blue mb-8">SPECIALIZATION</h2>
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-12">ServiceNow®</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-light-blue mb-6 mx-auto" />
                <h4 className="text-2xl font-semibold mb-4">IT Service Management</h4>
                <p className="text-gray-700 mb-6">
                  We implement ServiceNow ITSM processes aligned with ITIL best practices, delivering structured incident management, change control, problem management, and service request fulfillment, all configured to meet federal security requirements.
                </p>
                <ul className="text-left list-disc pl-6">
                  <li>Incident Management</li>
                  <li>Change Management</li>
                  <li>Problem Management</li>
                  <li>Service Catalog Development</li>
                  <li>Knowledge Management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-light-blue mb-6 mx-auto" />
                <h4 className="text-2xl font-semibold mb-4">Integrated Risk Management</h4>
                <p className="text-gray-700 mb-6">
                  We leverage ServiceNow GRC modules to implement continuous monitoring, automated control testing, and real-time risk scoring aligned with federal frameworks and mandates.
                </p>
                <ul className="text-left list-disc pl-6">
                  <li>Policy & Compliance Management</li>
                  <li>Risk Assessment & Monitoring</li>
                  <li>Audit Management</li>
                  <li>Vendor Risk Management</li>
                  <li>Federal Compliance Frameworks</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <Code className="w-12 h-12 text-light-blue mb-6 mx-auto" />
                <h4 className="text-2xl font-semibold mb-4">Platform Management</h4>
                <p className="text-gray-700 mb-6">
                  We optimize instance performance through automated testing, release management, and scalable architecture design while considering ATO requirements and security boundaries.
                </p>
                <ul className="text-left list-disc pl-6">
                  <li>Custom Application Development</li>
                  <li>Platform Upgrades</li>
                  <li>Security Controls Implementation</li>
                  <li>Performance Optimization</li>
                  <li>Integration Services</li>
                </ul>
              </div>
            </div>
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
              question: "What makes TrustPoint the right partner for federal ServiceNow projects?",
              answer: "As a ServiceNow-focused federal contractor, we bring three key advantages: 1) Our team holds current ServiceNow certifications and security clearances, 2) We have direct experience with federal ATO processes and security requirements, and 3) We maintain a proven track record of successful federal implementations."
            },
            // {
            //   question: "How do you address FedRAMP and security compliance?",
            //   answer: "We integrate compliance at every project phase: 1) Initial assessment against FedRAMP, FISMA, and NIST requirements, 2) Implementation of required security controls and documentation, 3) Regular security testing and validation, and 4) Continuous monitoring to maintain compliance. Our team includes certified security professionals who understand both ServiceNow and federal security frameworks."
            // },
            // {
            //   question: "What can agencies expect during implementation?",
            //   answer: "Our federal-focused implementation process follows five phases: 1) Requirements and security assessment, 2) Architecture and compliance design, 3) Phased implementation with regular testing, 4) User training and change management, and 5) Go-live support and documentation. Each phase includes clear deliverables and compliance checkpoints."
            // },
            // {
            //   question: "What ongoing support options do you provide?",
            //   answer: "We offer three tiers of post-implementation support: 1) Basic platform maintenance and security updates, 2) Enhanced support with optimization and training services, and 3) Comprehensive managed services including 24/7 support and continuous improvement. All support tiers maintain federal security compliance standards."
            // },
            // {
            //   question: "How do you ensure project success with remote delivery?",
            //   answer: "Our remote delivery model includes: 1) Secure, FedRAMP-authorized collaboration tools, 2) Regular status meetings and progress tracking, 3) Clear communication protocols through approved channels, and 4) On-site visits for critical project phases when required. We've successfully delivered projects remotely to agencies across all 50 states."
            // },
            {
              question: "Who is the ideal partner for TrustPoint Consulting Group?",
              answer: "We are specifically focused on partnering with prime contractors who are leading ServiceNow implementations in the federal space. Our ideal teaming partners are: 1) Prime contractors managing ITSM, Platform Management, or GRC implementations, 2) Federal system integrators seeking specialized ServiceNow expertise, and 3) Large contractors looking for qualified small business partners. We're also open to exploring Joint Venture opportunities and Contractor Team Arrangements (CTAs) with complementary service providers."
            },
            {
              question: "Are there engagements TrustPoint doesn't pursue?",
              answer: "At this time, we do not pursue direct prime contracts with federal agencies. Instead, we focus exclusively on subcontracting opportunities and strategic partnerships. This allows us to: 1) Leverage our ServiceNow expertise while partnering with established prime contractors, 2) Maintain focus on technical delivery excellence rather than prime contract management, and 3) Build strong, lasting partnerships within the federal contracting community."
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
                  href="mailto:dan@trustpointconsulting.co" 
                  className="inline-block bg-navy-blue text-white py-3 px-6 rounded-full hover:bg-light-blue transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <p className="mb-2">Trustpoint Consulting Group LLC</p>
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
              <a href="mailto:dan@trustpointconsulting.co" className="text-sm hover:text-light-blue">info@trustpointconsulting.com</a>
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