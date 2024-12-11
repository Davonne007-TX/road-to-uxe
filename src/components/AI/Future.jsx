import FutureHeader from "./FutureHeader";
import Now from "./Now";

export default function Future() {
  return (
    <>
      <main className="bg-[url('/images/robot.jpg')] bg-cover min-h-screen">
        <FutureHeader />
        <Now
          title="AI Assistant Equals Booming Market"
          image="/images/ai.jpg"
          alt="AI Robots Heads, Photo by julien Tromeur on Unsplash"
          text="Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra. Nam aliquam sem et tortor consequat id porta nibh venenatis. Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra."
        />
        <Now
          title="ChatGPT Takeover"
          image="/images/chatgbt.jpg"
          alt="List of tools, Photo by boliviainteligente on Unsplash"
          text="Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra. Nam aliquam sem et tortor consequat id porta nibh venenatis.Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra."
        />
        <Now
          title="Next Generation Robots"
          image="/images/aiRobot.jpg"
          alt="Mobile AI Robot, Photo by Kinsey Wang on Unsplash"
          text="Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra. Nam aliquam sem et tortor consequat id porta nibh venenatis. Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra."
        />
      </main>
    </>
  );
}

//
