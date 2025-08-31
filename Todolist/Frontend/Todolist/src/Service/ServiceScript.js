import axios from 'axios'

const REST_API_URL = "http://localhost:8080";

export const addTask=(todolist)=> axios.post(REST_API_URL+"/add",todolist)
export const getList=() => axios.get(REST_API_URL+"/findAll")
export const updateList=(id) => axios.put(REST_API_URL+"/update/"+id)
export const removeList=(id) =>axios.delete(REST_API_URL+"/remove/"+id)