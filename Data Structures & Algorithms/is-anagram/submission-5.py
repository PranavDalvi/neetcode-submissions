class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mydict1 = {}
        mydict2 = {}

        sLen = len(s)
        tLen = len(t)

        if (sLen != tLen):
            return False

        for i in range(sLen):
            mydict1[s[i]] = mydict1.get(s[i], 0) + 1
            mydict2[t[i]] = mydict2.get(t[i], 0) + 1
        
        if (mydict1 == mydict2): 
            return True
        return False