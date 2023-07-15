import { useEffect, useState } from "react";


const AllTicket = () => {
        type ticketData = {
                img: string
        }

        const [allTicket, setAllTicket] = useState([]);

        useEffect(() => {
                fetch('database.json')
                        .then(res => res.json())
                        .then(data => setAllTicket(data))
        }, [])
        return (
                <div>
                        {
                                allTicket.map((ticket: ticketData, index) => <div key={index}>
                                        <img src={ticket.img} alt="" />
                                </div>)
                        }
                </div>
        );
};

export default AllTicket;