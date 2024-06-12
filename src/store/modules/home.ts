import { createSlice } from "@reduxjs/toolkit";
interface IState{

}
const initialState:IState = {

};
const counterSlice = createSlice({
  name: "home",
  initialState,
  reducers: {}
});
export default counterSlice.reducer;
