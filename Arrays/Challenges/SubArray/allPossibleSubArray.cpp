#include<iostream>
#include<climits>
using namespace std;

void allPossibleSubArray(int arr[], int len){
    for(int start=0; start<len; start++){
        for(int end=start; end<len; end++){
            cout<<"[";
            for(int traverse=start ; traverse<=end; traverse++){
                cout<<arr[traverse];
                if(traverse != end){
                    cout<<", ";
                }
            }
            cout<<"]";
            cout<<endl;
        }
    }
}

int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int input=0; input<n ; input++){
        cin>>arr[input];
    }
    allPossibleSubArray(arr, n);
    return 1;
}