import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const services = [
    {
      title: "Vinly Installation",
      description: "Classic elegance with modern durability. Perfect for any room in your home.",
      icon: "🌳"
    },
    {
      title: "Laminate Installation",
      description: "Affordable luxury that mimics the look of real wood with easy maintenance.",
      icon: "🪵"
    },
    {
      title: "Carpet Installation",
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
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Space with
            <span className="text-amber-700 block">Premium Flooring</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Premium flooring installation backed by 20+ years of experience. Hardwood, laminate, tile, and more. Your project gets the expert attention it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Flooring Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in all types of flooring installation and can handle projects of any size
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Best Choice Flooring?
            </h2>
                      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional results and customer satisfaction
          </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let&apos;s discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-700 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
