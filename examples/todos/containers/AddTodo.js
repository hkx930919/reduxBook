import  React  from "react";
import { connect } from "react-redux";
import { addTodo  } from "../actions";
// {
//     dispatch
    
// }
let AddTodo = (obj)=>{
    let input;
    return (
        <div>
            <form
            onSubmit = {
                e=>{
                    
                    e.preventDefault();
                    console.log(obj,'obj');
                    
                    if(!input.value.trim()){
                        return 
                    }
                    obj.dispatch(addTodo(input.value))
                    input.value =''
                }
            }
            >
            <input ref={node=>{input=node}}></input>
            <button type="submit">
                Add Todo
            </button>

            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)
export default AddTodo
