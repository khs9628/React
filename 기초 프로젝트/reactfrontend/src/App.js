import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      results: [],
    }
  }
  
  componentDidMount(){
    this.getPosts()
  }

  async getPosts(){
    const _results = await api.getAllPosts()
    //_results.data에는 아무 데이터가 없다. -> 비동기
    this.setState({results: _results.data})
    console.log(_results)
  }

  handlingChange = (event)=> {
    this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault() //event의 기능 -> 막는다
    let result = await api.createPost({title: this.state.title, content: this.state.content})
    console.log("완료! "+ result)
    this.setState({title: '', content: ''})
    this.getPosts()
  }

  handlingDelete = async (id) => {
    await api.deletePost(id)
    this.getPosts()
  } 


  render(){
  return (
    <div className="App">
      <Container maxWidth="lg">
      <div className="PostingSection">
        <Paper className="PostingPaper">
          <h2>대나무 숲 작성하기</h2>
          <form className="PostingForm" onSubmit={this.handlingSubmit}>
          <TextField
            id="outlined-name"
            label="title"
            name="title"
            // className={classes.textField}
            value={this.state.title}
            onChange={this.handlingChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="content"
            name="content"
            multiline
            rows="4"
            // className={classes.textField}
            value={this.state.content}
            onChange={this.handlingChange}
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" type ="submit">제출하기</Button>
          </form>
        </Paper>
      </div>
      
      <div className="ViewSection">
        {
          this.state.results.map((post) =>
            <Card className={'card'}>
              <CardContent>
                <Typography>
                  <PostView key = {post.id} id = {post.id} title = {post.title} content = {post.content}/>
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary" size="small" onClick={(event)=>this.handlingDelete(post.id)}>삭제하기</Button>
              </CardActions>
            </Card>
          )
        }
      </div>
      </Container>
    </div>
  );
  }
}

export default App;
