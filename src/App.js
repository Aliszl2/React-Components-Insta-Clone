/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import dummyData from "./dummy-data";
// console.log(dummyData);

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const[newComment, setComment]=useState({
    username:"",
    text:""
  });
  const addNewComment=(cmt)=>{
    console.log(cmt);
    const newComment ={
      ...cmt,
      id: Date.now()
    }
    setComment([...dummyData, newComment])
  }
// console.log(props.comments);

  const handleChange = event => {
    setSearchInput(event.target.value);
  };
 
  // console.log(searchInput);
  const filteredPosts = dummyData.filter(characters => 
    // console.log(charachters);
    characters.username.toLowerCase().includes(searchInput.toLowerCase())
  );
  // console.log(filteredPosts);
  return (
    <div className="App">
      <SearchBar
        //  data={filteredPosts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleChange={handleChange}
      />
      <PostsPage
        data={filteredPosts}
        addNewComment={addNewComment}
        // filteredPosts={filteredPosts}
        // data={dummyData}
      />
    </div>
  );
};

export default App;
