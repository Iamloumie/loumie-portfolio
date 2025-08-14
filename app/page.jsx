import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* Text section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">🌏 💻 Software Developer</span>
            <h1 className="h1 mb-6">
              Hello 👋 I'm <br /><span className="text-accent">Adedamola Lawal</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              Every brand starts with a story—and that story deserves to be seen, felt, and experienced. From the first spark of an idea to the final polished detail, each digital journey is crafted to reflect purpose, connect with people, and bring visions to life in a way that feels both human and unforgettable.
            </p>

            {/* Button and socials section */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/public/assets/Lawalcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="underline-none"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent hover:text-primary
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <Stats />
    </section>
  )
}

export default Home