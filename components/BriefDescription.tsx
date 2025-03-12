export function BriefDescription() {
    return (
      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Projects Completed
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">30</span>
              <p className="text-gray-300">Kitchens</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">50</span>
              <p className="text-gray-300">Bathrooms</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">20</span>
              <p className="text-gray-300">Amenities</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">10</span>
              <p className="text-gray-300">Private Pool</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">20</span>
              <p className="text-gray-300">Big Projects</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  