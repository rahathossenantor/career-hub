import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-career-hub/main/public/jobs.json");
            const data = await response.json();
            setJobs(data);
        })()
    }, []);

    return (
        <div className="py-10">
            <div className="text-center">
                <h3 className="text-4xl mb-1 font-semibold">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    jobs.map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-primary normal-case">See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;