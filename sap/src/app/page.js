import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          This is a simple landing page. You can add more content here to
          showcase your products, services, or any other information you'd like
          to feature.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Feature {item}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
