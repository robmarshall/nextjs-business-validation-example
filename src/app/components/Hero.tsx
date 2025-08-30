import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
                Food Plan
                <span className="block text-green-400">Ltd</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Healthy, chef-prepared meals delivered daily to save you time
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">
                Perfect for busy professionals who want to eat well without the hassle of meal planning and cooking.
              </p>
              
              <WaitlistForm
                formId="YOUR_FORMBEAR_FORM_ID"
                secureToken="YOUR_FORMBEAR_SECURE_TOKEN"
                variant="inline"
                enableHoneypot={false}
                className="max-w-md"
              />
              
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-600/20 blur-xl" />
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🥗</div>
                    <p className="text-white text-xl font-serif">Fresh Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}