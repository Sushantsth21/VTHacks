"use client"

import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { LinkedIn, Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';
import Header from "../_components/header.js"

const OfferPage = () => {
    const handlePayment = (stripeLink) => {
        window.location.href = stripeLink;
    };

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
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '2.5rem',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className="bg-indigo-600 hover:bg-indigo-700"
                                            onClick={() => handlePayment('https://buy.stripe.com/test_fZe9E2eBX6u3a1qaEG')}
                                        >
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
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className="bg-indigo-600 hover:bg-indigo-700"
                                            onClick={() => handlePayment('https://buy.stripe.com/test_fZe9E2eBX6u3a1qaEG')}
                                        >
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
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className="bg-indigo-600 hover:bg-indigo-700"
                                            onClick={() => handlePayment('/')}
                                        >
                                            Start Free Trial
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </section>

                        {/* Rest of the component remains unchanged */}
                        {/* ... */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPage;