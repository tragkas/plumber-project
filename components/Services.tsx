import { Wrench, Droplet, ShieldCheck, Home, Drill, Search } from "lucide-react";

const services = [
  { icon: <Wrench size={40} />, title: "Pipe Repairs", desc: "Fix leaks and broken pipes fast." },
  { icon: <Droplet size={40} />, title: "Drain Cleaning", desc: "Clear clogged drains effectively." },
  { icon: <ShieldCheck size={40} />, title: "Water Heater Repair", desc: "Ensure hot water all year." },
  { icon: <Home size={40} />, title: "Home Inspections", desc: "Comprehensive plumbing checks for your home." },
  { icon: <Drill size={40} />, title: "Emergency Services", desc: "Available 24/7 for plumbing emergencies." },
  { icon: <Search size={40} />, title: "Leak Detection", desc: "Advanced tools to find hidden leaks." },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Our Plumbing Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-h-[300px] overflow-hidden"
          >
            <div className="text-gray-400 flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-white text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
