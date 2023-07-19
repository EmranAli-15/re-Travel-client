import useAuth from "../../hooks/useAuth";
const imageToken = import.meta.env.VITE_IMAGE_TOKEN

const AgencyRegister = () => {
        const auth = useAuth();
        const user = auth?.user;
        const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`

        const handleCreateAgency = (event: any) => {
                event.preventDefault();
                const form = event.target;

                const email = form.email.value;
                const agency = form.agency.value;
                const img = form.img.files[0];

                const formData = new FormData();
                formData.append('image', img);

                const agencyData = { email, agency, img };

                fetch(imageHostingUrl, {
                        method: 'POST',
                        body: formData
                })
                        .then(res => res.json())
                        .then(data => console.log(data))
        }
        return (
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col md:w-2/3">
                                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                        <form onSubmit={handleCreateAgency} className="card-body">
                                                <div className="form-control">
                                                        <label className="label">
                                                                <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="text" name="email" value={user?.email} className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                        <label className="label">
                                                                <span className="label-text">Agency Name</span>
                                                        </label>
                                                        <input type="text" name="agency" placeholder="Agency Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                        <label className="label">
                                                                <span className="label-text">Logo</span>
                                                        </label>
                                                        <input name="img" type="file" className="file-input file-input-bordered w-full" required />
                                                </div>
                                                <div className="form-control mt-6">
                                                        <button className="btn btn-primary">create</button>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default AgencyRegister;