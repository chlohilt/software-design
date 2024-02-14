This code takes a list of animals, either dogs or cats, and outputs some data on them. See results.md for what the output should look like.

The task is to implement generics by separating the get[animal]trainingprioritylist and get[animal]sorted functions into generic functions located in the Animal class.
To simplify things, create these functions as static. Else, an instance of Animal will have to be newed up to call the forementioned functions.

Question: What is the advantage of using function<T extends Animal>(param: T[]) instead of function(param: Animal[])?
