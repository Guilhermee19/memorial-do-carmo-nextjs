import Image from "next/image"

export const HeaderNavbarComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#015b7d] w-full flex">
        <div className="w-full max-w-[1024px] p-2 pl-6 pr-6 m-auto flex justify-between items-center">
          <p className="text-[12px] text-white font-light"> (21)2042 6333 • (21)98556 1650. </p>

          <div className="flex gap-5 text-white">
            <div>face</div>
            <div>inst</div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-48 bg-[#006c94] flex justify-center">
        <Image
          src="/LogoMemorialNovo.png"
          alt="Landscape picture"
          className="object-contain max-w-[300px]"
          width={800}
          height={500}
        />
      </div>
    </div>
  )
}