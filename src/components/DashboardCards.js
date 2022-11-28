import React from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardCard from './DashboardCard';

const inventoryImg = "https://www.iconsdb.com/icons/preview/white/edit-11-xxl.png";
const purchaseImg = "https://www.iconsdb.com/icons/preview/white/buy-xxl.png";
const ordersImg = "https://www.iconsdb.com/icons/preview/white/purchase-order-xxl.png";
const errorImg = "https://www.iconsdb.com/icons/preview/white/error-3-xxl.png";
const jobsImg=  "https://www.iconsdb.com/icons/preview/white/gear-xl.png";
const reportsImg=  "https://www.iconsdb.com/icons/preview/white/report-xxl.png";

const DashboardCards = (navigation) => {
    return (
        <View style={styles.container}>
            <DashboardCard title="Inventory" icon= {inventoryImg}/>
            <DashboardCard title="Purchase" icon={purchaseImg}/>
            <DashboardCard title="Orders" icon= {ordersImg} />
            <DashboardCard title="Issues" icon={errorImg} />
            <DashboardCard title="Jobs" icon={jobsImg} />
            <DashboardCard title="Reports" icon={reportsImg} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})
export default DashboardCards;
