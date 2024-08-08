import Dummy from "../../components/dummy/dummy.component";
import { withLayout } from "../../layout/layout.component";

const Home = () => {
  return <Dummy title="find a movie to watch tonight" />;
};

export default withLayout(Home);
