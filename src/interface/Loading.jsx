import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="loading">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4a4aff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
