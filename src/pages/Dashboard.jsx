import Metrics from "../components/Metrics";
import PredictionForm from "../components/PredictionForm";
import FeatureImportance from "../components/featureImportance";
import DataTable from "../components/dataTable";
function Dashboard(){
    return(
        <div>
            <h1 className="mb-4">
                Bot Detection Dashboard
            </h1>

            <div className="row g-4">
                <div className="col-md-6">
                    <Metrics></Metrics>
                </div>
                <div className="col-md-6">
                    <PredictionForm></PredictionForm>
                </div>

                <div className="col-12">
                    <FeatureImportance></FeatureImportance>
                </div>
                <div className="col-12">
                    <DataTable></DataTable>
                </div>
            </div>
         </div>
    );
}
export default Dashboard;