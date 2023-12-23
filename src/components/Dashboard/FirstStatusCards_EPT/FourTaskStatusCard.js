
import { dashboardCardList } from "../../../utilis/constant";
import TaskStatusCard from "./TaskStatusCard";


const FourTaskStatusCard = () => {
   return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

          {/* Card List */}
        <div className="row">
          {dashboardCardList.map((element,index)=>(
            <TaskStatusCard {...element} key={index}/>
          ))}
        </div>

        
      </div>
    </>
  );
};
export default FourTaskStatusCard;
