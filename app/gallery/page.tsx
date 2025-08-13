import Link from "next/link";
import Footer from "../components/Footer";

export default function Gallery() {
  const categories = [
    {
      name: "Hardwood",
      projects: [
        { id: 1, title: "Oak Hardwood Living Room", description: "Classic oak hardwood installation in a modern living room", image: "🌳" },
        { id: 2, title: "Maple Hardwood Kitchen", description: "Light maple hardwood for a bright, open kitchen space", image: "🌳" },
        { id: 3, title: "Walnut Hardwood Bedroom", description: "Rich walnut hardwood creating a warm, elegant bedroom", image: "🌳" },
        { id: 4, title: "Cherry Hardwood Dining Room", description: "Beautiful cherry hardwood for formal dining area", image: "🌳" },
      ]
    },
    {
      name: "Laminate",
      projects: [
        { id: 5, title: "Gray Laminate Living Room", description: "Modern gray laminate flooring for contemporary homes", image: "🪵" },
        { id: 6, title: "Oak Laminate Family Room", description: "Durable oak laminate perfect for busy family spaces", image: "🪵" },
        { id: 7, title: "White Laminate Kitchen", description: "Clean white laminate for a bright, modern kitchen", image: "🪵" },
        { id: 8, title: "Brown Laminate Office", description: "Professional brown laminate for home office", image: "🪵" },
      ]
    },
    {
      name: "Tile",
      projects: [
        { id: 9, title: "Ceramic Tile Bathroom", description: "Elegant ceramic tile installation in master bathroom", image: "🧱" },
        { id: 10, title: "Porcelain Tile Kitchen", description: "Durable porcelain tile for high-traffic kitchen areas", image: "🧱" },
        { id: 11, title: "Stone Tile Entryway", description: "Natural stone tile creating an impressive entry", image: "🧱" },
        { id: 12, title: "Glass Tile Backsplash", description: "Modern glass tile backsplash in contemporary kitchen", image: "🧱" },
      ]
    },
    {
      name: "Carpet",
      projects: [
        { id: 13, title: "Plush Carpet Bedroom", description: "Soft, plush carpet for ultimate bedroom comfort", image: "🟫" },
        { id: 14, title: "Berber Carpet Family Room", description: "Durable Berber carpet for active family spaces", image: "🟫" },
        { id: 15, title: "Patterned Carpet Living Room", description: "Elegant patterned carpet adding character to living room", image: "🟫" },
        { id: 16, title: "Stair Carpet Runner", description: "Beautiful stair carpet runner for safety and style", image: "🟫" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our completed flooring projects and see the quality craftsmanship 
              that makes Best Choice Flooring the premier choice for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                {category.name} Projects
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-200">
                    <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <span className="text-6xl">{project.image}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Transformations That Speak for Themselves
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See the dramatic before and after results of our flooring installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Before</h3>
              <div className="h-64 bg-slate-300 rounded flex items-center justify-center">
                <span className="text-4xl text-slate-500">📷</span>
              </div>
              <p className="text-slate-600 text-center mt-4">
                Old, worn-out flooring that needed replacement
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">After</h3>
              <div className="h-64 bg-amber-200 rounded flex items-center justify-center">
                <span className="text-4xl text-amber-700">✨</span>
              </div>
              <p className="text-slate-600 text-center mt-4">
                Beautiful new flooring that transforms the entire space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let us bring the same level of quality and craftsmanship to your home. 
            Contact us for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-700 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 