// Welcome and Image display
/*
import React,{Component} from "react";
import { Image, StyleSheet, View, Text } from "react-native";

class ChildClass extends Component{
    render(){
        return(
            
                <Text style={styles.welcome}>Welcome {this.props.name}!</Text>
            
        )
    }
}

export default class App extends Component{ 
    render(){
        let imagePath={uri:'https://images6.alphacoders.com/727/thumbbig-727838.webp'};
        return(
            <View style={styles.container}>
                <ChildClass name='Ichigo Kurosaki'/>
                <ChildClass name='Naruto Uskimaki'/>
                <ChildClass name='JBL'/>
                <Image source={imagePath} style={styles.image} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(252,236,197)'
    },
    welcome:{
        fontSize:30,
        textAlign:'center',
        margin:10,
        color:'rgb(149,62,10)'
    },
    image:{
        width:250,
        height:250,
        borderRadius:50,
        marginTop:30
    },
})
*/

//Importing StyleComponent from different JS file
/*
import React,{Component} from "react";
import { StyleSheet,text,View } from "react-native";
import StyleComponent from "./StlyeComponent";

export default class App extends React.Component{
    state={
        myState:'This is my state, style through external style'
    }
    render(){
        return(
            <View>
                <StyleComponent myState={this.state.myState} />
            </View>
        )
    }
}
*/

//Fixed Dimension
/*
import React,{Component} from "react";
import { StyleSheet, View } from "react-native";

export default class HeightWidth extends Component{
    render(){
        return(
            <View>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    powderblue:{
        width:100,
        height:100,
        backgroundColor:'powderblue'
    },
    skyblue:{
        width:200,
        height:200,
        backgroundColor:'skyblue'
    },
    steelblue:{
        height:300,
        width:300,
        backgroundColor:'steelblue'
    }
})
*/

//Flex dimension
/*
import React,{Component} from "react";
import { StyleSheet,View } from "react-native";

export default class HeightWidth extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    powderblue:{
        flex:1,
        backgroundColor:'powderblue'
    },
    skyblue:{
        flex:2,
        backgroundColor:'skyblue'
    },
    steelblue:{
        flex:3,
        backgroundColor:'steelblue'
    }
})
*/

//Button
/*
import React,{Component} from "react";
import { Alert,AppRegistry,Button,StyleSheet,View } from "react-native";

export default class ButtonBasics extends Component{
    onPressButton(){
        Alert.alert('You clicked the button')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.onPressButton} title='Press Me'/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.onPressButton} title='Press Me' color='#009933'/>
                </View>
                <View style={styles.multiButtonContainer}>
                    <Button onPress={this.onPressButton} title='A disabled button' disabled={true}/>
                    <Button onPress={this.onPressButton} title='OK!' color='#009933'/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    buttonContainer:{
        margin:20,
    },
    multiButtonContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})
*/

//Flexbox
/*
import React,{Component} from "react";
import { StyleSheet,View } from "react-native";

export default class FlexDirectionBasics extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    powderblue:{
        width:60,
        height:60,
        backgroundColor:'powderblue'
    },
    skyblue:{
        width:60,
        height:60,
        backgroundColor:'skyblue'
    },
    steelblue:{
        width:60,
        height:60,
        backgroundColor:'steelblue'
    }
})
*/

//Element with Flex
/*
import React,{Component} from "react";
import { StyleSheet,TextInput,View, Button } from "react-native";

export default class App extends Component{
    state={
        placeName:"",
        places:[]
    }
    placeNameChangeHandler = val =>{
        this.setState({
            placeName:val
        });
    };
    placeSubmitHandler = () =>{
        alert('Button Clicked!')
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput placeholder="An awesome place" onChangeText={this.placeNameChangeHandler} style={styles.textStyle}/>
                    <Button title="Button" onPress={this.placeSubmitHandler} 
                    style={styles.buttonStyle}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:26,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
    },
    innerContainer:{
        // flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textStyle:{
        width:"70%",
        backgroundColor:'gray'
    },
    buttonStyle:{
        width:"30%",
    }
})
*/

//ScrollView:Vertical
/*
import React,{Component} from "react";
import { ScrollView,View,Text,Button,StyleSheet } from "react-native";

export default class ScrolledViewExample extends Component{
    onPressButton(){
        alert('You clicked the button!')
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Naruto</Text>
                <Button title={'Button: 1'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Itachi</Text>
                <Button title={'Button: 2'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Ichigo</Text>
                <Button title={'Button: 3'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Sasuke</Text>
                <Button title={'Button: 4'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Sakura</Text>
                <Button title={'Button: 5'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Minato</Text>
                <Button title={'Button: 6'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Zoro</Text>
                <Button title={'Button: 7'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Monkey D. Luffy</Text>
                <Button title={'Button: 8'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Sanji</Text>
                <Button title={'Button: 9'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Usopp</Text>
                <Button title={'Button: 10'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Ace</Text>
                <Button title={'Button: 11'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Sabo</Text>
                <Button title={'Button: 12'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Deku</Text>
                <Button title={'Button: 13'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Ram</Text>
                <Button title={'Button: 14'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Shiva</Text>
                <Button title={'Button: 15'} onPress={this.onPressButton}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={{fontSize:20}}>Bramha</Text>
                <Button title={'Button: 16'} onPress={this.onPressButton}/>
                </View>
                
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    }
})
*/

//ScrollView:Vertical
/*
import React,{Component} from "react";
import { ScrollView,View,Image,Text,Button,StyleSheet } from "react-native";

export default class ScrolledViewExample extends Component{
    onPressButton(){
        alert('You clicked the button')
    }
    render(){
        return(
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                <Text style={{fontSize:22,padding:10}}>Horizontal ScrollView</Text>
                <View style={{width:220,height:70,padding:10}}>
                    <Button 
                    onPress={this.onPressButton}
                    title='Button 1'
                    color='#FF3D00'/>
                </View>
                <Text style={{fontSize:22,padding:10}}>JBL</Text>
                <View style={{width:220,height:70,padding:10}}>
                    <Button 
                    onPress={this.onPressButton}
                    title='Button 2'
                    color='#3D00FF'/>
                </View>
                <Text style={{fontSize:22,padding:10}}>ReactNative ScrollView</Text>
                <View style={{width:220,height:70,padding:10}}>
                    <Button 
                    onPress={this.onPressButton}
                    title='Button 3'
                    color='#FFFF3D'/>
                </View>
                <Text style={{fontSize:22,padding:10}}>If U Like</Text>
                <View style={{width:220,height:70,padding:10}}>
                    <Button 
                    onPress={this.onPressButton}
                    title='Button 4'
                    color='#FF3DFF'/>
                </View>
                <Text style={{fontSize:22,padding:10}}>Scrolling Horizontal</Text>
                <View style={{width:220,height:70,padding:10}}>
                    <Button 
                    onPress={this.onPressButton}
                    title='Button 5'
                    color='#3DFF00'/>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:200,
    },
})
*/

//FlatView
/*
import React,{Component} from "react";
import { Text,FlatList,StyleSheet,View,Alert } from "react-native";

export default class FlatListBasics extends Component{
    renderSeparator = () =>{
        return(
            <View 
            style={{height:1,width:'100%',backgroundColor:'#000'}}/>
        )
    };
    getListViewItem = (item) =>{
        Alert.alert(item.key);
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                data={[
                    {key:'Android'},{key:'Python'},{key:'Java'},{key:'JavaScript'},{key:'C++'},
                    {key:'C'},{key:'C#'},{key:'Ajax'},{key:'Ruby'},{key:'Rails'},{key:'Pandas'},
                    {key:'Perl'},{key:'.Net'},{key:'php'},{key:'SAP'},{key:'iOS'},{key:'Swift'},
                    {key:'Hadoop'},{key:'Go'},{key:'Kotlin'},{key:'Flutter'},{key:'Dart'}
                ]}
                renderItem={({item})=>
                <Text style={styles.item} onPress={this.getListViewItem.bind(this,item)}>{item.key}</Text>}
                ItemSeparatorComponent={this.renderSeparator}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        borderTopWidth:0.5,
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
        color:'darkcyan',
        backgroundColor:'skyblue'
    }
})
*/

//SectionList
/*
import React,{Component} from "react";
import { Text,View,StyleSheet,SectionList } from "react-native";

export default class SectionListBasics extends Component{
    getListViewItem = (item)=>{
        alert(item);
    }
    render(){
        return (
            <View style={styles.container}>
                <SectionList 
                sections={[
                    {title:'A',data:['AlTERED','ABBY','ACTION U.S.A','AMUCK','ANGUSH']},
                    {title:'B',data:['BEST MEN','BEYOND JUSTICS','BLACK GUNN','BLOOD RANCH','BESTIE']},
                    {title:'C',data:['CARTEL','CASLE OF EVIL','CHANCE','COP GAME','CROSS FIRE']},
                ]}
                renderItem={({item})=>
                <Text style={styles.item} onPress={this.getListViewItem.bind(this,item)}>{item}</Text>}
                renderSectionHeader={({section})=>
                <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item,index)=>index}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5ead97'
    },
    sectionHeader:{
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:10,
        paddingRight:10,
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        backgroundColor:'#8fb1aa'
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    }
})
*/

//Touchables
/*
import React,{Component} from "react";
import { Alert,Platform,StyleSheet,Text,TouchableHighlight,TouchableOpacity,
    TouchableNativeFeedback,TouchableWithoutFeedback,View } from "react-native";

export default class Touchables extends Component{
    _onPressButton(){
        Alert.alert('You tapped the Button!')
    }
    _onLongPressButton(){
        Alert.alert('You Long pressed the Button!')
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback 
                onPress={this._onPressButton} 
                background={Platform.OS=='android'?TouchableNativeFeedback.SelectableBackground():''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithLongPress</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        paddingTop:60,
        alignItems:'center'
    },
    button:{
        marginBottom:30,
        width:270,
        alignItems:"center",
        backgroundColor:'#5ead97'
    },
    buttonText:{
        padding:20,
        color:'white',
        fontSize:18
    }
})
*/

//TextInput: Singleline
/*
import React,{Component} from "react";
import { View,TextInput,Text, } from "react-native";

export default class PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render(){
        return(
            <View style={{padding:10}}>
                <TextInput
                style={{height:40,backgroundColor:'azure',fontSize:20}}
                placeholder='Type here to translate!'
                onChangeText={(text)=>this.setState({text})}
                />
                <Text style={{padding:100,fontSize:50}}>
                    {this.state.text.split('').map((word)=>word&&'🍕').join('')}
                </Text>
            </View>
        )
    }
}
*/

//TextInput: Multiline
/*
import React,{Component} from "react";
import {View,TextInput} from 'react-native';

class UselessTextInput extends Component{
    render(){
        return(
            <TextInput 
            {...this.props}
            editable={true}
            maxLength={40}/>
        )
    }
}
export default class UselessTextInputMultiline extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'Useless Multiline Placeholder'
        };
    };
    render(){
        return(
            <View style={{backgroundColor:this.state.text,borderBottomColor:'#000000',borderBottomWidth:1}}>
                <UselessTextInput multiline={true} numberOfLines={5} onChangeText={(text)=>this.setState({text})} value={this.state.text} style={{fontSize:20}}/>
            </View>
        )
    }
}
*/

//ActivityIndicator
/*
import React,{Component} from "react";
import { ActivityIndicator,StyleSheet,Text,View } from "react-native";


export default class ActivityIndicatorDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            animating:true
        }
    }
    // state={animating:true}
    closeActivityIndicator = () =>setTimeout(()=>this.setState({
        animating:false
    }),3000)
    componentDidMount = () =>this.closeActivityIndicator()
    render(){
        return(
            <View style={[styles.container,styles.horizontal]}>
                <ActivityIndicator animating={this.state.animating} size='large' color='#ff0000'/>
                <ActivityIndicator size='small' color='#44ff00'/>
                <ActivityIndicator size='large' color='#rtwrw'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center'  
    },  
    horizontal: {  
        flexDirection: 'row',  
        justifyContent: 'space-around',  
        padding: 10  
    }  
})  
*/

//Picker
/*
import React,{Component} from "react";
import { StyleSheet,View,Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class SwitchExample extends Component{
    constructor(props){
        super(props);
        this.state={
            choooseIndex:0
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Picker Example</Text>
                <Picker style={styles.pickerStyle}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue,itemPosition)=>
                    this.setState({language:itemValue,choooseIndex:itemPosition})}
                >
                <Picker.Item label='Java' value='java'/>
                <Picker.Item label='JavaScript' value='js' />
                <Picker.Item label='ReactNative' value='rn'/>
                </Picker>
                <Text style={styles.textStyle}>{"Index="+this.state.choooseIndex}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
})  
*/

//Status Bar
/*
import React,{Component} from "react";
import { View,StyleSheet,StatusBar} from "react-native";

export default class ActivityIndicatorDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#b3e6ff'
                barStyle='dark-content'
                hidden={false}
                translucent={true}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
*/

//Switch
/*
import React,{Component} from "react";
import { StyleSheet,Switch,View,Text } from "react-native";

export default class SwitchExample extends Component{
    constructor(props){
        super(props);
        this.state={
            switchValue:false,
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Switch Example</Text>
                <Text style={styles.textStyle}>{this.state.switchValue?'on':'off'}</Text>
                <Switch value={this.state.switchValue}
                onValueChange={(switchValue)=>this.setState({switchValue})}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        margin:24,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        color:'#344953'
    }
})
*/

//Webview
/*
import React,{Component} from "react";
import { StyleSheet,View } from "react-native";
import WebView from 'react-native-webview';

export default class ActivityIndicatorDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView 
                source={{uri:'https://www.javatpoint.com'}}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
*/

//Progress Bar
/*
import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default class MyApp extends Component{
    constructor(props){
        super(props);
        this.state={
            progressStatus:0,
        }
    };

    start_Progress=()=>{
        this.value=setInterval(()=>{
            if(this.state.progressStatus<=1){
                this.setState({progressStatus:this.state.progressStatus+.01})
            }
        },100);
    };

    stop_Progress=()=>{
        clearInterval(this.value);
    };

    clear_Progress=()=>{
        this.setState({progressStatus:0.0})
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20,color:"#000"}}>Progress Value:{parseFloat((this.state.progressStatus * 100).toFixed(3))} %</Text>
                <ProgressBar
                styleAttr='Horizontal' progress={this.state.progressStatus} indeterminate={false}/>

                <TouchableOpacity activeOpacity={1} style={styles.button} onPress={this.start_Progress}>
                    <Text style={styles.TextStyle}>Start Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={styles.button} onPress={this.stop_Progress}>
                    <Text style={styles.TextStyle}>Stop Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={styles.button} onPress={this.clear_Progress}>
                    <Text style={styles.TextStyle}>Reset Progress</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingTop:0,
        margin:20
    },
    button:{
        width:'100%',
        backgroundColor:'#00BCD4',
        borderRadius:5,
        padding:10,
        marginTop:10,
    },
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    }
})
*/

//Animated Bar
/*
import React,{Component} from "react";
import { Platform,StyleSheet,Text,View,Animated } from "react-native";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            progressStatus:0
        }
    };
    anim = new Animated.Value(0);
    componentDidMount(){
        this.onAnimate();
    };
    onAnimate=()=>{
        this.anim.addListener(({value})=>{
            this.setState({progressStatus:parseInt(value,10)});
        });
        Animated.timing(this.anim,{
            toValue:100,
            duration:50000,
        }).start();
    };
    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.inner,{width:this.state.progressStatus+'%'}]}/>
                <Animated.Text style={styles.label}>{this.state.progressStatus}%</Animated.Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        padding:3,
        borderColor:'#FAA',
        borderWidth:3,
        borderRadius:30,
        marginTop:200,
        justifyContent:'center',
    },
    inner:{
        width:'100%',
        height:30,
        borderRadius:15,
        backgroundColor:'cyan',
    },
    label:{
        fontSize:23,
        color:'black',
        position:'absolute',
        zIndex:1,
        alignSelf:'center',
    }
})
*/

//Animated.timing : ex-1
/*
import React,{Component} from "react";
import { StyleSheet,Text,View,Animated,Easing } from "react-native";

export default class DisplayAnImage extends Component{
    constructor(){
        super();
        this.spinValue = new Animated.Value(0);
    }
    
    componentDidMount(){
        this.spin()
    }
    spin(){
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,{toValue:1,duration:5000,easing:Easing.linear}
        ).start(()=>this.spin())
    }
    render(){
        const spin = this.spinValue.interpolate({
            inputRange:[0,1],
            outputRange:['360deg','0deg']
        })
        return(
            <View style={styles.container}>
                <Text style={{paddingBottom:60, color:'purple', fontSize:40, fontWeight:'800',fontFamily:'Sans-serif'}}>Genjutstu</Text>
                <Animated.Image 
                style={{width:200,height:200,transform:[{rotate:spin}]}}
                source={require('./assets/Rinnegan.png')}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
*/

//Animated.timing: ex-2
/*
import React,{Component} from "react";
import { StyleSheet,Text,View,Animated,Easing } from "react-native";

export default class DisplayAnImage extends Component{
    constructor(){
        super();
        this.animatedValue = new Animated.Value(0);
    };
    componentDidMount(){
        this.animate()
    };
    animate(){
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,{toValue:1,duration:2000,easing:Easing.linear}
        ).start(()=>this.animate())
    }
    render(){
        const marginLeft = this.animatedValue.interpolate({
            inputRange:[0,1],
            outputRange:[0,300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[0,1,0]
        })
        const opacityB = this.animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[1,0,1]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[0,300,0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[18,32,18]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange:['0deg','180deg','0deg']
        })

        return(
            <View style={styles.container}>
                <Animated.View style={{marginLeft,height:30,width:40,backgroundColor:'red'}} />
                <Animated.View style={{opacity,marginTop:10,height:30,width:40,backgroundColor:'blue'}}/>
                <Animated.View style={{opacity:opacityB,marginLeft:movingMargin, marginTop:10,height:30,width:40,backgroundColor:'orange'}}/>
                <Animated.View style={{fontSize:textSize,marginTop:10,color:'green'}}>Animated Text!</Animated.View>
                <Animated.View style={{transform:[{rotateX}],marginTop:50,height:50,width:80,backgroundColor:'black'}}>
                    <Text style={{color:'white'}}>Hello from TransformX</Text>
                </Animated.View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:150
    }
})
*/

//LayoutAnimation
/*
import React,{Component} from "react";
import { NativeModules,LayoutAnimation,Text,TouchableOpacity,StyleSheet,View } from "react-native";

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            w:100,
            h:100
        }
    };
    _onPress = () =>{
        LayoutAnimation.spring();
        this.setState({w:this.state.w+15, h:this.state.h+15})
    }
    _onReset=()=>{
        LayoutAnimation.spring();
        this.setState({w:this.state.w-15,h:this.state.h-15})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.box,{width:this.state.w,height:this.state.h}]}/>
                <View style={styles.inner}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Increase!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onReset}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Decrease!</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    box:{
        width:200,
        height:200,
        backgroundColor:'blue',
    },
    button:{
        backgroundColor:'green',
        paddingHorizontal:20,
        paddingVertical:15,
        marginTop:15,
        marginLeft:1
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold'
    },
    inner:{
        flexDirection:'row',
    }
})
*/

//Image
/*
import React,{Component} from "react";
import { StyleSheet,Text,View,Image,ImageBackground } from "react-native";

export default class App extends Component{
    render(){
        return(
            <ImageBackground source={require('./assets/yinyang.png')} style={{width:'100%',height:'100%'}}>
                <Image source={require('./assets/icon.png')}/>
                <Image source={require('./assets/Rinnegan.png')}/>
                <Image source={require('./assets/yinyang.png')}/>
                <Image source={{uri:'https://thumbnail.imgbin.com/14/3/1/imgbin-agar-io-bleach-anime-logo-manga-bleach-tKu2KgA9Yq3gQcdyL1dZUafLD_t.jpg'}} style={{width:60,height:60}}/>
                <Image source={{uri:'https://thumbnail.imgbin.com/15/6/3/imgbin-anime-music-video-hatsune-miku-apple-iphone-7-plus-desktop-anime-6U59UAaiqdW6ZtUbMkpwExmSK_t.jpg'}} style={{width:'80',height:'70'}}/>
                <Image style={{width:60,height:60}} source={{uri:'https://thumbnail.imgbin.com/17/8/0/anime-icon-animexx-icon-HRHrKq20_t.jpg'}}/>
            </ImageBackground>

        )
    }
}
*/

// random-quote-generator

import React,{Component} from "react";
import { Text,View,TouchableOpacity,StyleSheet } from "react-native";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            currAuth:'Author',
            currQuote:'Quote'
        }
    };
    _onPress(){
        this.assignQuote();
    };
    quoteData = require('./data.json').quotes;
    
    getRandomQuote(){
        return this.quoteData[Math.floor(Math.random()*(this.quoteData.length))]
    };
    assignQuote(){
        randomQuote = this.getRandomQuote();
        this.setState({
            currAuth:randomQuote.author,
            currQuote:randomQuote.quote
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.quote}>{this.state.currQuote}</Text>
                    <Text style={styles.author}>-{this.state.currAuth}</Text>
                </View>
                <TouchableOpacity style={{alignItems:'center',border:'1px solid black'}} onPress={this._onPress.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>New Quote</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
        border:'1px solid black'
    },
    quote:{
        color:'green',
        fontSize:20,
        fontWeight:'800'
    },
    author:{
        color:'green',
        marginLeft:150
    },
    button:{
        backgroundColor:'green',
        paddingVertical:15,
        
        width:'8%',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    }
})
