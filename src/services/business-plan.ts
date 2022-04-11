import { createServer } from "miragejs"

//here will mock the post request by using miragejs package
createServer({
    routes() {
      this.post("/api/buisness", () =>[])
    },
  })
const postBusinessPlan=(values:any)=>{
    fetch("/api/buisness",{method:'POST',body:values})
    .then((response) => response.json())
}
export default {postBusinessPlan}