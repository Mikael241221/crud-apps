export default function Home() {
  return (
    <div
      className="welcome-page flex flex-col justify-center items-center min-h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          Welcome to the Next.js CRUD App
        </h1>
        <p className="text-white text-lg md:text-2xl drop-shadow">
          Use the navigation to explore posts.
        </p>
      </div>
    </div>
  );
}
