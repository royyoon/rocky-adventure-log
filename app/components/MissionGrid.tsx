import { Mission } from "../types";
import { MissionCard } from "./MissionCard";

export function MissionGrid({ missions }: { missions: Mission[] }) {
  if (missions.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400">
        <p className="text-xl">No missions found in this sector.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {missions.map((mission) => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
    </div>
  );
}
