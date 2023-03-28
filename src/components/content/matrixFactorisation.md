Matrix factorisation is a simple machine learning model technique for recommendations. 
Matrix factorisation may be based upon explicit user interactions.
The following table is an example user—item interaction prediction matrix using explicit ratings out of 50:

| | Shrek | Minority Report | The Motorcycle Diaries |
|:--|:--|:--|:--|
| User 1 | 11 | 9 | 20 |
| User 2 | 30 | 30 | 45 |
| User 3 | 35 | 30 | 50 |

A user-item interaction matrix such as this one is the goal of matrix factorisation. Using this matrix we would be able to recommend the movies to the users based upon how much we think they might like them.

Factorisation in usual mathematics is simple, we break down a number into multiple, smaller parts:
$$
10=5\times2
$$
Matrix factorisation is different. We need to find two matrices that multiply together to form our user—item matrix. When multiplying matrices, we use the ‘dot product’.

In the recommendation model case, we need to find a user—feature matrix and a movie—feature matrix that multiply to our user—item matrix. 

### User—feature matrix (out of 5)
|  | User 1 | User 2 | User 3 |
|:--|:--|:--|:--|
| Feature 1 | 1 | 4 | 5 |
| Feature 2 | 3 | 5 | 5 |

### Movie—feature matrix (out of 5)
|  | Shrek | Minority Report | The Motorcycle Diaries |
|:--|:--|:--|:--|
| Feature 1 | 5 | 4 | 5 |
| Feature 2 | 2 | 2 | 5 |

For example, here is how we would calculate the user—item score for user 1 and Shrek.
1. Multiply Shrek’s feature 1 score by user 1’s feature 1 score
2. Do the same for Shrek’s feature 2 score and user 2’s feature 2 score
3. Add them together

In a recommendation model, we don’t know what our user—item matrix is going to be ahead of time. So, matrix factorisation is the process of finding two matrices that multiply to accurately represent a user—item matrix. 

## Thing I used:
https://developers.google.com/machine-learning/recommendation/collaborative/matrix
https://ieeexplore.ieee.org/document/5197422
https://www.mathsisfun.com/algebra/matrix-multiplying.html