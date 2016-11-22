This file contains instructions for reproducing the results reported in:
Open IE as an Intermediate Structure for Semantic Tasks 
Gabriel Stanovsky, Ido Dagan and Mausam 
ACL-IJCNLP, Beijing, China. July 2015.

The following makes use of Omer Levy's framework for creating and testing word representation, freely available for download at:
https://bitbucket.org/omerlevy/hyperwords
-------------------------------------------------------

To reproduce the results for Open IE embeddings for the similarity and analogy test sets, follow these steps:

1. Unpack the embeddings, and convert them to numpy format, by runnning:

> python hyperwords/text2numpy.py open_ie_embeddings.contexts
> python hyperwords/text2numpy.py open_ie_embeddings.words

2. Evaluate the the performance of the embeddings on each similarity test set in hyperwords/testsets/ws with hyperwords/ws_eval.py. For example, to test on ws353 test set, run:

> python hyperwords/hyperwords/ws_eval.py --w+c OPEN_IE open_ie_embeddings/open_ie_embeddings hyperwords/testsets/ws/ws353.txt

3. Evaluate the the performance of the embeddings on each analogy test set in hyperwords/testsets/analogy with hyperwords/analogy_eval.py. For example, to test on Google's test set, run:

> python hyperwords/hyperwords/analogy_eval.py --w+c OPEN_IE open_ie_embeddings/open_ie_embeddings hyperwords/testsets/analogy/google.txt