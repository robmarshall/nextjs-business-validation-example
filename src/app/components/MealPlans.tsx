import Image from "next/image";

export default function MealPlans() {
  const plans = [
    {
      name: "Classic",
      description: "Traditional favorites with a healthy twist",
      meals: ["Grilled Chicken & Quinoa", "Salmon Teriyaki Bowl", "Mediterranean Pasta"],
      image: "🍽️",
    },
    {
      name: "Plant-Based",
      description: "100% plant-powered nutrition",
      meals: ["Buddha Bowl", "Vegan Pad Thai", "Quinoa Black Bean Salad"],
      image: "🥗",
    },
    {
      name: "Keto-Friendly",
      description: "Low-carb, high-fat options",
      meals: ["Steak & Cauliflower Mash", "Chicken Caesar Wrap", "Salmon & Asparagus"],
      image: "🥑",
    },
    {
      name: "Athlete",
      description: "High-protein meals for active lifestyles",
      meals: ["Protein Power Bowl", "Lean Beef Stir-Fry", "Turkey Meatballs"],
      image: "💪",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Meal Plans for Every Lifestyle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our curated meal plans or create your own custom menu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-6xl">
                {plan.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Sample meals:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.meals.map((meal, mealIndex) => (
                      <li key={mealIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {meal}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 w-full px-4 py-2 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}