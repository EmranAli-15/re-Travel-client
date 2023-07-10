import Banner from "./Banner/Banner";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
        return (
                <div className="mt-4">
                        <SearchBar></SearchBar>
                        <Banner></Banner>
                </div>
        );
};

export default Home;