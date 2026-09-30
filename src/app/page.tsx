import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">AtlanticUI</h1>
      
      <Spotlight className="max-w-md text-center">
        <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
        <p className="mt-2 text-sm text-neutral-400">
          Hover over this card to see a radial gradient light effect follow your mouse cursor.
        </p>
      </Spotlight>
    </main>
  );
}