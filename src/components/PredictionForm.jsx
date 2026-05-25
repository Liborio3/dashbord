import { useState } from "react";
import {predictBot} from "../utils/FakeModel"

function PredictionForm(){
    const [followers, setFollowers] = useState("");
    const [result, setResult] = useState("");

    const handlePredict = () =>{
        const prediction = predictBot(Number(followers));
        setResult(prediction);
    };
return(
<div className="card shadow-sm">
    <div className="card-body">
        <h2 className="mb-4">Prediccion</h2>
            <input type="number" className="form-control mb-3" placeholder="Followers" value= {followers}
            onChange={(e) => setFollowers(e.target.value)}>
            </input>
            
            <button className="btn btn-primary" onClick={handlePredict}>
                Predecir
            </button>
            {result &&(
                <div className="alert-info mt-4">
                    Resultado: <strong>{result}</strong>
                </div>
            )}
    </div>
</div>

)
}
export default PredictionForm;