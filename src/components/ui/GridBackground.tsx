
export function GridBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="h-full py-4 lg:py-8 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Content inside the background */}
        <div className="relative z-10 w-full">{children}</div>
      </div>
    );
  }
  