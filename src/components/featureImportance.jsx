import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

function FeatureImportance(){
    const data = [
        {name: "verified", value: 0.68},
        {name: "desc_length", value:0.440},
        {name: "followers", value: 0.30}
    ];
    return(
        <div className="card shadow-sm mt-4">
            <div className="card-body">
                <h2 className="mb-4">Feature Importence</h2>
                <BarChart width={500} height={300} data={data}>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="value"></Bar>
                </BarChart>
            </div>
        </div>
    )
}
export default FeatureImportance;
