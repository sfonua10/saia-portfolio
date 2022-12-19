import Header from "app/components/Header";
import Services from "~/components/Services";
import Contact from "~/components/Contact";

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-8 px-4 justify-center mx-auto md:flex-row-reverse">
        <img
          className="max-w-xs h-60 w-60 rounded-full "
          alt="Saia Fonua"
          src="/saia.jpeg"
        />
        <section className="flex flex-col items-center gap-y-8 md:items-start">
          <h1 className="text-5xl text-center font-bold md:text-start">
            Hi, I am Saia, <span><br className="hidden md:block"/>FullStack Developer</span>
          </h1>
          <p className="text-xl max-w-sm text-center text-gray-600 md:text-start md:max-w-lg">
            I currently work as a Software Engineer for The Church of Jesus
            Christ of Latter-day Saints. On my spare time, I like to spend time
            with family and friends, read books, learn Tongan, play basketball,
            exercise, serve the community, and work on side projects.
          </p>
          <a href="/Saia-Fonua-Resume.pdf" target="_blank">
            <button
              className="bg-red-400 px-6 py-3 text-white text-xl font-medium"
              type="button"
            >
              Download Resume
            </button>
          </a>
        </section>
      </main>
      <Services />
      <Contact />
    </>
  );
}
