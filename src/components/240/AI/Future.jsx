import FutureHeader from "./FutureHeader";
import Now from "./Now";

export default function Future() {
  return (
    <>
      <main className="bg-[url('/images/robot.jpg')] bg-cover h-screen">
        <FutureHeader />
        <Now />
      </main>
    </>
  );
}
