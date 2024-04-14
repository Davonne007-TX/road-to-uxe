export default function Form() {
  return (
    <section>
      <form className="flex flex-col gap-5 mt-10">
        <label>
          <input
            type="text"
            className="form-input"
            placeholder="Email or Phone"
          />
        </label>
        <label>
          <input
            type="password"
            className="form-input"
            placeholder="Password"
          />
        </label>
      </form>
    </section>
  );
}
