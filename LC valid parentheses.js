var isValid = function(s) {
    let hashMap ={"(": ")", "{": "}", "[": "]" }
    let stack = []
    for(let ch of s){
    if (s.length<=1 )
    return false;
    else
    if(hashMap[ch])
    stack.push(hashMap[ch]);
    else
    if(stack.pop() !== ch) return false;
    }
    return (!stack.length) 
};

//Alternative answer
var isValid = function(s) {
    let hashMap ={"(": ")", "{": "}", "[":"]" }
    let stack =[]
    for(let ch of s) {
    if(hashMap[ch])
    stack.push(hashMap[ch]);
    else
    if(stack.pop() !== ch) return false;
    }
    if (stack. length==0) return true
    else
    return false
};
