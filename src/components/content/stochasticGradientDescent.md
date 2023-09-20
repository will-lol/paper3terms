## Gradient descent
In machine learning, gradient descent refers to an “optimising algorithm used to train machine learning models” (IBM n.d.)

Gradient descent is used to update the parameters of a model. Parameters such as: linear regression coefficients and weights. 

The machine learning algorithm uses a **cost function** to optimise the parameters of the model. The cost function is input the model's output. Its job is to output a number that represents the performance of the model in this instance, lower is better. 

The job of gradient descent is to optimise the cost function to a minimum. But without knowing the mathematical function it is tricky to know the derivative (that would ordinarily be used to find the minimum). The stochastic gradient descent model chooses some random parameters for the model. Then, it slightly modifies the parameters to observe how the model responds. The gradient of the line between these points may be positive or negative. If the gradient between the points responded positively to the algorithm's modification of parameters, it continues modifying the parameters in this way. 

## Things I used
https://www.ibm.com/topics/gradient-descent
https://towardsdatascience.com/stochastic-gradient-descent-clearly-explained-53d239905d31
