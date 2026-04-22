class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_dict = dict()
        t_dict = dict()
        for i, v in enumerate(s):
            if v in s_dict.keys():
                s_dict[v] += 1
            else:
                s_dict[v] = 1

        for i, v in enumerate(t):
            if v in t_dict.keys():
                t_dict[v] += 1
            else:
                t_dict[v] = 1

        if s_dict == t_dict:
            return True
        else:
            return False
        