import { useState } from "react";
import Jobtracker from "../../components/JobTracker/jobtracker";
import Modal from "../../components/Modal/modal";

export default function Home({}){

    const [showModal, setShowModal] = useState(false)
    const [jobData, setJobData] = useState([])

    return(
        <>
            {
                showModal ? <Modal 
                    modalStatus = {showModal}
                    showModalActivate={setShowModal}
                    setModalJobData={setJobData}
                /> : null
            }
            <Jobtracker 
                modalStatus = {showModal}
                showModalActivate={setShowModal}
                trackerJobData={jobData}
                setTrackerJobData={setJobData}
            />
        </>
    )
}