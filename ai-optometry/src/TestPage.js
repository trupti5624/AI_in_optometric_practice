import React, { useState } from 'react';

const TestPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        bloodGroup: '',
        phone: '',
        diabetes: ''
    });
    const [errors, setErrors] = useState({}); // State to hold error messages
    const [isCameraActive, setIsCameraActive] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear errors on change
    };

    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^[0-9]{10}$/; // Regex for validating phone number (10 digits)

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.age || formData.age < 1) newErrors.age = "Please enter a valid age";
        if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required";
        if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = "Please enter a valid 10-digit phone number";
        if (formData.diabetes === '') newErrors.diabetes = "Please select if you have diabetes";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle successful form submission
            console.log('Form submitted successfully:', formData);
        }
    };

    const accessCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                const video = document.querySelector('video');
                video.srcObject = stream;
                setIsCameraActive(true);
            })
            .catch((err) => {
                console.error("Error accessing camera: ", err);
            });
    };

    return (
        <div>
            <h2>Eye Test</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                {errors.name && <p className="error">{errors.name}</p>}

                <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
                {errors.age && <p className="error">{errors.age}</p>}

                <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required />
                {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}

                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <div>
                    <p>Do you have Diabetes?</p>
                    <label>
                        <input
                            type="radio"
                            name="diabetes"
                            value="yes"
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="diabetes"
                            value="no"
                            onChange={handleChange}
                        />
                        No
                    </label>
                    {errors.diabetes && <p className="error">{errors.diabetes}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
            <div>
                <button onClick={accessCamera}>Access Camera</button>
                {isCameraActive && <video width="400" height="300" autoPlay></video>}
            </div>
        </div>
    );
};

export default TestPage;
