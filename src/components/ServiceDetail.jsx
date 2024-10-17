import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Sample service data
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs."
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces."
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases."
  },
  {
    id: 4,
    title: "Full-stack Development",
    description: "Combining both frontend and backend development skills."
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));
  const navigate = useNavigate();

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">{service.title}</h2>
        <p className="text-lg text-gray-300 mb-4">{service.description}</p>
        <button 
          onClick={() => navigate(-1)} 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
          Back
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;
