import ColorShapelerBody from "./components/colorShapelerBody";
import ShapelerEyes from "./components/shapelerEyes";
import ShapelerEyebrows from "./components/shapelerEyebrows";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute">
        <ShapelerEyebrows type="Stronkler" baby />
        <ShapelerEyes type="Stronkler" male={true} baby></ShapelerEyes>
        <ColorShapelerBody color="#87d1e2ff" type="Stronkler" baby />
      </div>
    </div>
  );
}
