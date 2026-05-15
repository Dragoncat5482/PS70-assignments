import Image from "next/image";
import Link from "next/link";
// import "./style.css";

export default function Home() {
  return (
    <div className="container-fluid bg-3 text-center">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '80%'}} src="./01_intro/rubber_duck.jpg" alt="week 1 placeholder" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./01_intro" className="card-title">Week 1: Intro</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./02_2Ddesign/box_duck_final.jpg" alt="duck box" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./02_2Ddesign" className="card-title">Week 2: 2D Design</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./03_fabrication/cardboard_full_assembly.jpg" alt="cardboard duck kinematic machine" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./03_fabrication" className="card-title">Week 3: Fabrication</Link>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./04_microcontroller/final_sculpture.jpg" alt="final duck kinematic machine" className="card-img-top"/>  
          <div className="card-body">
          <Link href="./04_microcontroller" className="card-title">Week 4: Programming</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./05_3Ddesign/duck_dish_angle.jpg" alt="Duck floatie trinket dish" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./05_3Ddesign" className="card-title">Week 5: 3D Design</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./06_inputs/capacitive_sensor.jpg" alt="week 6 placeholder" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./06_inputs" className="card-title">Week 6: Inputs</Link>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./07_outputs/mvp_picture.jpg" alt="week 7 placeholder" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./07_outputs" className="card-title">Week 7: Outputs</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./08_cnc/duck_wax_stamps.jpg" alt="duck wax stamps" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./08_cnc" className="card-title">Week 8: CNC</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./09_networking/weather_machine.jpg" alt="week 9 placeholder" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./09_networking" className="card-title">Week 9: Networking</Link>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./10_machine/dot_duck.jpg" alt="machine building placeholder" className="card-img-top"/> 
          <div className="card-body">
          <Link href="./10_machine" className="card-title">Machine Building</Link>
          </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img style={{width: '75%'}} src="./13_finalproject/final_project.jpg" alt="final project placeholder" className="card-img-top"/>  
          <div className="card-body">
          <Link href="./13_finalproject" className="card-title">Final Project</Link>
          </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
