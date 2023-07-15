import { useEffect, useState } from "react";


const AllTicket = () => {
        type ticketData = {
                img: string,
                from: string,
                to: string,
                price: number,
                agency: string,
                logo: string,
                service: string
        }

        const [allTicket, setAllTicket] = useState([]);

        useEffect(() => {
                fetch('database.json')
                        .then(res => res.json())
                        .then(data => setAllTicket(data))
        }, [])
        return (
                <div className="grid grid-cols-2 gap-2 mt-20">
                        {
                                allTicket.map((ticket: ticketData, index) =>
                                        <div key={index}>
                                                <div className="gap-x-1 md:gap-x-4 md:flex items-center p-1 border-gray-400 rounded-lg border-[1px]">
                                                        <div className="md:w-[40%]">
                                                                <img src={ticket.img} className="w-full md:w-64 rounded-lg" />
                                                        </div>

                                                        <div className="md:w-[60%]">
                                                                <div>
                                                                        <p>From : {ticket.from}</p>
                                                                        <p>To : {ticket.to}</p>
                                                                        <p>Price : {ticket.price}</p>
                                                                        <p>Service : {ticket.service}</p>
                                                                </div>
                                                                <div className="md:flex justify-between items-center">
                                                                        <p>Agency: {ticket.agency}</p>
                                                                        <button className="btn mt-4 md:mt-0 btn-xs btn-outline btn-gray-400">cart</button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>)
                        }
                </div>
        );
};

export default AllTicket;