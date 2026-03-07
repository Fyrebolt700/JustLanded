import CommunityMap from "../components/CommunityMap";

export default function MapPage() {

  // Temporary test userData until onboarding quiz is integrated
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

  return <CommunityMap userData={userData} />;
}