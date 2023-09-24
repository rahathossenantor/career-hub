import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://raw.githubusercontent.com/rahathossenantor/career-hub/main/public/data/jobs.json");
            const data = await response.json();
            setJobs(data);
        })()
    }, []);

    const handleIsShowAll = () => {
        if (dataLength === 4) {            
            setDataLength(jobs.length);
        } else {
            setDataLength(4);
        }
        setIsShowAll(!isShowAll);
    }

    return (
        <div className="py-10">
            <div className="text-center">
                <h3 className="text-4xl mb-1 font-semibold">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
                <button onClick={handleIsShowAll} className="btn btn-primary normal-case">{!isShowAll ? "See All Jobs" : "See Less Jobs"}</button>
            </div>
        </div>
    );
};

export default Jobs;