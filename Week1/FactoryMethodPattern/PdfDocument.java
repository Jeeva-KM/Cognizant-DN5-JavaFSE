package com.cognizant.designpatterns.factorymethod;

public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("PDF Document Opened");
    }

}