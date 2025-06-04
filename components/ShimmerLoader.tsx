const ShimmerLoader = () => {
  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
      <div className="shimmer-wrapper relative h-full w-full overflow-hidden bg-gradient-to-tr from-gray-100 via-gray-50 to-gray-100 ">
        <div className="shimmer animate-shimmer absolute top-0 bottom-0 left-0 w-[90%] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>
    </>
  );
};

export default ShimmerLoader;