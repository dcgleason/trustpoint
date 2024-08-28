import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, message, isSuccess }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4 ${
              isSuccess ? 'border-light-blue' : 'border-red-500'
            } border-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-2xl font-semibold mb-4 ${
              isSuccess ? 'text-light-blue' : 'text-red-500'
            }`}>
              {isSuccess ? 'Success!' : 'Oops!'}
            </h2>
            <p className="text-navy-blue mb-6">{message}</p>
            <button
              onClick={onClose}
              className="bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-light-blue transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;