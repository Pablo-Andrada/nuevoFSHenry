import AboutUs from "./AboutUs";
import CardList from "./CardList";
import NavBar from "./NavBar";

const Home = ({users}) => {

    return (
        <div>
            <NavBar/>
            <CardList users={users} />
            <AboutUs/>
        </div>
    );
}
export default Home;