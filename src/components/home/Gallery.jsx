import Image from "next/image"

export const imageSlider = [
    {
      id: "0",
      src: "/public/image-1.webp",
      rotation: "rotate-2"
    },
    {
      id: "1",
      src: "/public/image-1.webp",
      rotation: "rotate-left"
    },
    {
      id: "2",
      src: "/public/image-1.webp",
      rotation: "rotate-2"
    },
    {
      id: "3",
      src: "/public/image-1.webp",
      rotation: "rotate-left"
    },
    {
      id: "4",
      src: "/public/image-1.webp",
      rotation: "rotate-2"
    },
  ]
  
  export default function Gallery() {
    return (
      <div className=" flex flex-row justify-center overflow-hidden lg:overflow-visible">
        {imageSlider.map(item => (
              <Image key={item.id} className={` w-44 h-44 md:w-60 md:h-60 ${item.rotation} rounded-lg m-2`} src={item.src} width={200} height={200} />
          
       ))}
      </div>
    )
  }



  