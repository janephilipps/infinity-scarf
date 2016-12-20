# Infinity Scarf generator

While learning about binary numbers during Day 10 of the [Hackerrank 30 days of code challenge](https://www.hackerrank.com/domains/tutorials/30-days-of-code/) I came up with a concept for a programmatically generated pattern for a knitted scarf.

The Fibonacci sequence has always been of interest to me, so I thought, why not create an array based on the sequence, convert each decimal number to a binary number, then use the `0`s and `1`s to represent two different colors of yarn in a knitting pattern.

This code generates a data object for an "infinity" scarf (pun intended!), taking in `width` and `height` parameters, finding the `area`, then creating an array of binary numbers based on the Fibonacci sequence (starting at `1`) that fills the `area` calculated using the given `width` and `height`.

Data object returned, where `width` and `height` represent the number of knitted stitches:
```
{
    width: width,
    height: height,
    data : [0,1,0,0,1,1, .... in length of area]
}
```