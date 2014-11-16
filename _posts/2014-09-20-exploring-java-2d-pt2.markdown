---
layout: post
title:  "Animation with Java 2d Pt. II"
date:   2014-10-12 19:45 
categories: java animation
---

Greetings! Today we will continue on our introduction to simulation in java by building the client program to initialize our `StickFigure` class. We well create a file called `JumpingJackApplet.java` that will handle all applet events and our StickFigure class. To begin, we'll need to setup the necessary methods for our applet to work. 
We use six methods in our client program for our applet to run. These methods are `init()` , `start()`, `update()`, `paint()`, `stop()`, and `destroy()`. 

We'll setup our client file with these methods and some cosole output statements for debugging in the future. 
 
{% highlight Java %}

public class JumpingJackApplet extends  Applet {

    public void init() {
        System.out.println(">>INIT<<");
    }
    public void update(Graphics g) {
        System.out.println(">>PAINT<<");
    }
    public void start() {
        System.out.println(">>START<<");
    }
    public void paint() {
    	System.out.println(">>PAINT<<");
        }
    public void run() {
        System.out.println(">>RUN<<");
    }
    public void stop() {
        System.out.println(">>STOP<<");
    }
    public void destroy() {
        System.out.println(">>DESTROY<<");
    }
}
{% endhighlight %}