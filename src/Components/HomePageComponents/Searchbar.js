import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../../Styles/HomePageComponents/search-bar.css'

export default function CustomizedInputBase() {
    const [searchString, setSearchString] = useState("")

    const handleSearch = () => {
        console.log("SEARCH", searchString)
    }

  return (
    <Paper component="form" className="search-bar">
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        onChange={(event) => {
            setSearchString(event.target.value);
        }}
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={handleSearch}/>
      </IconButton>
    </Paper>
  );
}