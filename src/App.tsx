import { Button, Grid, List, TextField, Box, ListItem } from "@mui/material";
import React, { useCallback, useState } from "react";

const TaskTracker = () => {
  const [inputText, setInputText] = useState("");
  const [allTasks, setAllTasks] = useState<string[]>([]);
  const [errors, setErrors] = useState("");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);
  const handleClick = () => {
    if (inputText.trim().toLowerCase() !== "") {
      setErrors("No data found");
      return;
    }
    setAllTasks([...allTasks, inputText]);
  };
  return (
    <Grid container>
      <Grid item>
        <TextField onChange={handleChange} value={inputText} />
        <Tasks tasks={allTasks} />
        <Button onClick={handleClick}>Add new Task</Button>
      </Grid>
    </Grid>
  );
};

interface ITasks {
  tasks: string[];
}

const Tasks = ({ tasks }: ITasks) => {
  return (
    <List>
      {tasks.map((item, index) => (
        <Box key={index}>
          <ListItem>{item}</ListItem>
        </Box>
      ))}
    </List>
  );
};
export default TaskTracker;
