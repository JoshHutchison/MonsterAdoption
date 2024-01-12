import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdoptionApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsResponse = await axios.get('http://localhost:8000/adoption-applications');
        const applicationsData = applicationsResponse.data;

        const applicationsWithPets = await Promise.all(applicationsData.map(async application => {
          const petResponse = await axios.get(`http://localhost:8000/pets/${application.pet_id}`);
          const petData = petResponse.data;

          return { ...application, pet: petData };
        }));

        setApplications(applicationsWithPets);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/adoption-applications/${id}`);
      const updatedApplications = applications.filter(app => app.id !== id);
      setApplications(updatedApplications);
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  return (
    <div className="container-applications">
      <h1>Adoption Applications</h1>
      {applications.map(application => (
        <div key={application.id} className="application-card">
          <h3>Application ID: {application.id}</h3>
          <div className="application-details">
            {/* <p><span className="key-value">User ID:</span>{application.user_id}</p> */}
            <p><span className="key-value">Pet ID:</span>{application.pet_id}</p>
            <p><span className="key-value">Status:</span>{application.application_status}</p>
            <p><span className="key-value">Details:</span>{application.application_details}</p>
            <p><span className="key-value">Name:</span>{application.applicant_name}</p>
            <p><span className="key-value">Address:</span>{application.applicant_address}</p>
            <p><span className="key-value">Phone Number:</span>{application.applicant_phone_number}</p>
            <p><span className="key-value">Adoption Reason:</span>{application.applicant_adoption_reason}</p>
            <button onClick={() => handleDelete(application.id)} className="delete-btn">
            Delete
          </button>
          </div>
          {/* Display pet details */}
          <div className="pet-details">
            <h4>Pet Details:</h4>
            <p><span className="key-value">Name:</span>{application.pet.name}</p>
            <p><span className="key-value">Species:</span>{application.pet.species}</p>
            <p><span className="key-value">Breed:</span>{application.pet.breed}</p>
            <p><span className="key-value">Age:</span>{application.pet.age}</p>
            <p><span className="key-value">Description:</span>{application.pet.description}</p>
            <p><span className="key-value">Adoption Status:</span>{application.pet.adoption_status}</p>
          </div>
          <hr className="hr-line" />
        </div>
      ))}
    </div>
  );
};

export default AdoptionApplications;
