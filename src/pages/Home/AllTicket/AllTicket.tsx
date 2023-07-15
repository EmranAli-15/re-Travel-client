import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AllTicket = () => {
        type ticketData = {
                img: string,
                from: string,
                to: string,
                price: number,
                agency: string,
                logo: string,
                service: string,
                placeName: string
        }

        const [allTicket, setAllTicket] = useState([]);

        useEffect(() => {
                fetch('database.json')
                        .then(res => res.json())
                        .then(data => setAllTicket(data))
        }, [])
        return (
                <div className="grid md:grid-cols-3 p-1 gap-y-4 mt-20">
                        {
                                allTicket.map((ticket: ticketData, index) =>
                                        <div key={index}>
                                                <div className="w-full md:w-[400px] h-[280px] mx-auto border-[1px] relative">
                                                        <div>
                                                                <img className="w-full z-10 h-[200px]" src={ticket.img} alt="" />
                                                        </div>
                                                        <p className="absolute top-2 right-0 bg-slate-50 rounded-l-md px-1">From: <span className="text-orange-500">${ticket.price}</span></p>
                                                        <div className="p-2">
                                                                <h3 className="text-[20px] font-semibold font-serif mb-2">{ticket.placeName}</h3>
                                                                <div className="flex items-center justify-between">
                                                                        <div className="flex items-center gap-x-2">
                                                                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                                                                <p>{ticket.to}</p>
                                                                        </div>
                                                                        <button className="btn btn-outline btn-xs btn-gray-200">
                                                                                details
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>)
                        }
                </div>
        );
};

export default AllTicket;