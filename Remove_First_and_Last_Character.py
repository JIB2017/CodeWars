def remove_char(s):
    #your code here
    aux = ''
    for i in range(len(s)):
        if (i == 0):
            continue
        if (i == ( len(s) - 1 )):
            continue
        aux = aux + s[i]
    return aux