function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <p>"Excellent work and communication with meeting all requirements."</p>
            <h4 className="mt-4 font-bold">Client One</h4>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <p>"Delivered the project on time with meeting all requirements."</p>
            <h4 className="mt-4 font-bold">Client Two</h4>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <p>"Highly recommended developer with meeting all requirements."</p>
            <h4 className="mt-4 font-bold">Client Three</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;