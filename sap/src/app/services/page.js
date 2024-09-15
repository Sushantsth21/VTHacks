import Header from "../_components/header";
import Footer from "../_components/footer";
import Button from "@mui/material/Button";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1
              className="text-6xl font-extrabold text-center mt-16"
              style={{
                background: "linear-gradient(to right, #8b5cf6, #ec4899, #f87171)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
              }}
            >
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Discover how our services can transform your business with cutting-edge technology and personalized solutions.
            </p>
          </div>

          {/* Services Section */}
          <div className="mt-24">
            <h2
              className="text-4xl font-bold text-gray-800 mb-8"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/0*5Zk83_AubW8y3nx5.gif"
                  alt="AI/ML Blockchain Integration"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  AI/ML Blockchain Integration
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Leverage artificial intelligence and machine learning to optimize your processes and integrate blockchain for enhanced security and transparency.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://d1.awsstatic.com/events/aws-hosted-events/2019/APAC/quickstart/AWS-Quick_Start_2019-Animated-Simplified_Backups-300px.169f47ea833f5a7221acbc92a3e5d6fea4b70f14.gif"
                  alt="Improve Cloud Transition"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Improve Cloud Transition
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Smoothly transition to cloud-based infrastructure with our comprehensive solutions, ensuring scalability, flexibility, and efficiency.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://cdn-icons-gif.flaticon.com/12134/12134194.gif"
                  alt="Personalized Support"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Personalized Support
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Receive tailored support and consultancy to meet your specific business needs and drive successful outcomes.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center">
                <img
                  src="https://superstorefinder.net/support/wp-content/uploads/2018/01/elastic.gif"
                  alt="Standardize Customizations"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Standardize Customizations
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Standardize and streamline customizations to enhance efficiency and ensure consistent quality across all projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
