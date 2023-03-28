## Gradient descent
In machine learning, gradient descent refers to an “optimising algorithm used to train machine learning models” (IBM n.d.)

Gradient descent is used to update the parameters of a model. Parameters such as: linear regression coefficients and weights. 

In optimising a machine learning model we have a **cost function**. In classification, the X axis of the cost function is the parameters of the model and the Y axis is the measure of error or difference between the value that the model predicted and the output. 

In optimising a model, we would want to minimise the error in our predictions. Gradient descent is a way of finding the minimum on the cost function to find the optimal set of parameters.

## Make it stochastic!
By making gradient descent stochastic, we reduce computational burden. 
Stochastic means random. To make gradient descent stochastic, instead of computing the derivative at many points, we instead compute them at random values of x, vastly reducing the computational burden! 
## Things I used
https://www.ibm.com/topics/gradient-descent
https://towardsdatascience.com/stochastic-gradient-descent-clearly-explained-53d239905d31
