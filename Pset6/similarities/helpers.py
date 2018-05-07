def lines(a, b):
    """Return lines in both a and b"""
    #start new code
    # Split into lines
    fileOne = a.splitlines(True)
    fileTwo = b.splitlines(True)
    # compare a to b
    sameLines = fileOne&fileTwo
    print(sameLines)
    # Return list of lines
    #end new code
    #  TODO
    return sameLines


def sentences(a, b):
    """Return sentences in both a and b"""

    # TODO
    return []


def substrings(a, b, n):
    """Return substrings of length n in both a and b"""

    # TODO
    return []
