export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select from our flexible meal plans based on your dietary preferences and schedule",
    },
    {
      number: "02",
      title: "We Prepare Fresh",
      description: "Our chefs prepare your meals daily using the freshest ingredients",
    },
    {
      number: "03",
      title: "Delivered to You",
      description: "Receive your meals each morning, ready to heat and enjoy throughout the day",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Food Plan Ltd is simple
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <div className="flex items-center justify-center -ml-10">
                    <div className="w-20 h-px bg-gradient-to-r from-green-500/50 to-green-500/20" />
                    <svg className="w-4 h-4 text-green-500/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}