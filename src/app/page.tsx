import { BentoGridDemo } from "@/components/demos/bento-grid-demo";
import { Spotlight } from "@/components/ui/spotlight";
import { ComponentPreview } from "@/components/website/component-preview";
import { bentoGridCode, spotlightCode } from "@/lib/code-snippets";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 pt-8">
        <h1 className="text-5xl font-extrabold tracking-tight">AtlanticUI</h1>
        <p className="text-neutral-400 text-lg">
          {/* Modern animated UI components for Next.js and Tailwind CSS. */}
          Build Smarter, Ship Faster!
        </p>
      </div>

      {/* Component 1: Spotlight */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">1. Spotlight Card</h2>
          <p className="text-neutral-400 text-sm mt-1">
            Hover over the card to reveal a dynamic mouse-following radial gradient.
          </p>
        </div>
        <ComponentPreview code={spotlightCode}>
          <Spotlight className="max-w-md text-center">
            <h3 className="text-xl font-semibold text-white">Interactive Spotlight</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Hover over this card to see a radial gradient light effect follow your mouse.
            </p>
          </Spotlight>
        </ComponentPreview>
      </section>

      {/* Component 2: Bento Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">2. Bento Grid</h2>
          <p className="text-neutral-400 text-sm mt-1">
            An animated feature grid with subtle lifts and responsive column spans.
          </p>
        </div>
        <ComponentPreview code={bentoGridCode}>
          <BentoGridDemo />
        </ComponentPreview>
      </section>
    </main>
  );
}

// import { Spotlight } from "@/components/ui/spotlight";
// import { ComponentPreview } from "@/components/website/component-preview";
// import { spotlightCode } from "@/lib/code-snippets";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold">Spotlight</h1>
//         <p className="text-neutral-400 mt-2">
//           A radial highlight effect that follows the user's cursor.
//         </p>
//       </div>

//       <ComponentPreview code={spotlightCode}>
//         <Spotlight className="max-w-md text-center">
//           <h3 className="text-xl font-semibold text-white">Interactive Spotlight</h3>
//           <p className="mt-2 text-sm text-neutral-400">
//             Hover over this card to see a radial gradient light effect follow your mouse.
//           </p>
//         </Spotlight>
//       </ComponentPreview>
//     </main>
//   );
// }


// import { BentoGridDemo } from "@/components/demos/bento-grid-demo";
// import { Spotlight } from "@/components/ui/spotlight";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white space-y-12">
//       <div className="text-center space-y-2">
//         <h1 className="text-4xl font-bold tracking-tight">AtlanticUI Components</h1>
//         <p className="text-neutral-400">Animated layout primitives for Next.js & Tailwind CSS.</p>
//       </div>

//       <Spotlight className="max-w-md text-center">
//         <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
//         <p className="mt-2 text-sm text-neutral-400">
//           Hover over this card to see a radial gradient light effect follow your mouse cursor.
//         </p>
//       </Spotlight>

//       <section className="w-full max-w-4xl">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Bento Grid Layout</h2>
//         <BentoGridDemo />
//       </section>
//     </main>
//   );
// }





// // import { Spotlight } from "@/components/ui/spotlight";

// // export default function Home() {
// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
// //       <h1 className="mb-8 text-4xl font-bold tracking-tight">AtlanticUI</h1>
      
// //       <Spotlight className="max-w-md text-center">
// //         <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
// //         <p className="mt-2 text-sm text-neutral-400">
// //           Hover over this card to see a radial gradient light effect follow your mouse cursor.
// //         </p>
// //       </Spotlight>
// //     </main>
// //   );
// // }