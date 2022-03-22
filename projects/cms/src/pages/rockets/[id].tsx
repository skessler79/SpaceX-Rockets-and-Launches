import { useRouter } from "next/router";
import RocketDetails from "screens/RocketDetails";

const Rockets = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return <RocketDetails id={id} />;
};

export default Rockets;
