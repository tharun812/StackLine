import { Chart } from "react-google-charts";
import productData from "../../data/data.json"

let data: any[] = [];
data.push([{ type: "date", label: "Date" }, {type: "number", label: "Retail Sales"}, {type: "number", label: "Wholesale Sales"}]);
productData[0].sales.forEach((element)=>{
    data.push([new Date(element.weekEnding), element.retailSales, element.wholesaleSales])
})



export default function ProductSalesChart(){
    const options = {
        curveType: "function",
        legend: { position: "top" },
        pointSize: 3,
        Animation:{
            Easing: 'linear'
        },
        vAxis: {
            textPosition: 'none',
            minValue: 0
        },
        hAxis:{
            format: 'MMM'
        }
    };
    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}