import Image from "next/image";
import Link from "next/link";
// import "./style.css";

export default function Home() {
  return (
    <div className="container-fluid bg-3 text-center">
      <div className="row">
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./01_intro/rubber_duck.jpg" alt="week 1 placeholder" /> 
          <br />
          <Link href="./01_intro">Week 1: Intro</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./02_2Ddesign/week2-placeholder-image.jpg" alt="week 2 placeholder" /> 
          <br />
          <Link href="./02_2Ddesign">Week 2: 2D Design</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./03_fabrication/week3-placeholder-image.jpg" alt="week 3 placeholder" /> 
          <br /><Link href="./03_fabrication">Week 3: Fabrication</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./04_microcontroller/week4-placeholder-image.jpg" alt="week 4 placeholder" />  
          <br /><Link href="./04_microcontroller">Week 4: Programming</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./05_3Ddesign/week5-placeholder-image.jpg" alt="week 5 placeholder" /> 
          <br /><Link href="./05_3Ddesign">Week 5: 3D Design</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./06_inputs/week6-placeholder-image.jpg" alt="week 6 placeholder" /> 
          <br /><Link href="./06_inputs">Week 6: Inputs</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./07_outputs/week7-placeholder-image.jpg" alt="week 7 placeholder" /> 
          <br /><Link href="./07_outputs">Week 7: Outputs</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./08_cnc/week8-placeholder-image.jpg" alt="week 8 placeholder" /> 
          <br /><Link href="./08_cnc">Week 8: CNC</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./09_networking/week9-placeholder-image.jpg" alt="week 9 placeholder" /> 
          <br /><Link href="./09_networking">Week 9: Networking</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./10_machine/machine-placeholder-image.jpg" alt="machine building placeholder" /> 
          <br /><Link href="./10_machine">Machine Building</Link>
        </div>
        <div className="col-sm-4">
          <img style={{width: '75%'}} src="./13_finalproject/final-project-placeholder-image.jpg" alt="final project placeholder" />  
          <br /><Link href="./13_finalproject">Final Project</Link>
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
