export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center -mt-10 mb-10 m-0 max-w-md md:max-w-xl lg:max-w-6xl">
      <img
        src="/images/reading.jpg"
        className="md:max-w-2xl lg:max-w-xl lg:mr-8 mb-4 lg:mb-0"
        alt="Teacher reading a book to young students, Photo By CDC on Unsplash"
      />
      <section className="mt-4">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to Lincoln Elementary!
        </h2>
        <p className="mb-4 text-lg">
          Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
          Diam vel quam elementum pulvinar etiam non quam. Risus quis varius
          quam quisque id. Quam viverra orci sagittis eu volutpat odio.
        </p>
        <p className="text-lg">
          Senectus et netus et malesuada fames. Elementum pulvinar etiam non
          quam lacus. Lacus vel facilisis volutpat est. Et leo duis ut diam quam
          nulla porttitor massa id.Vel orci porta non pulvinar. Hendrerit
          gravida rutrum quisque non tellus orci ac. Ut morbi tincidunt augue
          interdum velit.
        </p>
      </section>
    </section>
  );
}
