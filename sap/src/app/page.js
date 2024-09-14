import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="flex-grow container mb-20 px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 mt-20">
            Find Your Dream Rental Home Today
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Discover world-class rental properties that fit your lifestyle and budget. 
            Browse our listings to find the perfect place for you.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Browse Properties
          </button>
        </div>

        {/* Property Listings Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Card 1 - Right Aligned */}
            <div className="flex justify-end">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full md:w-2/3 lg:w-1/2">
                <img
                  src="https://via.placeholder.com/400x250" // Replace with real image URL
                  alt="Property 1"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Modern Apartment 1
                </h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 - Left Aligned */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full md:w-2/3 lg:w-1/2">
                <img
                  src="https://via.placeholder.com/400x250" // Replace with real image URL
                  alt="Property 2"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Cozy House 2
                </h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 - Right Aligned */}
            <div className="flex justify-end">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full md:w-2/3 lg:w-1/2">
                <img
                  src="https://via.placeholder.com/400x250" // Replace with real image URL
                  alt="Property 3"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Luxury Villa 3
                </h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Add more cards if needed */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
