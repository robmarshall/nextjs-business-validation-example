export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$12",
      period: "per meal",
      description: "Perfect for trying our service",
      features: [
        "5 meals per week minimum",
        "Standard delivery",
        "Access to Classic menu",
        "Pause anytime",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$10",
      period: "per meal",
      description: "Most popular for busy professionals",
      features: [
        "10 meals per week minimum",
        "Priority morning delivery",
        "All menu options available",
        "Nutritionist consultation",
        "Skip or pause anytime",
      ],
      popular: true,
    },
    {
      name: "Executive",
      price: "$9",
      period: "per meal",
      description: "Best value for daily dining",
      features: [
        "15+ meals per week",
        "White glove delivery",
        "Custom meal requests",
        "Dedicated account manager",
        "Premium ingredients",
        "Flexible scheduling",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your lifestyle. No hidden fees, no contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white transform scale-105 shadow-2xl"
                  : "bg-white shadow-sm"
              } p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-serif mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? "text-green-400" : "text-green-500"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}