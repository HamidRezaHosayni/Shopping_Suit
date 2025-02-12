import { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time_loder=setTimeout(() => {
      setIsLoading(false);
     
    }, 1000);
    ()=>{clearInterval(time_loder)}
  }, [setIsLoading,isLoading]);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center w-full h-full fixed left-0">
        <Triangle
          visible={true}
          height="250"
          width="250"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return <div>{children}</div>;
};
export default Layout;