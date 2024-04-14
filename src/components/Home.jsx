import MyWork from "./MyWork";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen bg-peach">
        <section className="flex flex-col justify-center items-center mt-20 mb-20 max-w-3xl lg:max-w-4xl rounded-2xl p-8 bg-neutral-100">
          <h1 className=" text-5xl lg:text-7xl font-rak flex flex-col text-teal justify-center items-center">
            Davonne J. Vigil
          </h1>
          <section className="flex flex-col justify-center items-center m-auto max-w-4xl  gap-8 text-balance  text-xl mt-8 font-serif p-4 text-teal">
            <p>
              Time to bridge the gap between design and development. With this
              repository, I am focusing on building user interfaces from the
              design perspective. I am also developing my React.js skills and
              deepening that skill set as I build UI projects. I aim to grow as
              this repository grows. I values feedback as I continue my coding
              journey.
            </p>

            <img
              src="/images/setup.png"
              alt="Photo By: Patty Slongo, Lummi"
              className="max-w-lg p-8"
            />
            <p>
              Being a Frontend Developer, I am drawn to the design process and
              how the design is handed off to developers. There is so much tied
              into UX/UI Design as a whole and what they do. From researching,
              users behaviors, wire framing, collaboration, and designing a UI,
              that not only looks appealing but has a good user experience. I
              want to be the one turns the design into functional code.
              Understanding both sides and be able to communicate with designers
              and developers. With this repository, I also uncover accessibility
              and practice methods throughout my projects. I hope as this
              repository grows, I can develop my skills not only as a developer
              but as a UI developer/designer. Focusing on user satisfaction,
              usability, and accessibility. In essence, I am a UX Engineer.
            </p>

            <MyWork />
          </section>
        </section>
      </main>
    </>
  );
}
