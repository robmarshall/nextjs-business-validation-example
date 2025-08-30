const features = [
  {
    title: "Chef-Prepared",
    description: "Every meal is crafted by professional chefs using premium ingredients",
    icon: "👨‍🍳",
  },
  {
    title: "Daily Delivery",
    description: "Fresh meals delivered to your door every morning, ready to eat",
    icon: "🚚",
  },
  {
    title: "Nutritionist Approved",
    description: "Balanced meals designed by certified nutritionists for optimal health",
    icon: "✅",
  },
  {
    title: "Zero Prep Time",
    description: "No shopping, no cooking, no cleaning - just heat and enjoy",
    icon: "⏱️",
  },
  {
    title: "Flexible Plans",
    description: "Choose your meals, skip days, or pause anytime with no penalties",
    icon: "📅",
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable packaging and locally sourced ingredients when possible",
    icon: "🌱",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Why Choose Food Plan Ltd
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle everything so you can focus on what matters most - your work and life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-full -mr-16 -mt-16" />
              
              <div className="relative">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}