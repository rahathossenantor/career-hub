import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="border rounded-xl p-5">
            <div className="mb-3"><img src={logo} alt="logo" /></div>
            <h3 className="text-xl">{job_title}</h3>
            <h4 className="my-2">{company_name}</h4>
            <div>
                <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-4 py-3">
                <p className="flex gap-1"><MdLocationOn className="text-2xl"></MdLocationOn> {location}</p>
                <p className="flex gap-1"><AiOutlineDollar className="text-2xl"></AiOutlineDollar> Salary: {salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className="btn btn-primary normal-case">View Details</button></Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;