import Link from "next/link"
import Image from "next/image"
import imagen from "../public/885.jpg"

//<Image src="/885.jpg" alt="imagen" width={400} height={400}/>
export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>chanchito feliz</p>
      <Image src={imagen} alt="imagen" width={400} height={400}/>
    </div>
  )
}
