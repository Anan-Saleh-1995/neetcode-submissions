public class Solution
{
    public bool IsValid(string s)
    {
        Stack<char> st = new Stack<char>();

        if (s.Length == 1)
        {
            return false;
        }

        for (int i = 0; i < s.Length; i++)
        {
            char ch = s[i];

            if (ch == '(' || ch == '{' || ch == '[')
            {
                st.Push(ch);
            }
            else
            {
                if (st.Count == 0)
                {
                    return false;
                }

                char pop = st.Pop();

                if (pop == '(' && ch != ')')
                {
                    return false;
                }
                else if (pop == '{' && ch != '}')
                {
                    return false;
                }
                else if (pop == '[' && ch != ']')
                {
                    return false;
                }
            }
        }

        if (st.Count != 0)
        {
            return false;
        }

        return true;
    }
}