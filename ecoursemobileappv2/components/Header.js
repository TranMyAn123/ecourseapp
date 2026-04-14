import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Apis, { endpoints } from "../configs/Apis";
import { Chip } from "react-native-paper";
import Styles from "../styles/Styles";

const Header = () => {

    const[categories, setCategories] = useState([]);

    const loadCategories = async () => {
        try{
            let res = await Apis.get(endpoints['categories']);
            console.info(res.data)
            setCategories(res.data);
        }catch(ex){
            console.error(ex);
        }
            
        
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return(
        <View style={[Styles.row, Styles.wrap]}>
            {categories.map(c => <View style={Styles.padding} key={c.id}>
                <Chip icon="label">{c.name}</Chip>
            </View>)}
        </View>
    );
}

export default Header;