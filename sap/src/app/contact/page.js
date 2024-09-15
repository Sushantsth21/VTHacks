import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { LinkedIn, Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';

const ContactPage = () => {
    return (
         <div>
            {/* Business Inquiries Section with Background and Dark Fade at Bottom */}
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* Apply the fade at the bottom of the image */}
                <div
                    style={{
                        position: 'relative',
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div className="container mx-auto px-4 py-16">
                        <Typography variant="h4" className="text-center font-bold mb-8" style={{ color: 'white', textTransform: 'uppercase', fontWeight: 300 }}>
                            Business Inquiries
                        </Typography>
                        <section
                            className="relative mb-16 max-w-xl mx-auto p-8 shadow-lg rounded-lg"
                            style={{
                                backgroundImage: `url('https://www.virginiabusiness.com/wp-content/uploads/2024/02/Costar_Alamy-386x543.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-70 rounded-lg" aria-hidden="true"></div>

                            {/* Form Content */}
                            <div className="relative z-10 p-8 text-white">
                                <Grid container spacing={3} justifyContent="center">
                                    {/* Your Name */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            variant="outlined"
                                            className="mb-4"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Your Email */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Email"
                                            variant="outlined"
                                            className="mb-4"
                                            type="email"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Company Name */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Company Name"
                                            variant="outlined"
                                            className="mb-4"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Company Address */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Company Address"
                                            variant="outlined"
                                            className="mb-4"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Business Phone Number */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Business Phone Number"
                                            variant="outlined"
                                            className="mb-4"
                                            type="tel"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Message */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Your Message"
                                            variant="outlined"
                                            className="mb-4"
                                            required
                                            InputLabelProps={{ style: { color: 'white' } }}
                                            InputProps={{
                                                style: { color: 'white', borderColor: 'white' },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>

                                    {/* Submit Button */}
                                    <Grid item xs={12} className="text-center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="bg-indigo-600 hover:bg-indigo-700"
                                            type="submit"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Join Talent and Socials Section with Background Video */}
                <div
  className="relative w-full"  // Set the width to full width of the screen
  style={{
    height: '600px',  // Keep a fixed height or use `height: 100vh` for full viewport height
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Background Video */}
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover z-0"  // Cover the entire area
    src="https://www.youtube.com/embed/Hfzq6NDd3mU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=Hfzq6NDd3mU"
    title="Background Video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    style={{
      objectFit: 'cover',  // Ensures no black space on sides
      width: '100vw',  // Viewport width
      height: '99vh'  // Viewport height
    }}
  ></iframe>

                    {/* Darker Opacity Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                    {/* Content over the video with adjusted padding */}
                    <div className="relative z-20 container mx-auto text-center py-20 px-4 text-white">
                        <Typography variant="h4" className="font-bold mb-8">
                            Join Our Talent Network
                        </Typography>
                        <Typography className="mb-8">
                            We are looking for passionate people to help us grow. Explore opportunities with our university recruiting and professional career programs.
                        </Typography>
                        <Button variant="contained" color="primary" className="bg-green-600 hover:bg-green-700">
                            Join Our Talent Network
                        </Button>

                        {/* Social Media and Career Services Section */}
                        <div className="mt-16">
                            <Typography variant="h4" className="font-bold mb-8">
                                Connect with Us
                            </Typography>
                            <div className="flex justify-center flex-wrap space-x-6">
                                {/* Social Media Icons with white background */}
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <LinkedIn fontSize="large" className="text-gray-500 hover:text-indigo-500 transition transform hover:scale-110" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <Twitter fontSize="large" className="text-gray-500 hover:text-blue-400 transition transform hover:scale-110" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <Instagram fontSize="large" className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <Facebook fontSize="large" className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <YouTube fontSize="large" className="text-gray-500 hover:text-red-600 transition transform hover:scale-110" />
                                </a>

                                {/* Custom Icons for Career Services */}
                                <a href="https://www.joinhandshake.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2023/01/handshake-logo.png" alt="Handshake" className="h-8 w-8" />
                                </a>
                                <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/03/Indeed-Logo-2004.png" className="h-8 w-8" />
                                </a>
                                <a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <img src="https://static-00.iconduck.com/assets.00/glassdoor-icon-1024x1024-qn0ai0xz.png" alt="Glassdoor" className="h-8 w-8" />
                                </a>
                                <a href="https://www.greenhouse.io/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <img src="https://cdn.prod.website-files.com/62fe5b9ef9e612fe4fed7ff1/63bf412289101209d218c1b1_g-icon-evergreen.png" alt="Greenhouse" className="h-8 w-8" />
                                </a>
                                <a href="https://www.career.vt.edu/" target="_blank" rel="noopener noreferrer" className="p-2 ">
                                    <img src="https://media.licdn.com/dms/image/v2/D4E34AQGTFZQHnVTYRQ/ugc-proxy-shrink_800/ugc-proxy-shrink_800/0/1671458633840?e=2147483647&v=beta&t=YOhL9yEa1WKts3hNtd_lo0JCaqyXfQT49YBNft4rGPE" alt="Virginia Tech Career Services" className="h-8 w-14" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
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
        </div>
    );
};

export default ContactPage;
