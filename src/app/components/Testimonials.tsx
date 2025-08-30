export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Corp",
      content: "Food Plan Ltd has been a game-changer for my busy schedule. I no longer worry about meal prep and I'm eating healthier than ever.",
      rating: 5,
      image: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Investment Banker",
      company: "Capital Partners",
      content: "The quality and variety of meals is outstanding. It's like having a personal chef without the premium price tag.",
      rating: 5,
      image: "MC",
    },
    {
      name: "Emma Davis",
      role: "Startup Founder",
      company: "Innovation Labs",
      content: "Perfect for entrepreneurs who need to maximize their time. The meals are delicious and keep me energized throughout the day.",
      rating: 5,
      image: "ED",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Loved by Busy Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands who have transformed their eating habits with Food Plan Ltd
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-6 right-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.image}
                </div>
              </div>
              
              <blockquote className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-serif text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}