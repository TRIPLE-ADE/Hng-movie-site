import SideBar from "@/app/components/SideBar";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getMoviesDetails(id) {
    try {
        const response = await fetch(`${baseUrl}movie/${id}?api_key=${apiKey}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return [];
    }

}

const page = async ({ params : id }) => {
    const movieDetails = await getMoviesDetails(id)
  return (
    <>
        <SideBar />
        <section>
          
        </section>
    </>
  )
}

export default page