import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Hardwood Flooring",
      description: "Classic elegance with modern durability. Perfect for any room in your home.",
      icon: "🌳"
    },
    {
      title: "Laminate Flooring",
      description: "Affordable luxury that mimics the look of real wood with easy maintenance.",
      icon: "🪵"
    },
    {
      title: "Tile Installation",
      description: "Versatile and durable options for kitchens, bathrooms, and entryways.",
      icon: "🧱"
    },
    {
      title: "Carpet & Rugs",
      description: "Soft, comfortable flooring solutions for bedrooms and living areas.",
      icon: "🟫"
    }
  ];

  const features = [
    "Professional installation",
    "Quality materials",
    "Competitive pricing",
    "Free estimates",
    "Warranty included",
    "Local expertise"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Space with
            <span className="text-amber-400 block">Premium Flooring</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Professional flooring installation and services. From hardwood to tile, 
            we bring quality craftsmanship to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Flooring Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in all types of flooring installation and can handle projects of any size
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Best Choice Flooring?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Best Choice Flooring</h3>
              <p className="text-gray-300">
                Professional flooring solutions for residential and commercial projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-300 mb-2">📞 (555) 123-4567</p>
              <p className="text-gray-300 mb-2">📧 info@bestchoiceflooring.com</p>
              <p className="text-gray-300">📍 Serving the local area</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Best Choice Flooring. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
