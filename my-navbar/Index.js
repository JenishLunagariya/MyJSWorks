// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Pressable} from 'react-native';
import './App.css'

export default function App() {
  return (
    <div className='wrapper'>
      <div className='quote-box'>
        <div className='quote-text'>
          <i className='fa fa-quote-left'></i>
          <span id='text'></span>
        </div>
        <div className='quote-author'>
          -
          <span id='author'></span>
        </div>
        <div className='buttons'>
          <a className='button' id='tweet-quote' title='Tweet this quote!' href='#'>
            <i className='fa fa-twitter'></i>
          </a>
          <a className='button' id='tumblr-quote' title='Post this quote on tumblr!' href='#'>
            <i className='fa fa-tumblr'></i>
          </a>
          <button className='button' id='new-quote'>New Quote</button>
        </div>
      </div>
      <div className='footer'>
        <p>by JBL</p>
      </div>
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     color:'white',
//   }
// });
