export const baseUrl="http://localhost:5000";

export const getRequest = async (url)=>{
    const response = await fetch(url);
    const data = response.json();

    if(!response.ok){
        return {error: true, message:"An error occoured"};
    }
    return data;
}