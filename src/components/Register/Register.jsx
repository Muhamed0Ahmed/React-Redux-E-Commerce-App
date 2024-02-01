
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss"

function Register() {
    // initialize variable for controlled component
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [errors, setErrors] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = [];

        if (!formData.name) {
            newErrors.push('Name is required.');
        }

        if (!formData.email) {
            newErrors.push('Email is required.');
        } else if (!isValidEmail(formData.email)) {
            newErrors.push('Invalid email format.');
        }

        if (!formData.password) {
            newErrors.push('Password is required.');
        } else if (formData.password.length < 8) {
            newErrors.push('Password must be at least 8 characters long.');
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.push('Passwords do not match.');
        }
        if(!formData.terms){
            newErrors.push('should you to excepted')
        }

        setErrors(newErrors);

        return newErrors.length === 0;
    };

    const isValidEmail = (email) => {
        // Basic email format validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (validateForm()) {
            const admin = await fetch("http://localhost:8000/api/users/register", {
                method:"POST",
                body:JSON.stringify(formData),
                headers:{
                  "content-type":"application/json"
                }
              }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

        } else {
            console.log('Registration failed. Please fix the following errors:', errors);
        }
    };

    return (
        <div className='register-page'>
            <div className="container">
                <div className="content-page">
                    <div>
                        <h1> Amazona</h1>
                    </div>
                    <form>
                        <h2>create account</h2>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                User Name
                            </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                            
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                            
                        </div>
                        <div className="form-group" >
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                          
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input type="password" id='confirm-password' name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                          
                        </div>
                        <div className="form-group" >
                            <div className="terms">
                                <input type="checkbox" id="check-terms" defaultChecked={formData.terms} onClick={e => setFormData({
                                    ...formData,
                                    terms: !formData.terms
                                })} />
                                <label htmlFor="check-terms">I understand and eccepted </label>
                            </div>
                            
                        </div>

                        <div className='btn-submit'>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="have-account">If you have accout , please <Link to="/login">Log In</Link></div>
                    </form>
                    {errors.length > 0 && (
                        <div style={{ color: 'red', marginTop: '10px' }}>
                            {errors.map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}



                        </div>
                    )}
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Register;