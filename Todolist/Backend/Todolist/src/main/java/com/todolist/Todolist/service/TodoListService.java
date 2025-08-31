package com.todolist.Todolist.service;

import com.todolist.Todolist.entity.TodoList;
import com.todolist.Todolist.exception.ResourcesNotFound;
import com.todolist.Todolist.repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListService {


    @Autowired
    private TodoListRepository listRepository;

    public List<TodoList> findAllList() {
        return  listRepository.findAll();
    }

    public String addTask(TodoList todoList) {
        listRepository.save(todoList);
        return "Task Added";
    }

    public String removeTask(Long id) {
        TodoList todoList=listRepository.findById(id).
                orElseThrow( () ->new ResourcesNotFound("Task not Found"));

        listRepository.delete(todoList);
        return "Task Removed";
    }

    public String updateTask(Long id) {
        TodoList todoList=listRepository.findById(id).
                orElseThrow( () ->new  ResourcesNotFound("Task not Found"));
        if(todoList.getCompleted()) todoList.setCompleted(false);
        else todoList.setCompleted(true);
        listRepository.save(todoList);
        return "Task Updated "+todoList.getCompleted();
    }
}
