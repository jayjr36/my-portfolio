import React from 'react';

const Modal = ({ app, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-[600px] w-full max-h-[80vh] overflow-y-auto">
        
        {/* App Title */}
        <h2 className="text-2xl font-bold mb-4">{app.name}</h2>

        {/* Gallery of images in a row */}
        <div className="flex space-x-4 mb-4 overflow-x-auto">
          {app.gallery.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`App screenshot ${index + 1}`} 
              className="rounded-lg h-48 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* App Description */}
        <p className="text-gray-700 mb-4">{app.description}</p>

        {/* Close Button */}
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
