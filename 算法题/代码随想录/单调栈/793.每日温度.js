// class Solution {
//     public:
//         vector<int> dailyTemperatures(vector<int>& t) {
//             vector<int> res(t.size(), 0);
//             stack<int> st; // 栈：大----->小； 栈底---->栈顶; 递减
    
//             st.push(0); // 单调栈里存放的是数组下标
//             for (int i = 1; i < t.size(); i++)
//             {
//                 if (t[i] < t[st.top()]) // t[i]元素 < t[栈顶元素]
//                 {
//                     st.push(i);
//                 } else if (t[i] == t[st.top()])// t[i]元素 = t[栈顶元素]
//                 {
//                     st.push(i);
//                 } else
//                 {
//                     // 题目要求，找比当前大的, 也就是更高的温度. 要做更多操作，得到res数组
//                     while (!st.empty() && t[i] > t[st.top()])// t[i]元素 > t[栈顶元素]
//                     {
//                         res[st.top()] = i - st.top(); // 核心, 先使用栈顶计算res
//                         st.pop(); // 再出栈
//                     }
//                     st.push(i);
//                 }
//             }
//             return res;
//         }
//     };
    
    