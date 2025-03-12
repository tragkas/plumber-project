"use client";

export function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1632918572888-7a975f4b67b6?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your background image URL
      }}
    >
      <h1 className="text-8xl font-bold">Your Plumber</h1>
      <p className="mt-4 text-2xl">Reliable, professional plumbing services for your home or business.</p>
      <a href="tel:+1234567890" className="mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition rounded-lg">
            Call Now
          </a>
    </section>
  );
}
