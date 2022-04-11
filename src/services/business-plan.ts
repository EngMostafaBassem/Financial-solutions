import { BusinessPlan } from "../type-dictionary/business-plan";
import { createServer } from "miragejs"

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