a,b=map(int,input().split())
print("a = " + str(a) + "\n" + "b = " + str(b))

'''
V2. 

a,b=map(int,input().split())

while True:
    if -1000000<=a and a<=1000000:
        if -100000<=b and b<=1000000:
            print("a = " + str(a) + "\n" + "b = " + str(b))
            break
        continue
    else:
        continue
        
'''