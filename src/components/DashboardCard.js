import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from '../Constants';

const DashboardCard = (props) => {
    const navigation = useNavigation();
    
    const handlePress = () => {
        navigation.navigate('InventoryHome', { name: 'Inventory' } );
        console.log("test");
    }
    return (
        <Card style={styles.cardstyles} onPress={handlePress}>
            {/* <IconButton style={styles.iconButtonstyles} icon={props.icon} onPress={() => { }} size={50} iconColor='white'/> */}
            <Card.Title titleStyle={styles.titleStyle}
                title={props.title}       
            />
             <Image
                style={styles.tinyLogo}
                source={{
                  uri: props.icon,
                }}
              />    
        </Card>
    );
}
const styles = StyleSheet.create({

    cardstyles: {
        backgroundColor: '#7D1E6A',
        margin: 10,
        width: 150,
        height: 150,
        marginTop:40,
    },
    iconButtonstyles: {
        width: 100,
        height: 100,
        margin: 20,
        // backgroundColor:'white',
    },
    titleStyle: {
        color: Constants.primaryBGColor,
        fontSize: 18,
        fontWeight: "bold",
        flexWrap: "wrap",
        textAlign: "center",
    },
    icon:{
        width:100,
        height:100,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf:'center',
      },
})
export default DashboardCard;
