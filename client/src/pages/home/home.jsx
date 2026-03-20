import { useState } from "react";
import Jobtracker from "../../components/JobTracker/jobtracker";
import Modal from "../../components/Modal/modal";

export default function Home({}){

    const [showModal, setShowModal] = useState(false)

    return(
        <>
            {
                showModal ? <Modal 
                    modalStatus = {showModal}
                    showModalActivate={setShowModal}
                /> : null
            }
            <Jobtracker 
                modalStatus = {showModal}
                showModalActivate={setShowModal}
            />
        </>
    )
}