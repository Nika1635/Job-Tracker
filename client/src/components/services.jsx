export function jobGetRequest(state){
    fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(data => state(data))
}


export async function jobDeleteRequest(id, changeData){
    await fetch(`https://job-tracker-t0qo.onrender.com/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
    })
    changeData(prev => prev.filter(job => job.id !== +id))
}

export async function jobPostRequest(data, setData){
    const response = await fetch("https://job-tracker-t0qo.onrender.com/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const newJob = await response.json()
    setData(prev => [...prev, newJob])
}