const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B1E]/80 via-[#4A1E6B]/60 to-[#0A0B1E]/80"></div>

      {/* Purple Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse"></div>

      {/* Top Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/40 via-transparent to-transparent"></div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E]/60 via-transparent to-transparent"></div>
    </div>
  );
};

export default HomePage;