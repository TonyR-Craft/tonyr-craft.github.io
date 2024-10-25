import { useEffect, useState } from "react";

type TLight = {
  id: number;
  top: string;
  left: string;
  lifespan: string;
};

const getRandomOffset = () => {
  return (Math.random() - 0.5) * 10; // random offset within +/- 5%
};

const createOneOfMany = (neighbourPosition = { top: '50%', left: '50%' }): TLight => {
  const seed = Math.random();
  const topOffset = getRandomOffset();
  const leftOffset = getRandomOffset();
  return {
    id: seed,
    top: `${Math.min(Math.max(parseFloat(neighbourPosition.top) + topOffset, 40), 75)}%`,
    left: `${Math.min(Math.max(parseFloat(neighbourPosition.left) + leftOffset, 40), 50)}%`,
    lifespan: `${Math.floor(seed * 6) + 5}s`,
  };
};

const TheLights = () => {
  const [swarm, setSwarm] = useState<TLight[]>([]);

  useEffect(() => {
    const addToTheSwarm = () => {
      const neighbourPosition = swarm.length ? swarm[swarm.length - 1] : { top: '50%', left: '50%' };
      const newMember = createOneOfMany(neighbourPosition);
      setSwarm((theSwarm) => [...theSwarm.slice(-100), newMember]);
    };
    const interval = setInterval(addToTheSwarm, 1000);
    return () => clearInterval(interval);
  }, [swarm]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {swarm.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full w-[10px] h-[10px] bg-fly-radial random-move"
          style={{
            top: light.top,
            left: light.left,
            animation: `random-move ${light.lifespan} ease-in-out infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default TheLights;
