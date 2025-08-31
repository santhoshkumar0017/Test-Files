package com.todolist.Todolist.controller;

import com.todolist.Todolist.entity.TodoList;
import com.todolist.Todolist.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TodoListController {


    @Autowired
    private TodoListService listService;

    @GetMapping("/findAll")
    public List<TodoList> findAllList(){
        return listService.findAllList();
    }

    @PostMapping("/add")
    public String addTask(@RequestBody TodoList todoList){
        return listService.addTask(todoList);
    }

    @DeleteMapping("/remove/{id}")
    public String removeTask(@PathVariable Long id){
        return listService.removeTask(id);
    }

    @PutMapping("/update/{id}")
    public String updateTask(@PathVariable Long id){
        return listService.updateTask(id);
    }
}
