import { useRouter } from "next/router";
import MissionSearch from "screens/MissionSearch";

const Rockets = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return <MissionSearch name={id} />;
};

export default Rockets;
