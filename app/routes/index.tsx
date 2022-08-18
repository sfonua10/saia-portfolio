import Header from "app/components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-4 px-4 justify-center md:flex-row-reverse">
        <img
          className="max-w-xs rounded-lg "
          alt="Saia Fonua"
          src="/saia-fonua-picture.jpg"
        />
        <section className="flex flex-col gap-y-4">
          <h1 className="text-6xl text-center">Saia Fonua</h1>
          <h2 className="text-3xl text-center">About Me</h2>
          <p className="text-xl max-w-sm">
            I currently work as a Software Engineer for The Church of Jesus
            Christ of Latter-day Saints. On my spare time, I like to spend time
            with family and friends, read books, learn Tongan, play basketball,
            exercise, serve the community, and work on side projects.
          </p>
        </section>
      </main>
    </>
  );
}
