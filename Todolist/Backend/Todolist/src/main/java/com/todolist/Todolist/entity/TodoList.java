package com.todolist.Todolist.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name=("Todolists"))
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,unique = true)
    private String task;
    @Column(nullable = false)
    private Boolean completed;
}
