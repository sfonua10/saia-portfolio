import Header from "app/components/Header";
import Services from "~/components/Services";
import Contact from "~/components/Contact";

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-4 px-4 justify-center md:flex-row-reverse">
        <img
          className="max-w-xs rounded-full "
          alt="Saia Fonua"
          src="/saia.jpeg"
        />
        <section className="flex flex-col gap-y-4">
          <h1 className="text-6xl text-center">
            Hi, I am Saia, FullStack Developer
          </h1>
          <p className="text-xl max-w-sm text-center">
            I currently work as a Software Engineer for The Church of Jesus
            Christ of Latter-day Saints. On my spare time, I like to spend time
            with family and friends, read books, learn Tongan, play basketball,
            exercise, serve the community, and work on side projects.
          </p>
          <div className="mx-auto">
            <a href="/Saia-Fonua-Resume.pdf" target="_blank">
            <button className="bg-red-400 px-8 py-4 text-white text-lg" type="button">
              Download Resume
            </button>
            </a>
          </div>
        </section>
      </main>
      <Services />
      <Contact />
    </>
  );
}
