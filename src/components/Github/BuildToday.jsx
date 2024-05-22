import CodeHeader from "./CodeHeader";
import Together from "./Together";

export default function BuildToday() {
  return (
    <>
      <main className="bg-git bg-cover min-h-screen">
        <CodeHeader />
        <Together />
      </main>
    </>
  );
}
