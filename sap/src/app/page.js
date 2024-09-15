"use client"; // Add this at the top to indicate it's a client-side component

import React, { useState } from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useSpring, animated } from "@react-spring/web";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setMessage("");
        // Optionally, you can add logic here to display a success message to the user
      } else {
        console.error("Failed to send message");
        // Optionally, you can add logic here to display an error message to the user
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, you can add logic here to display an error message to the user
    }
  };

  // Bounce animation for chatbot icon
  const bounceAnimation = {
    animation: "bounce 1.5s infinite",
  };

  // Slide-in animation for chatbot dialog
  const dialogAnimation = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(100%)",
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <div className="mb-16">
            <h1
              className="text-6xl font-extrabold text-center mt-16"
              style={{
                background:
                  "linear-gradient(to right, #8b5cf6, #ec4899, #f87171)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Modern Inventory Management System (MIMS)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Streamline your inventory processes with MIMS – a powerful,
              intuitive, and cloud-based system designed to enhance your supply
              chain operations.
            </p>
            <Button
              variant="contained"
              color="primary"
              className="mt-8 px-6 py-3"
              style={{ backgroundColor: "#007bff" }}
            >
              Get Started
            </Button>
          </div>

          {/* Key Features Section */}
          <div className="mt-24">
            <h2
              className="text-4xl font-bold text-gray-800 mb-8"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Why Choose MIMS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://cdn.dribbble.com/users/13496/screenshots/1327531/analytics-app.gif"
                  alt="Feature 1"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Real-Time Analytics
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Gain actionable insights with our powerful analytics tools to
                  track, forecast, and manage inventory in real-time.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://cdn.dribbble.com/users/6261056/screenshots/14660465/media/a608639b24d21d75eae965deb1a9f797.gif"
                  alt="Feature 2"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Automated Reporting
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Save time with automated inventory reports, allowing you to
                  focus on strategic decisions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://cdn.dribbble.com/users/826792/screenshots/2267906/cloud-security-elias-stern.gif"
                  alt="Feature 3"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Cloud-Based & Secure
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Manage your inventory anytime, anywhere, with cloud-native
                  architecture and top-tier security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Customer Support Button */}
      <IconButton
        onClick={handleClickOpen}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          ...bounceAnimation,
        }}
      >
        <SupportAgentIcon fontSize="large" />
      </IconButton>

      {/* Chatbot Dialog - Positioned near icon with enough width */}
      <animated.div style={dialogAnimation}>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              position: "absolute",
              bottom: "80px",
              right: "80px",
              margin: 0,
              width: "350px", // Adjust width for enough space
              padding: "20px", // Add padding for better UX
            },
          }}
        >
          <DialogTitle>Customer Support Chat</DialogTitle>
          <DialogContent>
            <p>Welcome! How can we assist you today?</p>
            <TextField
              fullWidth
              label="Ask a question"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              value={message}
              onChange={handleMessageChange} // Allows a decent message box
            />
            <Button
              variant="contained"
              color="primary"
              className="mt-4"
              style={{ backgroundColor: "#007bff" }}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </DialogContent>
        </Dialog>
      </animated.div>

      <Footer />
    </div>
  );
}
