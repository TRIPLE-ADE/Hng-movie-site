import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 items-center text-xs font-bold text-gray-500 my-10">
        <div className="flex gap-5 items-center justify-center">
            <Image src="/facebook.svg" width={20} height={20} alt="facebook icon" />
            <Image src="/instagram.svg" width={20} height={20} alt="instagram icon" />
            <Image src="/twitter.svg" width={20} height={20} alt="twitter icon" />
            <Image src="/youtube.svg" width={20} height={20} alt=" youtube icon" />
        </div>   
        <div className="flex gap-5">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>   
        <div>
            <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
        </div> 
    </footer>
  )
}

export default Footer