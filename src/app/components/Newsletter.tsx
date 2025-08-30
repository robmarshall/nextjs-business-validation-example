import WaitlistForm from "./WaitlistForm";

export default function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4">
            Ready to Transform Your Meals?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our waitlist and be the first to experience the convenience of Food Plan Ltd
          </p>
        </div>
        
        <WaitlistForm
          formId="YOUR_FORMBEAR_FORM_ID"
          secureToken="YOUR_FORMBEAR_SECURE_TOKEN"
          variant="centered"
          enableHoneypot={false}
          className="max-w-md mx-auto"
        />
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}