import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"



export default function Home() {
  return (
    <>
      <Navbar />

      <header className="flex flex-col md:items-start items-center container bg-background pb-11">
        <div className="mt-16 md:ml-10 flex items-center flex-col w-full md:w-1/2 text-center md:text-left">
          <h1 className="md:text-4xl text-3xl font-extrabold"><span className="text-secondary">User-Centric Excellence</span>: Our App Development services Tackles Your Pain Points</h1>
          <h2 className="md:text-lg">Experience a Seamless Digital Journey with <span className="text-primary">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-secondary">Elevates Your App Experience</span> to Unparalleled Heights.</h2>
        </div>
        <div className="md:ml-10 mt-10 flex flex-col md:w-1/2 w-full">
          <ContactForm />
        </div>
      </header>

      <main>
        {/* Logobar and "Full development cycle" section */}
        <section className="bg-white px-0 md:px-10 py-10 container">
          <div className="py-5 border-y-2 mb-14">
            <Carousel opts={{
              align: "start",
              loop: true,
            }}>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image alt="logo png's" src="./logobar.png" className="border-2 border-black mx-auto" width={150} height={150} /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:block" />
              <CarouselNext className="hidden md:block" />
            </Carousel>
          </div>

          <div id="services" className="grid grid-col-1 md:grid-cols-2 gap-10 container">
            <div>
              <h2 className="md:text-3xl text-2xl font-bold mb-4">Full development cycle</h2>
              <p className="text-sm font-bold">We have proven technologies</p>
            </div>

            <div className="col-start-1">
              <div className="mb-4">
                <h3 className="font-bold text-lg">Web</h3>
                <h4>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</h4>
              </div>
              <div>
                <h3 className="font-bold text-lg">Mobile</h3>
                <h4>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</h4>
              </div>
            </div>

            <Separator className="block md:hidden" />

            <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col gap-5">
              <Link href="#" className="hover:underline underline-offset-4 decoration-primary">
                <h4>iOS development <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>Android development <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>Web development <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>UI/UX design <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>Testing <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>Launch <span className="text-primary">&gt;</span></h4>
              </Link>
              <Link href="#" className="hover:underline underline-offset-4 hover:decoration-primary">
                <h4>IT consulting <span className="text-primary">&gt;</span></h4>
              </Link>
            </div>
          </div>

          
        </section>

        {/* FAQ section */}
        <section id="faq" className="bg-background md:px-14 py-10 container">
          <div>
            <div className="md:text-3xl text-2xl font-bold my-5">FAQ</div>
            <Accordion type="single" collapsible className="flex flex-col md:flex-row gap-14 flex-wrap">
              <div className="flex-1 space-y-10">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold text-start">What is the cost of a mobile application?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis autem neque sed, atque eaque excepturi omnis sint ducimus asperiores, molestias ab consectetur a earum quod soluta. Cupiditate doloremque dignissimos voluptas quidem laborum.
                  </AccordionContent>
                </AccordionItem>
                

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bold text-start">Do you provide a guarantee for the mobile application?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab, expedita accusantium est tenetur eos adipisci reiciendis praesentium iste, explicabo blanditiis totam vero provident animi nisi maxime sint aliquid amet quibusdam? Consectetur, deserunt harum iste odit illum distinctio quidem assumenda sint inventore, velit suscipit ipsum?
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div className="flex-1 space-y-10">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bold text-start">How long will development take?</AccordionTrigger>
                  <AccordionContent>
                      Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.<br/>
                      <br/>
                      Average development time from start to finished application:<br/>
                      Medium projects up to 3 months.<br/>
                      Large projects about 4-6 months.<br/>
                      To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.<br/>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-bold text-start">I will not tell my idea, do you guarantee confidentiality?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, maiores repellat laborum, culpa corporis atque, nobis obcaecati esse numquam dicta harum officia fuga autem iste.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
