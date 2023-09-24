import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-career-hub/main/public/jobs.json");
            const data = await response.json();
            setJobs(data);
        })()
    }, []);





    const jobCard = <>
        <div className="border rounded-xl p-5">
            <div className="mb-3"><img src="https://i.ibb.co/PzrbTxh/google-1-1-1.png" alt="logo" /></div>
            <h3 className="text-xl">Technical Database Engineer</h3>
            <h4 className="my-2">Google LLC</h4>
            <div>
                <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">Remote</button>
                <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">Full Time</button>
            </div>
            <div className="flex gap-4 py-3">
                <p className="flex gap-1"><MdLocationOn className="text-2xl"></MdLocationOn> Dhaka, Bangladesh</p>
                <p className="flex gap-1"><AiOutlineDollar className="text-2xl"></AiOutlineDollar> Salary : 100K - 150K</p>
            </div>
            <Link to=""><button className="btn btn-primary normal-case">View Details</button></Link>
        </div>
    </>





    return (
        <div className="py-10">
            <div className="text-center">
                <h3 className="text-4xl mb-1 font-semibold">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 my-5">

                {jobCard}
                {jobCard}
                {jobCard}
                {jobCard}

            </div>
            <div className="text-center">
                <button className="btn btn-primary normal-case">See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;