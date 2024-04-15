import ProductInfo from "./ProductInfo";
import ProductSalesChart from "./ProductSalesChart";
import styles from "../../styles/productdetail.module.css"
import { useEffect, useState } from "react";
import ProductSalesTable from "./ProductSalesTable";
import { getProductData } from "../../services/productService";
import { initializeProduct } from "../../state/product/productSlice";
import { useDispatch } from "react-redux";

enum Type{
    Chart = "Chart",
    Table = "Table"
}

export default function ProductDetail(){
    const [displayType, setDisplayType] = useState(Type.Chart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeProduct(getProductData()));
    }, []);

    function handleClick(type: Type){
        setDisplayType(type);
    }

    return (
        <>
            <div className={styles.productDetailView}>
                <div className={styles.productInfoContainer}>
                    <ProductInfo></ProductInfo>
                </div>
                <div className={styles.productSalesChartContainer}>
                    <div className={styles.displayOptionsContainer}>
                        <button onClick={() => handleClick(Type.Chart)} className={ displayType === Type.Chart ? `btn ${styles.activeBtn}`: "btn"}>Chart</button>
                        <button onClick={() => handleClick(Type.Table)} className={ displayType === Type.Table ? `btn ${styles.activeBtn}`: "btn"}>Table</button>
                    </div>
                    {
                        displayType === Type.Chart ?   <ProductSalesChart></ProductSalesChart> : <ProductSalesTable></ProductSalesTable>
                    }
                </div>
            </div>
        </>
    )
}