import { useEffect, useState } from 'react'
import "./modal.css"
import { jobPostRequest } from '../services.jsx'

export default function Modal({modalStatus, showModalActivate, setModalJobData, setLoaderStatus}){
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        status: "Interview"
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        jobPostRequest(formData, setModalJobData, setLoaderStatus)
    }

    return (
        <div className="modalHero" onClick={() => {showModalActivate(!modalStatus)}}>
            <section 
                className='component-hero'
                onClick={(e) => e.stopPropagation()}
            >
                <form className ="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-inputfield">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" onChange={handleChanges} />
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" onChange={handleChanges} />
                    </div>
                    <button type="submit" className="modal-submit">submit</button>
                </form>
            </section>
        </div>
    )
}