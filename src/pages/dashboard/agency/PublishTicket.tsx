

const PublishTicket = () => {

        const handleSubmit = (event: any) => {
                event.preventDefault();
                const form = event.target;

                const from = form.from.value;
                const to = form.to.value;
                const place = parseFloat(form.place.value);
                const price = form.price.value;
                const img = form.img.value;
                const service = form.from.value;

                const formData = { from, to, place, price, img, service }
                console.log(formData);
        }

        return (
                <div className="flex justify-center mt-24">
                        <form onSubmit={handleSubmit}>
                                <div className="md:flex md:gap-x-4">
                                        <div>
                                                <select name="from" className="select select-bordered w-full md:w-96">
                                                        <option>Dhaka</option>
                                                        <option>Sylhet</option>
                                                        <option>Rajshahi</option>
                                                </select>
                                        </div>
                                        <div>
                                                <select name="to" className="select select-bordered my-2 md:my-0 w-full md:w-96">
                                                        <option>Cox's Bazar</option>
                                                        <option>Sajek Velly</option>
                                                        <option>Bandarbon</option>
                                                </select>
                                        </div>
                                </div>
                                <div className="md:flex md:gap-x-4 md:my-6">
                                        <div>
                                                <input name="place" type="text" placeholder="Place Name" className="input input-bordered w-full md:w-96" required/>
                                        </div>
                                        <div>
                                                <input name="price" type="number" placeholder="Price" className="input input-bordered my-4 md:my-0 w-full md:w-96" required/>
                                        </div>
                                </div>
                                <div className="md:flex md:gap-x-4">
                                        <div>
                                                <input name="img" type="file" className="file-input file-input-bordered w-full md:w-96" required/>
                                        </div>
                                        <div>
                                                <select name="service" className="select select-bordered mt-4 md:mt-0 w-full md:w-96">
                                                        <option>Air</option>
                                                        <option>Rail</option>
                                                        <option>Bus</option>
                                                </select>
                                        </div>
                                </div>
                                <button className="btn btn-outline w-full mt-4">
                                        <input type="submit" value="SUBMIT" />
                                </button>
                        </form>
                </div>
        );
};

export default PublishTicket;