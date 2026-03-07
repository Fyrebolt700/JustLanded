import CommunityMap from "../components/CommunityMap";

export default function MapPage() {
  const userData = {
    province: "Ontario",
    purpose: "study",
    language: "English",
    religion: "Hindu",
    status: "study_permit",
    nationality: "India",
    children: ["elementary", "middle"],
    needsDaycare: true,
    needs: ["school", "doctor", "housing"],
  };

  return (
    <div style={{ padding: "24px" }}>
      <CommunityMap userData={userData} />
    </div>
  );
}