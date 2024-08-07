import Image from "next/image";

export default function Solucoes() {

  return (
    <main className="w-full p-0 mt-0">
      <Image
          src="/banner/Banner005-Selo-20-anos.jpg"
          alt="Landscape picture"
          className="object-contain w-full"
          width={1440}
          height={800}
        />

      <div className="p-7">
        <h3 className="w-full text-center font-baskervville title-cyan"> Memorial do Carmo </h3>

        <h3>  </h3>
      </div>
    </main>
  )
}