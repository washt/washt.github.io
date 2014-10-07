---
layout: post
title:  "Animation with Java 2d Pt. I"
date:   2014-09-20 18:43
categories: java animation
---

This post will be the first of a series following my progress in animation  with Java's 2D graphics library. I will work through personal assignments, and highlight any walls I hit. 

For this post, I will create a basic animation of a stick figure doing jumping jacks. This will be accomplished entirely with awt objects drawn inside a java applet. This probably isn't the most efficient way of accomplishing this, but it is a good start to java animation, and we'll expand later. 

To begin, we'll need to organize our code into two files: a java class to describe the state and behavior of our stick fiqure, and a main code file to initilize our stickfigure and handle the lifecycle of the applet. 

Our java class will be called <h1>StickFigure.java</h1> It can be broken down into three parts: private variables that contain the state, the accessors or methods that access the private data, and two methods: JumpUp and JumpDown.

The first section contains the axis cordinates stored in arrays. 
{% highlight Java %}
    private int[] upX = {145,140,140,165,80,170};
    private int[] upY = {85,110,175,175,110,110};
    private int[] upW = {25,40,15,15,75,75};
    private int[] upH = {25,75,75,75,15,15}
{% endhighlight %}
Since these variables are private, they can only be accessed by functions of its own class.
Therefore we need to create accessors that our JumpUp and JumpDown Methods can Use.
{% highlight Java %}
    public int getUpX(int i) {return upX[i];}
    public int getUpY(int i) {return upY[i];}
    public int getUpW(int i) {return upW[i];}
    public int getUpH(int i) {return upH[i];}
{% endhighlight %}
This method iterates through the four accessors, drawing each respective point in the array on everypass. 
{% highlight Java %}
public void JumpUp() {
	for(int i<0; i<6;i++) {
		getUpX(i);
        getUpY(i);
        getUpW(i);
        getUpH(i);
	}
}
{% endhighlight %}
Putting it together for both JumpUp and JumpDown:
{% highlight Java %}
import java.awt.*;
import java.util.Random;

public class StickFigure {

    //vars

    private int[] upX = {145,140,140,165,80,170};
    private int[] upY = {85,110,175,175,110,110};
    private int[] upW = {25,40,15,15,75,75};
    private int[] upH = {25,75,75,75,15,15};


    private int[] downX = {145,140,75,175,130,170};
    private int[] downY = {85,110,175,175,50,50};
    private int[] downW = {25,40,75,75,15,15};
    private int[] downH = {25,75,15,15,75,75};

    //accesssors

    public int getUpX(int i) {return upX[i];}
    public int getUpY(int i) {return upY[i];}
    public int getUpW(int i) {return upW[i];}
    public int getUpH(int i) {return upH[i];}

    public int getdownX(int i) {return downX[i];}
    public int getdownY(int i) {return downY[i];}
    public int getdownW(int i) {return downW[i];}
    public int getdownH(int i) {return downH[i];}

    public void JumpUp() {
            for(int i=0;i<6;i++) {
                getUpX(i);
                getUpY(i);
                getUpW(i);
                getUpH(i);
            }
    }
    public void JumpDown() {
        for(int i=0;i<6;i++) {
            getdownX(i);
            getdownY(i);
            getdownW(i);
            getdownH(i);
        }

    }

    StickFigure() {
        JumpDown();
    }

}
{% endhighlight %}