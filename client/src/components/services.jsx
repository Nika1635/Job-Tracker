export async function getAllDataService(state){
    const data = await fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(data => state(data))
}