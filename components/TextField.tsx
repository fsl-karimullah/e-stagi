import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "@react-native-material/core";

type Props = {
  helpertext?: any;
  value?: any;
  color?: any;
  label: any;
  keyboardType: "default" | "numeric" | "email-address";
  secureTextEntry?: boolean;
  variant?: "standard" | "outlined";
  onChangeText:any
};

const TextField = (props: Props) => {
  return (
    <View style={{ marginHorizontal: 10 }}> 
      <TextInput
        label={props.label}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        variant={props.variant}
        color={props.color}
        helperText={props.helpertext}
        inputContainerStyle={styles.inputStyle}
        
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({ 
  inputStyle: {
    backgroundColor:'#f5f5f5',
    
  },
});
