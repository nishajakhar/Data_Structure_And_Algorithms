
#include<iostream>
#include<climits>
using namespace std;

bool pairSum(int arr[], int len, int sum){
    int low = 0;
    int high = len-1;
    while(low<high){
        if(arr[low] + arr[high] == sum) {
            cout<<"Success : "<<low<<" - "<<high;
            return true;
        }
        else if(arr[low] + arr[high] > sum){
            cout<<"Time to decrease high"<<endl;
            high--;
        }
        else {
            cout<<"Time to increase low"<<endl;
            low++;
        }
    }
        return false;

    }


int main(){

    int n;
    cin>>n;
    int arr[n];
    for(int input=0; input<n ; input++){
        cin>>arr[input];
    }
    int sum;
    cin>>sum;
    pairSum(arr, n, sum);
    return 1;
}