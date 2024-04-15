import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { ProductSales } from "../../model/product";

export default function ProductSalesChart(){
    const product = useSelector((state:any) => state.product.product[0]);
    let chartData: any[] = [];
    chartData.push([{ type: "date", label: "Date" }, {type: "number", label: "Retail Sales"}, {type: "number", label: "Wholesale Sales"}]);
    product?.sales.forEach((element: ProductSales)=>{
        chartData.push([new Date(element.weekEnding), element.retailSales, element.wholesaleSales])
    })

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
                height="600px"
                data={chartData}
                options={options}
            />
        </>
    )
}