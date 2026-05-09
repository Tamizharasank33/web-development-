import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const sendmessage = async (e) => {
    e.preventDefault();


    try {

      await axios.post(
        'http://localhost:5000/api/contact',
        formData
      );

      alert('Message Sent Successfully');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {

      console.log(error);

      alert('Server Error');
    }
  };


  return (

    <div>

      <nav className="navbar">

        <h1>outpro.india</h1>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

        </div>

      </nav>

      <section className="hero" id="home">

        <div className="overlay">

          <h1>
            WE PLAN,
            YOU CELEBRATE
          </h1>

          <p>
            Professional Sports Event Management
          </p>

          <button>
            Explore Events
          </button>

        </div>

      </section>

      <section className="about" id="about">

        <h2>About Us</h2>

        <p>
          outpro.india provides sports event management,
          tournaments, adventure activities and corporate
          sports solutions across India.
        </p>

      </section>

      <section className="contact" id="contact">

        <h2>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button onClick={sendmessage}>
          Send Message
        </button>

      </section>

      <footer>

        <p>
          © 2026 outpro.india
        </p>

      </footer>

    </div>
  );
}

export default App;