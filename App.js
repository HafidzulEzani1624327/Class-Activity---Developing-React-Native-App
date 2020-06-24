import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, String, Alert } from 'react-native';

export default class WordAnalyzer extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      vowel: 0,
      consonant: 0,
      characters: 0,
      letters:[],
    }
  }

    wordAnalyze  = () => { 

      this.setState({letters: (this.state.word.split(''))} ,
      
      /*callback function*/
      () => { 
      var i=0;
      var vow =0;
      var cons = 0;
      var cha =0;
      
        
          
          
          for ( i=0; i<=this.state.word.length; i++){
      
          if(this.state.letters[i] == 'a'||this.state.letters[i] == 'A'||
            this.state.letters[i] == 'e'||this.state.letters[i] == 'E'||
            this.state.letters[i] == 'i'||this.state.letters[i] == 'I'||
            this.state.letters[i] == 'o'||this.state.letters[i] == 'O'||
            this.state.letters[i] == 'u'||this.state.letters[i] == 'U')
              {
                vow++;
                this.setState({vowel: Number((vow))});
              }
          
          else if(this.state.letters[i] == 'b'||this.state.letters[i] == 'B'||
          this.state.letters[i] == 'c'||this.state.letters[i] == 'C'||
          this.state.letters[i] == 'd'||this.state.letters[i] == 'D'||
          this.state.letters[i] == 'e'||this.state.letters[i] == 'E'||
          this.state.letters[i] == 'f'||this.state.letters[i] == 'F'||
          this.state.letters[i] == 'g'||this.state.letters[i] == 'G'||
          this.state.letters[i] == 'h'||this.state.letters[i] == 'H'||
          this.state.letters[i] == 'j'||this.state.letters[i] == 'J'||
          this.state.letters[i] == 'k'||this.state.letters[i] == 'K'||
          this.state.letters[i] == 'l'||this.state.letters[i] == 'L'||
          this.state.letters[i] == 'm'||this.state.letters[i] == 'M'||
          this.state.letters[i] == 'n'||this.state.letters[i] == 'N'||
          this.state.letters[i] == 'p'||this.state.letters[i] == 'P'||
          this.state.letters[i] == 'q'||this.state.letters[i] == 'Q'||
          this.state.letters[i] == 'r'||this.state.letters[i] == 'R'||
          this.state.letters[i] == 's'||this.state.letters[i] == 'S'||
          this.state.letters[i] == 't'||this.state.letters[i] == 'T'||
          this.state.letters[i] == 'v'||this.state.letters[i] == 'V'||
          this.state.letters[i] == 'w'||this.state.letters[i] == 'W'||
          this.state.letters[i] == 'x'||this.state.letters[i] == 'X'||
          this.state.letters[i] == 'y'||this.state.letters[i] == 'Y'||
          this.state.letters[i] == 'z'||this.state.letters[i] == 'Z')
            {
              cons++;
              this.setState({consonant: Number((cons))});
            }    
          else 
              {
                cha++;
                this.setState({characters: Number((this.state.word.length - cha +1))});
              }
            
            }
          });
    }
      


  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.contents}>World Analyzer</Text>
       
        <TextInput style={styles.contents} onChangeText={(word) => 
          this.setState({word})} placeholder='enter word here'/>
        
        
        <Button style={styles.contents}
        onPress={this.wordAnalyze}
        title='Analyze'/>
        
        <Text style={styles.contents}>Word(s) :{this.state.word}</Text>
        <Text style={styles.contents}>No of Consonants :{this.state.consonant}</Text>
        <Text style={styles.contents}>No of Vowels :{this.state.vowel}</Text>
        <Text style={styles.contents}>No of Characters :{this.state.characters}</Text>
      </View>
    )
  }

}
const styles = StyleSheet.create({
 
  container: {
    marginTop: '40%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    contents: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 50,
    fontWeight: '600',
    }
  });

