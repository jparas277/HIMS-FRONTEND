import axios from "axios";

const instance =axios.create({
  baseURL : "http://http://internal-PARAS-HIMS-BACKEND-ALB-2093012907.us-east-1.elb.amazonaws.com/",
})

export default instance;

