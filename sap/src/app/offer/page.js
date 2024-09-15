"use client"

import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { LinkedIn, Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';
import Header from "../_components/header.js"

const OfferPage = () => {
    return (
        <div>
            {/* Offers Section with Background and Dark Fade at Bottom */}
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    background: "linear-gradient(to right, #ffff, #ec4899, #ffff)",
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
                    <Header />
                    <div className="container mx-auto px-4 py-16">
                        
                        <Typography
                            variant="h2"
                            className="text-center font-bold mb-8 mt-8"
                            style={{
                                color: '#ffffff', // White color for better contrast
                                fontWeight: 700,
                                fontSize: '2.5rem', // Larger font size
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
                            }}
                        >
                            Select a Plan That Fits Your Needs
                        </Typography>
                        
                        {/* Deals and Offers Section */}
                        <section className="relative mb-16 max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-gray-800 text-white">
                            <Typography variant="h5" className="font-bold mb-8 text-center">
                                Current Deals and Offers
                            </Typography>
                            <Grid container spacing={3}>
                                {/* Offer 1 */}
                                <Grid item xs={12} md={4}>
                                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                        <Typography variant="h6" className="font-bold mb-4">
                                            Premium Plan
                                        </Typography>
                                        <Typography className="mb-4">
                                            Enjoy all the premium features with unlimited access and 24/7 support.
                                        </Typography>
                                        <Typography variant="h6" className="mb-4">
                                            <span style={{ textDecoration: 'line-through' }}>$80.00 / month</span> $49.99 / month
                                        </Typography>
                                        <Button variant="contained" color="primary" className="bg-indigo-600 hover:bg-indigo-700">
                                        Pay Now
                                        </Button>
                                    </div>
                                </Grid>
                                {/* Offer 2 */}
                                <Grid item xs={12} md={4}>
                                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                        <Typography variant="h6" className="font-bold mb-4">
                                            Basic Plan
                                        </Typography>
                                        <Typography className="mb-4">
                                            Ideal for small businesses with essential features and support.
                                        </Typography>
                                        <Typography variant="h6" className="mb-4">
                                            <span style={{ textDecoration: 'line-through' }}>$40.00 / month</span> $29.99 / month
                                        </Typography>
                                        <Button variant="contained" color="primary" className="bg-indigo-600 hover:bg-indigo-700">
                                            Pay Now
                                        </Button>
                                    </div>
                                </Grid>
                                {/* Offer 3 */}
                                <Grid item xs={12} md={4}>
                                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                        <Typography variant="h6" className="font-bold mb-4">
                                            Free Trial
                                        </Typography>
                                        <Typography className="mb-4">
                                            Try out our services with a 14-day free trial. No commitment required.
                                        </Typography>
                                        <Button variant="contained" color="primary" className="bg-indigo-600 hover:bg-indigo-700">
                                            Start Free Trial
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </section>

                        {/* Coming Soon Section */}
                        <section className="relative mb-16 max-w-4xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
                            <Typography variant="h5" className="font-bold mb-8 text-center">
                                Coming Soon
                            </Typography>
                            <Typography className="mb-4 text-center">
                            Generate a personalized AI-powered quote based on your interests and preferences.
                            </Typography>
                            <Typography className="text-center">
                                <Button variant="contained" color="secondary" className="bg-red-600 hover:bg-red-700">
                                    Subscribe for Updates
                                </Button>
                            </Typography>
                        </section>
                    </div>
                </div>

                {/* Join Talent and Socials Section with Background Video */}
                <div
                    className="relative w-full"
                    style={{
                        height: '600px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Darker Opacity Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                    {/* Content over the video with adjusted padding */}
                    <div className="relative z-20 container mx-auto text-center py-20 px-4 text-white">

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
                                <a href="https://angel.co/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                                    <img src="https://cdn.worldvectorlogo.com/logos/angel-co.svg" alt="AngelList" className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPage;
