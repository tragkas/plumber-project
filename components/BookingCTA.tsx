export function BookingCTA() {
    return (
      <section id="booking" className="h-[600px] flex flex-col items-center justify-center py-16 bg-gray-800 text-white text-center">
        <h2 className="text-6xl font-bold mb-4">Need a Plumber Now?</h2>
        <p className="text-2xl max-w-xl mx-auto">Call us for immediate assistance!</p>
        <a href="tel:+1234567890" className="mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition rounded-lg">
            Call Now
          </a>
      </section>
    );
  }
  