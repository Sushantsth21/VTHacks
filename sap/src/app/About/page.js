import React from 'react';
import Head from 'next/head';
import { Typography, Button, Grid } from '@mui/material';

const AboutPage = () => {
    return (
        <>
            {/* SEO and Head Information */}
            <Head>
                <title>About Us - MIMS</title>
                <meta name="description" content="Learn more about MIMS (Modern Inventory Management Systems), our mission, the team behind it, and our future plans." />
            </Head>
 <div
    className="about-page min-h-screen"
    style={{
        backgroundImage: `url('https://1591292.fs1.hubspotusercontent-na1.net/hubfs/1591292/1672980283885.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
    }}
>
    {/* Darker Opacity Overlay */}
    <div
        style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Slightly darker overlay
            zIndex: -1,
        }}
    ></div>

                {/* Header Section */}
               <div className="about-section bg-white bg-opacity-80 p-8 max-w-4xl mx-auto shadow-lg rounded-b-lg">
    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 animate-gradient">
        About MIMS
    </h1>
    <p className="mt-4 text-gray-700">
        MIMS (Modern Inventory Management Systems) aims to revolutionize the inventory management space by addressing the complexities
        found in traditional SAP-based software systems. Our goal is to streamline workflows, reduce costs, and leverage modern technologies 
        to create a more agile, user-friendly experience.
    </p>
</div>

                

                {/* Improvements Section */}
                <section className="application-overview p-6 text-gray-700 bg-white mt-4 shadow-lg rounded-lg max-w-4xl mx-auto opacity-80">
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Text Section */}
        <div className="flex-1">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-2">
              MIMS (Modern Inventory Management Systems) aims to transform the inventory management landscape by simplifying the complexities of traditional SAP-based software systems. Our long-term vision is to create a platform that not only streamlines workflows and reduces costs but also evolves with the changing technological landscape. By integrating advanced technologies such as AI, machine learning, and blockchain, MIMS seeks to provide businesses with a scalable, cloud-native solution that enhances flexibility, accelerates innovation, and supports long-term growth. Our future goals include expanding customization options, improving migration to next-gen systems like S/4HANA, and continuously optimizing user experience through intuitive design and modular components. We aim to empower organizations by reducing reliance on external consultants and providing standardized, adaptable solutions for the future.
            </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
            <img src="https://mediaim.expedia.com/destination/1/ec524c25b7da5bb0a5900fc021c5f784.jpg" alt="Mission Image" className="rounded-lg shadow-md h-80" />
        </div>
    </div>
</section>


                {/* Team Section */}
                <section className="team bg-white px-52 py-10 mt-4 shadow">
    <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
    <div className="team-members grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Team Member 1 */}
        <div className="team-member bg-gray-50 p-4 rounded-lg shadow">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQH4lY8bx6pQgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709740168360?e=1732147200&v=beta&t=yUI6_abXdDy_bOYPbxqnfXjf94FC5X4AqYLVYUmCZYM" alt="Member 1" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 font-bold text-lg">Sushant Shrestha</h3>
            <p className="text-sm text-gray-600">Role - Backend Developer.</p>
        </div>
        {/* Team Member 2 */}
        <div className="team-member bg-gray-50 p-4 rounded-lg shadow">
            <img src="https://media.licdn.com/dms/image/v2/D5635AQF_izM0LmXHRA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724264341011?e=1726966800&v=beta&t=_CVKbbAhnyHR3-gulymjbsU6pr4qG79VneYe_zjRavI" alt="Member 2" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 font-bold text-lg">Aaditya Khanal</h3>
            <p className="text-sm text-gray-600">Role - Frontend/Azure(App Service, Invoice OCR)/Backend.</p>
        </div>
        {/* Team Member 3 */}
        <div className="team-member bg-gray-50 p-4 rounded-lg shadow">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHYasHLR6VYAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711034969485?e=1732147200&v=beta&t=fnUWI528LNFR7lwSW66QJsa0MAq4vUDedH43HFO3PVU" alt="Member 3" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 font-bold text-lg">Gaurab Baral</h3>
            <p className="text-sm text-gray-600">Role - Data Visualization/Database,Azure(fraud detection,RAG chatbot)</p>
        </div>
        {/* Team Member 4 */}
        <div className="team-member bg-gray-50 p-4 rounded-lg shadow">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQEhuQ7Zg7G0_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716025376692?e=1732147200&v=beta&t=jBSmjcPiygzpWJdF0OB-324y-9A61jeVUod8C2EkV7U" alt="Member 4" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 font-bold text-lg">Mithlesh Sah</h3>
            <p className="text-sm text-gray-600">Role - Frontend</p>
        </div>
    </div>
</section>

                {/* Footer Section */}
                <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Main St, City, Country</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: <a href="mailto:info@example.com" className="text-gray-300 hover:text-white transition-colors duration-300">info@example.com</a></p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">&copy; 2024 MIMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
            </div>
        </>
    );
};

export default AboutPage;
