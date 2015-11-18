---
layout: post
title: "Google Tensorflow Notes"
date:  2015-11-17 18:38
categories: machine learning
---

#### This is a collection of notes made in a Jupyter notebook while going over the [Deep-MNIST Tutorial](http://tensorflow.org/tutorials/) for Google's Tensorflow. Some comments are ripped directly off the page, while others are attempts to simply concepts or explicitly explain what may be implied. Data set `input_data` can be found [here](https://tensorflow.googlesource.com/tensorflow/+/master/tensorflow/g3doc/tutorials/mnist/input_data.py).

#### Setup <br>
{% highlight Python %}
import input_data
import tensorflow as tf
mnist = input_data.read_data_sets('MNIST_data', one_hot=True)
session  = tf.InteractiveSession()
{% endhighlight %}

#### Placeholders are not specific values -- but containers that we'll input later into TensorFlow to run a computation.
{% highlight Python %}

'''
    Shape:
      784 -> Flattened MNIST image
       10 -> Number Classification
'''
x = tf.placeholder("float",shape=[None,784])
y_ = tf.placeholder("float",shape=[None,10])
'''
    Variables Weights->W and Biases->b
    live in TensorFlow' computation graph.
    This is usually for your model parameters
    here initialized as zero'd tensors:
    W = tf.Variable(tf.zeros([784,10]))
    b = tf.Variable(tf.zeros([10]))
'''
# register the variable with thge given session
session.run(tf.initialize_all_variables())

{% endhighlight %}

### Softmax Regression

This is my first encounter with TensorFlow, but this appears to be a key feature:
This step doesn't actually train the model, but instead adds the necessary
operations to our tensors computational graph.

{% highlight Python %}
y = tf.nn.softmax(tf.matmul(x,W) + b)
# Cost function -> cross-entropy between
# the target and the model's prediction for the entire minibatch
cross_entropy = -tf.reduce_sum(y_*tf.log(y))
# Train the model
# Steepest Gradient Decent -> 0.01
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)

{% endhighlight %}

#### Training - for each training step, load 50 examples
------------

{% highlight Python %}

for i in range(1000):
    batch = mnist.train.next_batch(50)
    # `feed_dict` replaces the placeholder
    # variable we created earlier with the actual training data
    train_step.run(feed_dict={x: batch[0], y_: batch[1]})

{% endhighlight %}
__*Note*__: you can replace any tensor in your computation graph
using `feed_dict` -- it's not restricted to just placeholders <br>

#### Measure Accuracy - `argmax` returns the index of the highest entry in a tensor along some axis.
##### In order to test the accuracy, we cast the matrix of booleans returned by .equal() to 1's and 0'1, and take the average
-----------

{% highlight Python %}
# argmax(y,1) -> what the model predicted
# argmax(y_,1) -> what the model actually is
# equal() is used here to test if classified correctly
correct_prediction = tf.equal(tf.argmax(y,1),tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))
print "Softmax Regression Accuracy ",accuracy.eval(feed_dict={x:mnist.test.images,
                           y_: mnist.test.labels})

{% endhighlight %}

### Deep Convolution Network
-------

{% highlight Python %}

def weight_variable(shape):
    '''
      Initialize variables with small \
      amount of noise for symmetry breaking \
      and prevention of 0 gradiants
    '''
    initial = tf.truncated_normal(shape,stddev=0.1)
    return tf.Variable(initial)

def bias_variable(shape):
    '''
       Initialize with slightly positive bias to
       prevent "dead neurons"
    '''
    initial = tf.constant(0.1,shape=shape)
    return tf.Variable(initial)

def conv2d(x,W):
    '''
        Convolution stride of one and zero
        padded so thatthe output is the same
        size as the input.
    '''
    return tf.nn.conv2d(x,W,strides=[1,1,1,1],
                               padding='SAME')
def max_pool_2x2(x):
    '''
        Pooling is max pooling over 2x2 blocks
    '''
    return tf.nn.max_pool(x,ksize=[1,2,2,1],
                          strides=[1,2,2,1],padding='SAME')

{% endhighlight %}

#### First Convolutional Layer
---------

{% highlight Python %}

W_conv1 = weight_variable([5,5,1,32])
b_conv1 = bias_variable([32])

# Reshape the tensor before applying layer
x_image = tf.reshape(x,[-1,28,28,1])
h_conv1 = tf.nn.relu(conv2d(x_image,W_conv1) + b_conv1)
h_pool1 = max_pool_2x2(h_conv1)

{% endhighlight %}

#### Second Convolutional Layer
----------

{% highlight Python %}

# 64 Features per 5x5 patch
W_conv2 = weight_variable([5,5,32,64])
b_conv2 = bias_variable([64])

h_conv2 = tf.nn.relu(conv2d(h_pool1,W_conv2) + b_conv2)
h_pool2 = max_pool_2x2(h_conv2)

{% endhighlight %}

#### Densely Connected Layer

We now reduce image to 7x7, and add a fully-connected layer w/ 1024 neurons
to process the entire image. We then reshape the tensor from the pooling layer
into a batch of vectors, then multiply by a weight matrix,
add a bias and apply a Rectified Linear Units(ReLU)
---------
{% highlight Python %}

W_fc1 = weight_variable([7 * 7 * 64,1024])
b_fc1 = bias_variable([1024])

h_pool2_flat = tf.reshape(h_pool2,[-1,7 * 7 * 64])
h_fc1 = tf.nn.relu(tf.matmul(h_pool2_flat,W_fc1) + b_fc1)

{% endhighlight %}

#### Dropout Step

Since our densly connected layer is prone to overfitting,
we `dropout` some nodes in the graph. We create a `placeholder` container
for the probability that a node is kept -- this is turned off during testing.

--------

{% highlight Python %}

keep_prob = tf.placeholder("float")
# TF's `tf.nn.dropout` function automagically
# scales and masks neuron outputs, so Dropout reduced to one line of code:
h_fc1_drop = tf.nn.dropout(h_fc1,keep_prob)

{% endhighlight %}

#### Readout Layer - softmax
-------
{% highlight Python %}

W_fc2 = weight_variable([1024,10])
b_fc2 = bias_variable([10])
y_conv = tf.nn.softmax(tf.matmul(h_fc1_drop, W_fc2) + b_fc2)

{% endhighlight %}

#### Training the Network

Pretty similar to the Sofmax network save an improved
ADAM opimizer over 0.1 Gradient Decent Step,
additional parameters for dropout, and logging.
--------

{% highlight Python %}

cross_entropy = -tf.reduce_sum(y_*tf.log(y_conv))
train_step = tf.train.AdamOptimizer(1e-4).minimize(cross_entropy)
correct_prediction = tf.equal(tf.argmax(y_conv,1), tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))
session.run(tf.initialize_all_variables())

for i in range(20000):
    batch = mnist.train.next_batch(50)
    if i%100:
        train_accuracy = accuracy.eval(feed_dict={
                x:batch[0],y_:batch[1],keep_prob:1.0})
        print "step %d, training accuracy %g"%(i,train_accuracy)
    train_step.run(feed_dict={x:batch[0],y_:batch[1],keep_prob:0.5})

print "Test Accuracy %g"%accuracy.eval(feed_dict={
        x:mnist.test.images,y_:mnist.test.labels, keep_prob:1.0
    })

{% endhighlight %}
