import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useRefs from "react-use-refs";
import { Canvas } from "@react-three/fiber";
import {
  View,
  Preload,
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import axios from "axios";
import { ModelComponent } from "./ModelComponent";

const AdoptionPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  
  const { id } = useParams();

  const [pet, setPet] = useState(null);

  const [ref, view] = useRefs();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        console.log(id);
        const response = await axios.get(`http://localhost:8000/pets/${id}`);
        console.log("call", response.data);

        setPet(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/adoption-applications/', {
        user_id: 3, // Replace userId with the actual user ID from your application
        pet_id: id, // Assuming id is the pet's ID
        application_status: 'Pending', // Set initial status as 'Pending' or change it as needed
        application_details: 'New application', // Provide any details if needed
        
        applicant_name: name,
        applicant_address: address,
        applicant_phone_number: phoneNumber,
        applicant_adoption_reason: reason,
      });
  
      console.log('Server response:', response.data);
      navigate('/AdoptionApplications');
  
      // Perform any additional actions after successful submission
      // For example, show a success message, reset form fields, redirect, etc.
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors, show error message to the user, etc.
    }
  }

  return (
    <div ref={ref} className="container">
        {pet ? (
      <div className="card adoption-form">
        <h2 className="adoption-header">Adoption Form</h2>
        <h3>{pet.name}</h3>
        <div ref={view} className="view" />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason for Adoption:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Tell us why you want to adopt"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Canvas eventSource={ref} className="canvas" shadows={true}>
            <View track={view}>
              <Common color="lightblue" />
              <ModelComponent
                scale={pet.model_state.scale * 1.2}
                position={pet.model_state.position}
                rotation={pet.model_state.rotation}
                filePath={pet.model_filename}
              />
              <OrbitControls makeDefault />
            </View>
          </Canvas>
      </div>

      ) : (
        <p>Loading...</p>
      )}
      {/* Rest of your PetPage content */}
      <Link to="/PetSelection">Go Back</Link>
    </div>
  );
};

const Common = ({ color }) => (
    <>

      <PerspectiveCamera makeDefault fov={40} position={[-4, 2, 6]} />
  
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
    </>
  );

export default AdoptionPage;
