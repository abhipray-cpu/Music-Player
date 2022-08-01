#include <bits/stdc++.h>
using namespace std;
int cal(int k, int u)
{
    do
    {
        k = 2 * k;
        u = k + 2;
    } while (k < u - 10);
    return u;
}
int main()
{
    cout << cal(2, 21);
}