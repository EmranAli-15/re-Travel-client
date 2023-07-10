import { FcSearch } from "react-icons/fc";

const SearchBar = () => {

        const handleSearch = (event: any) => {
                event.preventDefault();
                const form = event.target;

                const from = form.from.value;
                const to = form.to.value;

                console.log(from, 'ok', to);
        }
        return (
                <div className='flex justify-center'>
                        <form onSubmit={handleSearch} className='flex gap-x-2'>
                                <select name="from" className="select select-bordered select-sm md:w-96">
                                        <option>Dhaka</option>
                                        <option>Sylhet</option>
                                        <option>Rajshahi</option>
                                </select>
                                <select name="to" className="select select-bordered select-sm md:w-96">
                                        <option>Cox's Bazar</option>
                                        <option>Sajek Velly</option>
                                        <option>Bandarbon</option>
                                </select>
                                <button className="ml-4">
                                        <FcSearch size={30}>
                                                <input type="submit" value="" />
                                        </FcSearch>
                                </button>
                        </form>
                </div>
        );
};

export default SearchBar;