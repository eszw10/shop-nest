import Image from "next/image";

// check loading

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image src={"/loader.gif"} width={150} height={150} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
