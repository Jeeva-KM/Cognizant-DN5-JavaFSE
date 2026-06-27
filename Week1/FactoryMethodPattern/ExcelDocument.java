package com.cognizant.designpatterns.factorymethod;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Excel Document Opened");
    }

}