

function Contact() {

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form action="https://formspree.io/f/mojgrrez" method="POST"
          //onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border dark:bg-slate-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border dark:bg-slate-800"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full p-3 rounded-lg border dark:bg-slate-800"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
