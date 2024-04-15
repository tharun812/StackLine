import { useSelector } from "react-redux";
import { createColumnHelper} from "@tanstack/react-table";
import { ProductSales } from "../../model/product";
import React from "react";
import BasicTable from "../common/BasicTable";
import styles from '../../styles/productdetail.module.css'


export default function ProductSalesTable(){
    const sales = useSelector((state:any) => state.product.product[0].sales);
    const [data, _setData] = React.useState(sales);
    const columnHelper = createColumnHelper<ProductSales>();
    const columns = [
        columnHelper.accessor('weekEnding', {
            header: () => 'Week Ending',
            cell: info => info.getValue(),
            sortUndefined: 'last',
            sortDescFirst: false,
        }),
        columnHelper.accessor('retailSales', {
            header: () => 'Retail Sales',
            cell: info => info.getValue(),
            sortUndefined: 'last',
            sortDescFirst: false,
        }),
        columnHelper.accessor('wholesaleSales', {
            header: () => 'Wholesale Sales',
            cell: info => info.getValue(),
            sortUndefined: 'last',
            sortDescFirst: false,
        }),
        columnHelper.accessor('unitsSold', {
            header: () => 'Units Sold',
            cell: info => info.getValue(),
            sortUndefined: 'last',
            sortDescFirst: false,
        }),
        columnHelper.accessor('retailerMargin', {
            header: () => 'Retail Margin',
            cell: info => info.getValue(),
            sortUndefined: 'last',
            sortDescFirst: false,
        })
    ]

    return (
        <div className={styles.tableContainer}>
            <BasicTable data={data} columns={columns}></BasicTable>
        </div>
    )
}